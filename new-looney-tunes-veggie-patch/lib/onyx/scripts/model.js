import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Component, Transform } from './main.js';
// import Skeleton from './skeleton';

const tMatrix = mat4.create();

export class Model extends Component {
    constructor({materials = [], meshes = [], bones = [], skeleton = null, skeletalAnimations = [], animationClips = []} = {}) {
		super(...arguments);
		
		this.meshes = meshes;
		
		this.animationClips = animationClips;
        this.bones = bones;
        this.skeleton = skeleton;
        this.skeletalAnimations = skeletalAnimations;
	}
	
	update(dt, scene, entity){
		if(this.skeleton) this.skeleton.update(dt);
		
		for(var i = 0; i < this.animationClips.length; i++){
			this.animationClips[i].update(dt);
		}
	}

    render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, materialOverride, frameBufferTextureStack) {
		stack.push(this);

		// Calculate view matrix
		mat4.mul(tMatrix, modelMatrix, this.transform.localMatrix);

		for(var i = 0; i < this.meshes.length; i++){
			this.meshes[i].render(dt, scene, viewport, camera, stack, viewMatrix, tMatrix, materialOverride, frameBufferTextureStack);
		}

		stack.pop();
    }

    renderPick(viewport, camera, entity, entityId) {
        // TODO
        return;

		if(!this.vertices.length) return;

		// TODO, FIX
		for(var i = 0; i < this.materials.length; i++){
			if(!this.materials[i].vertices.length) continue;

			let vertColors = [];
			for(var j = 0; j < this.vertices[i].length; j++){
				vertColors.push((entityId + 1) / 256); //ID?
				vertColors.push((entityId + 1) / 256);
				vertColors.push((entityId + 1) / 256);
				vertColors.push(1);
			}

			this.materialPick.vertices = this.materials[i].vertices;
			this.materialPick.vertexColors = new Float32Array(vertColors);

			this.materialPick.render(viewport, camera, entity, this, entityId, offset);
		}
    }

	calcParentMatrix(cMatrix = tMatrix){ //TODO: Confusing named function 
		return;
        if(!this.parent){
            mat4.copy(cMatrix, this.transform.localMatrix);
        }else{
            this.parent.calcParentMatrix(cMatrix);
            mat4.multiply(cMatrix, cMatrix, this.transform.localMatrix);
        }
    }
}

// REFERENCE: Model or Mesh? https://books.google.com/books?id=0bUJAgAAQBAJ&pg=PA38&lpg=PA38&dq=model+or+mesh&source=bl&ots=YHaPzACkgG&sig=ZGRp7qyCQbVlqZECbm0Hx-oZTYc&hl=en&sa=X&ved=0ahUKEwjNsYK59-nWAhUN8YMKHZ5UAoc4ChDoAQg8MAA#v=onepage&q&f=false