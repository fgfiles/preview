'use strict';

import { Importer, AnimationClip, AnimationTrack, Bone, Mesh, Model, Skeleton, Texture, Transform, MaterialPhong } from '../main.js';

let importCache = {};

export class ImportModelFromOnyx extends Importer {
    static clearCache(){
        importCache = {};
    }

    static async load(options = {}){
        let instance = {};
        await this.loadFromURL(options.src, instance, importCache);

        this.options = options;

        if(!importCache[options.src].model){
            let parsed = JSON.parse(importCache[options.src].input);

            let meshes = this.cloneMeshes(parsed.model.meshes, instance);
            let skeleton = this.cloneSkeleton(parsed.model.bones, instance);

            // Flatten top level in skeleton children
            skeleton.children = skeleton.flattenChildren();
            skeleton.children = this.sortBones(skeleton.children, parsed.model.meshes[0].boneOrder);

            let animationClips = this.cloneAnimationClips(parsed.model.animationClips, skeleton, instance);

            importCache[options.src].model = new Model({
                meshes: meshes,
                skeleton: skeleton,
                animationClips: animationClips
            });

            // console.log(parsed, importCache[options.src].model);

            // Free up memory
            delete importCache[options.src].input;
        }

        return importCache[options.src].model;
        return this.cloneModel(importCache[options.src].model, instance);
    }

    static cloneModel(cachedModel, instance){
		let meshes = this.cloneMeshes(cachedModel.meshes, instance);
		let skeleton = this.cloneSkeleton(cachedModel.skeleton, instance);
		let animationClips = this.cloneAnimationClips(cachedModel.animationClips, skeleton, instance);

		return new Model({
			meshes: meshes,
			skeleton: skeleton,
			animationClips: animationClips
		});
	}

	static cloneMeshes(cached, instance){
		let meshes = [];

		for(let mesh of cached){
            let diffuseTexture = null;
            // Should (optionally?) allow instance of texture
            if(mesh.material.diffuseTexture){
                if(mesh.material.diffuseTexture instanceof Texture){
                    diffuseTexture = mesh.material.diffuseTexture;
                }else{
                    diffuseTexture = new Texture({src: instance.resPath + "/" + mesh.material.diffuseTexture.src});
                }
            }

			meshes.push(new Mesh({
                id: "MESH_COPY", // TODO: Babel doesn't seem to handle not passing this in very well
				material: new MaterialPhong(mesh.material),
				vertices: new Float32Array(mesh.vertices),
				uvs: new Float32Array(mesh.uvs),
				normals: new Float32Array(mesh.normals),
				weights: new Float32Array(mesh.weights),
				weightIndices: new Float32Array(mesh.weightIndices)
            }));
            
            meshes[meshes.length - 1].material.buildProgram();
		}

		return meshes;
	}

	static cloneSkeleton(cached, instance){
        if(!cached) return;
        
        let skeleton = new Skeleton({children: this.cloneBones(cached)});

        // Calc bind pose
        skeleton.calcBindPose();

		// Copy skeleton
		return skeleton;
    }
    
    static sortBones(bones, order = []){
        let result = [];

        order.forEach((key) => {
            var found = false;
            bones = bones.filter((item) => {
                if(!found && item.id == key) {
                    result.push(item);
                    found = true;
                    return false;
                } else 
                    return true;
            })
        });

        // Include any missing ones
        for(let bone of bones){
            if(result.indexOf(bone) < 0) result.push(bone);
        }

        return result;
    }

	static cloneBones(cached, parent, flatBonesArray = [], instance){
		// Copy bones
		let bones = [];

		function findParentByID(id, skeleton){
			for(let child of skeleton){
				if(child.id == id) return child;
			}
		}

		for(let bone of cached.children || cached){
			let newBone = findParentByID(bone.id, flatBonesArray);

			if(!newBone){
                let newTransform = new Transform();

                if(bone.matrixWorld){ 
                    // Loading from cached model
                    newTransform.localMatrix = new Float32Array(bone.matrix);
                }else if(bone.transform.translation){ 
                        // If loading from file
                    newTransform.translate.xyz = [bone.transform.translation[0], bone.transform.translation[1], bone.transform.translation[2]];
                    newTransform.sxyz = [bone.transform.scale[0], bone.transform.scale[1], bone.transform.scale[2]];
                    switch(bone.transform.rotation[3]){
                        case "ZYX":
                            newTransform.rotateToZYX(bone.transform.rotation[2], bone.transform.rotation[1], bone.transform.rotation[0]);
                            break;
                        case "XYZ":
                        default:
                            newTransform.rotateToXYZ(bone.transform.rotation[0], bone.transform.rotation[1], bone.transform.rotation[2]);
                            break;
                    }
                }else{
                    // Loading from cached model
                    newTransform.localMatrix = new Float32Array(bone.transform.localMatrix);
                }

                // newTransform.invalidate();
	
				newBone = new Bone({
					name: bone.name,
					id: bone.id || bone.FBXID,
					parent: parent,
					inheritTransform: bone.inheritTransform,
					transform: newTransform
				});
	
				newBone.children = this.cloneBones(bone, newBone, flatBonesArray);
			}			

			bones.push(newBone);
			flatBonesArray.push(newBone);
		}

		return bones;
	}

	static cloneAnimationClips(cached, skeleton){
		let clips = [];
		for(let clip of cached){
			// console.log(clip);
			clips.push(new AnimationClip({
				name: clip.name,
				loop: clip.loop,
				enabled: clip.enabled,
				tracks: this.cloneAnimationTracks(clip.tracks, skeleton)
			}))
		}

		return clips;
	}

	static cloneAnimationTracks(cached, skeleton){
		let tracks = [];

		function findParentByID(id, skeleton){
			for(let child of skeleton.children){
				if(child.id == id) return child;
			}
        }

		function findParentByName(name, skeleton){
			for(let child of skeleton.children){
				if(child.name == name) return child;
			}
		}

		for(let track of cached){
            let parent = null;
            if(!track.parent.id){
                // Reading from file
                parent = findParentByName(track.parent, skeleton);
            }else{
                // Reading from cached model
                parent = findParentByID(track.parent.id, skeleton);
            }

			// console.log(track);
			tracks.push(new AnimationTrack({
				name: track.name,
				type: track.type,
				times: track.times.slice(),
				values: track.values.slice(),
				parent: parent
			}))
		}

		return tracks;
	}

}