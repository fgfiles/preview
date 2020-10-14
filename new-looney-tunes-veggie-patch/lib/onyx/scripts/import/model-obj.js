'use strict';

import { Importer, Mesh, Model, Texture, MaterialPhong, ImportMaterialsFromMTL } from '../main.js';

let importCache = {};

export class ImportModelFromOBJ extends Importer {
    static clearCache(){
        importCache = {};
    }

    static async load(options = {}){
        let instance = {};
        await this.loadFromURL(options.src, instance, importCache);

        this.options = options;

        if(!importCache[options.src].model){
            let lines = instance.input.split("\n");

            let currentMesh = null;
            let meshes = [];
            let materials = [];
            let verts = [];
            let vertTs = [];
            let vertNs = [];
            let vertPs = [];
            // let faces = [];

            // Parse Lines
            let tLine = [];
            for(let line of lines){
                tLine = line.split(" ");

                // Sanitize
                if(tLine[1] === "") tLine.splice(1, 1);
                
                switch(tLine[0]){
                    case "o":
                        // Object name
                    case "g":
                        // Group name
                        if(tLine[tLine.length - 1] == "default") continue;
                        
                        currentMesh = this.getMaterialById(tLine[tLine.length - 1], meshes);

                        if(!currentMesh){
                            let mesh = new Mesh({
                                id: tLine[tLine.length - 1],
                                material: null,
                                vertices: [], // Creating standard arrays to make it easier to push to  
                                uvs: [],
                                normals: [],
                                // parameters: vertPs,
                                // faces: faces
                            });
                            meshes.push(mesh);

                            currentMesh = mesh;
                        }
                       
                        break;
                    case "mtllib":
                        materials = await ImportMaterialsFromMTL.load({resPath: instance.resPath, src: instance.resPath + "/" + tLine[1].trim()});
                        break;
                    case "usemtl":
                        currentMesh.material = this.getMaterialByName(tLine[1].trim(), materials);
                        break;
                    case "v":
                        this.parseGeometricVertices(tLine, verts);
                        break;
                    case "vt":
                        this.parseTextureCoordinates(tLine, vertTs);
                        break;
                    case "vn":
                        this.parseVertexNormals(tLine, vertNs);
                        break;
                    case "vp":
                        this.parseParameterSpaceVertices(tLine, vertPs);
                        break;
                    case "f":
                        this.parsePolygonalFaces(tLine, verts, vertTs, vertNs, vertPs, currentMesh);
                        break;
                    case "s":
                        // Smooth shading
                        break;
                }
            }

            // for(let mesh of meshes){
            //     let diffuseTexture = null;
            //     if(mesh.material.diffuseTexture){
            //         // TODO: Make this optional for cases where a new instance of the texture is needed
            //         // if(!cacheTexture){
            //         //     diffuseTexture = new Texture(mesh.material.diffuseTexture.src);
            //         //     await diffuseTexture.load();
            //         // }else{
            //             diffuseTexture = mesh.material.diffuseTexture;
            //         // }
            //     }

            //     meshes.push(new Mesh({
            //         material: new MaterialPhong({
            //             name: mesh.material.name,
            //             diffuseTexture: diffuseTexture,
            //             lighting: 1
            //         }),
            //         vertices: new Float32Array(mesh.vertices), // Convert to Float32Arrays (more efficient and required for WebGL)
            //         uvs: new Float32Array(mesh.uvs),
            //         normals: new Float32Array(mesh.normals)
            //     }));

            //     // let vertCs = [];
            //     // for(var i = 0; i < mesh.vertices.length * 4; i += 4){
            //     //     vertCs[i] = i / mesh.vertices.length;
            //     //     // vertCs[i + 1] = 1 / (i / mesh.vertices.length);
            //     //     vertCs[i + 1] = 0;
            //     //     vertCs[i + 2] = 1 / (i / mesh.vertices.length);
            //     //     // vertCs[i + 2] = 0;
            //     //     vertCs[i + 3] = 1;
            //     // }
            //     // mesh.material.vertexColors = new Float32Array(vertCs);
            // }
            
            importCache[options.src].model = new Model({
                meshes: meshes
            });
            
            // Free up memory
            delete importCache[options.src].input;
        }

        // console.log(importCache[options.src].model);

        return this.cloneModel(importCache[options.src].model);
    }
    
    static getMeshById(id, meshes){
        for(let mesh of meshes){
            if(mesh.id === id) return mesh;
        }

        return null;
    }
    
    static getMaterialById(id, materials){
        for(let material of materials){
            if(material.id === id) return material;
        }

        return null;
    }

    static getMeshByName(name, meshes){
        for(let mesh of meshes){
            if(mesh.name === name) return mesh;
        }

        return null;
    }
    
    static getMaterialByName(name, materials){
        for(let material of materials){
            if(material.name === name) return material;
        }

        return null;
    }

    static parseGeometricVertices(line, output){
        // # List of geometric vertices, with (x,y,z[,w]) coordinates, w is optional and defaults to 1.0.
        // v 0.123 0.234 0.345 1.0
        // v ...
        // ...

        // w to 1.0
        if(line[4] === undefined) line[4] = 1.0;

        // return new Vertex3(line[0], line[1], line[2], line[3]);
        output.push(line[1] * 1, line[2] * 1, line[3] * 1);
    }

    static parseTextureCoordinates(line, output){
        // # List of texture coordinates, in (u, v [,w]) coordinates, these will vary between 0 and 1, w is optional and defaults to 0.
        // vt 0.500 1 [0]
        // vt ...
        // ...
        
        if(line[3] === undefined){
            output.push(line[1] * 1, line[2] * 1);
        }else{
            output.push(line[1] * 1, line[2] * 1);//, line[3] * 1 || 0);
        }
    }

    static parseVertexNormals(line, output){
        // # List of vertex normals in (x,y,z) form; normals might not be unit vectors.
        // vn 0.707 0.000 0.707
        // vn ...
        // ...
        
        output.push(line[1] * 1, line[2] * 1, line[3] * 1);
    }

    static parseParameterSpaceVertices(line, output){
        // # Parameter space vertices in ( u [,v] [,w] ) form; free form geometry statement ( see below )
        // vp 0.310000 3.210000 2.100000
        // vp ...
        // ...

        output.push(line[1] * 1, line[2] * 1, line[3] * 1);
    }

    static parsePolygonalFaces(line, verts, vertTs, vertNs, vertPs, mesh){
        // # Polygonal face element
        // f 1 2 3 (just vertices)
        // f 3/1 4/2 5/3 (vertices/texturecoordinates)
        // f 6/4/1 3/5/3 7/6/5 (vertices/texturecoordinates/normals)
        // f 7//1 8//2 9//3 (vertices//normals)
        // f ...

        let parts = [];
        for(var i = 1; i < line.length; i++){
            parts[i - 1] = line[i].split("/"); // 6/4/1 3/5/3 7/6/5 -> [[6,4,1], [3,5,3], [7,6,5]]
        }

        // Sanitize
        for(var i = 0; i < parts.length; i++){
            if(parts[i].length < 2) parts.splice(i, 1);
        }

        // let face = {
        if(parts.length === 3){
            mesh.vertices.push(verts[((parts[0][0] * 1 - 1) * 3) + 0], verts[((parts[0][0] * 1 - 1) * 3) + 1], verts[((parts[0][0] * 1 - 1) * 3) + 2],
                                verts[((parts[1][0] * 1 - 1) * 3) + 0], verts[((parts[1][0] * 1 - 1) * 3) + 1], verts[((parts[1][0] * 1 - 1) * 3) + 2],
                                verts[((parts[2][0] * 1 - 1) * 3) + 0], verts[((parts[2][0] * 1 - 1) * 3) + 1], verts[((parts[2][0] * 1 - 1) * 3) + 2]);
            if(parts[0][1] !== "") mesh.uvs.push(vertTs[((parts[0][1] * 1 - 1) * 2) + 0], vertTs[((parts[0][1] * 1 - 1) * 2) + 1],
                                vertTs[((parts[1][1] * 1 - 1) * 2) + 0], vertTs[((parts[1][1] * 1 - 1) * 2) + 1],
                                vertTs[((parts[2][1] * 1 - 1) * 2) + 0], vertTs[((parts[2][1] * 1 - 1) * 2) + 1]);
            if(parts[0][2] !== "") mesh.normals.push(vertNs[((parts[0][2] * 1 - 1) * 3) + 0], vertNs[((parts[0][2] * 1 - 1) * 3) + 1], vertNs[((parts[0][2] * 1 - 1) * 3) + 2],
                        vertNs[((parts[1][2] * 1 - 1) * 3) + 0], vertNs[((parts[1][2] * 1 - 1) * 3) + 1], vertNs[((parts[1][2] * 1 - 1) * 3) + 2],
                        vertNs[((parts[2][2] * 1 - 1) * 3) + 0], vertNs[((parts[2][2] * 1 - 1) * 3) + 1], vertNs[((parts[2][2] * 1 - 1) * 3) + 2]);
        }else{
            mesh.vertices.push(verts[((parts[0][0] * 1 - 1) * 3) + 0], verts[((parts[0][0] * 1 - 1) * 3) + 1], verts[((parts[0][0] * 1 - 1) * 3) + 2],
                                verts[((parts[1][0] * 1 - 1) * 3) + 0], verts[((parts[1][0] * 1 - 1) * 3) + 1], verts[((parts[1][0] * 1 - 1) * 3) + 2],
                                verts[((parts[2][0] * 1 - 1) * 3) + 0], verts[((parts[2][0] * 1 - 1) * 3) + 1], verts[((parts[2][0] * 1 - 1) * 3) + 2],
                                verts[((parts[0][0] * 1 - 1) * 3) + 0], verts[((parts[0][0] * 1 - 1) * 3) + 1], verts[((parts[0][0] * 1 - 1) * 3) + 2],
                                verts[((parts[2][0] * 1 - 1) * 3) + 0], verts[((parts[2][0] * 1 - 1) * 3) + 1], verts[((parts[2][0] * 1 - 1) * 3) + 2],
                                verts[((parts[3][0] * 1 - 1) * 3) + 0], verts[((parts[3][0] * 1 - 1) * 3) + 1], verts[((parts[3][0] * 1 - 1) * 3) + 2]);
            if(parts[0][1] !== "") mesh.uvs.push(vertTs[((parts[0][1] * 1 - 1) * 2) + 0], vertTs[((parts[0][1] * 1 - 1) * 2) + 1],
                                        vertTs[((parts[1][1] * 1 - 1) * 2) + 0], vertTs[((parts[1][1] * 1 - 1) * 2) + 1],
                                        vertTs[((parts[2][1] * 1 - 1) * 2) + 0], vertTs[((parts[2][1] * 1 - 1) * 2) + 1],
                                        vertTs[((parts[0][1] * 1 - 1) * 2) + 0], vertTs[((parts[0][1] * 1 - 1) * 2) + 1],
                                        vertTs[((parts[2][1] * 1 - 1) * 2) + 0], vertTs[((parts[2][1] * 1 - 1) * 2) + 1],
                                        vertTs[((parts[3][1] * 1 - 1) * 2) + 0], vertTs[((parts[3][1] * 1 - 1) * 2) + 1]);
            if(parts[0][2] !== "") mesh.normals.push(vertNs[((parts[0][2] * 1 - 1) * 3) + 0], vertNs[((parts[0][2] * 1 - 1) * 3) + 1], vertNs[((parts[0][2] * 1 - 1) * 3) + 2],
                                vertNs[((parts[1][2] * 1 - 1) * 3) + 0], vertNs[((parts[1][2] * 1 - 1) * 3) + 1], vertNs[((parts[1][2] * 1 - 1) * 3) + 2],
                                vertNs[((parts[2][2] * 1 - 1) * 3) + 0], vertNs[((parts[2][2] * 1 - 1) * 3) + 1], vertNs[((parts[2][2] * 1 - 1) * 3) + 2],
                                vertNs[((parts[0][2] * 1 - 1) * 3) + 0], vertNs[((parts[0][2] * 1 - 1) * 3) + 1], vertNs[((parts[0][2] * 1 - 1) * 3) + 2],
                                vertNs[((parts[2][2] * 1 - 1) * 3) + 0], vertNs[((parts[2][2] * 1 - 1) * 3) + 1], vertNs[((parts[2][2] * 1 - 1) * 3) + 2],
                                vertNs[((parts[3][2] * 1 - 1) * 3) + 0], vertNs[((parts[3][2] * 1 - 1) * 3) + 1], vertNs[((parts[3][2] * 1 - 1) * 3) + 2]);
        }
            
        // };
    }

    setIlluminationMode(material, mode = 0){
        switch(mode){

        }
    }

    static cloneModel(cachedModel){
		let meshes = this.cloneMeshes(cachedModel.meshes);
		let skeleton = this.cloneSkeleton(cachedModel.skeleton);
		let animationClips = this.cloneAnimationClips(cachedModel.animationClips, skeleton);

		return new Model({
            id: cachedModel.id,
			meshes: meshes,
			skeleton: skeleton,
			animationClips: animationClips
		});
	}

	static cloneMeshes(cached){
		let meshes = [];

		for(let mesh of cached){
            if(!mesh.material) continue;

			meshes.push(new Mesh({
                id: mesh.id,
				material: new MaterialPhong(mesh.material),
				vertices: new Float32Array(mesh.vertices),
				uvs: new Float32Array(mesh.uvs),
				normals: new Float32Array(mesh.normals),
				weights: new Float32Array(mesh.weights),
				weightIndices: new Float32Array(mesh.weightIndices)
			}));
		}

		return meshes;
	}

	static cloneSkeleton(cached){
        if(!cached) return;
        
		// Copy skeleton
		return new Skeleton({children: this.cloneBones(cached)})
	}

	static cloneBones(cached, parent, flatBonesArray = []){
		// Copy bones
		let bones = [];

		function findParentByID(id, skeleton){
			for(let child of skeleton){
				if(child.id == id) return child;
			}
		}

		for(let bone of cached.children){
			let newBone = findParentByID(bone.id, flatBonesArray);

			if(!newBone){
				let newTransform = new Transform();
				newTransform.localMatrix = new Float32Array(bone.transform.localMatrix);
				newTransform.generateTranslationRotationScale();
	
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

		for(let track of cached){
			// console.log(track);
			tracks.push(new AnimationTrack({
				name: track.name,
				type: track.type,
				times: track.times.slice(),
				values: track.values.slice(),
				parent: findParentByID(track.parent.id, skeleton)
			}))
		}

		return tracks;
	}

}