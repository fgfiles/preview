import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';

import { Transform } from './main.js';

const tMatrix = mat4.create();

let _id = 0;

export class Bone {
	constructor({name = "", id = _id++, parent = null, children = [], isRoot = false, inheritTransform = true, transform = new Transform()} = {}) {
        this.name = name;
        this.id = id;
        this.children = children;
        this.isRoot = isRoot;
        this.parent = parent;
        this.inheritTransform = inheritTransform;

        this.transform = transform; // Local matrix
        // this.worldMatrix = mat4.create();
        // this.localMatrix = mat4.create();
        this.bindpose = mat4.create();
        this.inverseBindpose = mat4.create();
        this.offsetMatrix = mat4.create();

        // this.calcOrigin();
    }

    update(dt, scene, entity){
        
    }

    add(child){
        this.children.add(child);
        child.parent = this;
    }

    calcBindPose(){
        this.calcAbsolutePosition(this.bindpose);
        mat4.invert(this.inverseBindpose, this.bindpose);
    }

    calcAbsolutePosition(matrix = tMatrix){
        if(this.parent && this.inheritTransform && this.parent.calcAbsolutePosition){
            let pMatrix = new Float32Array(16);
            this.parent.calcAbsolutePosition(pMatrix);
            mat4.multiply(matrix, pMatrix, this.transform.localMatrix);
        }else{
            mat4.copy(matrix, this.transform.localMatrix);
        }
    }

    getFlatMatrix(bufferMatrix, offset = 0, recursive = false){  
        this.calcAbsolutePosition(tMatrix);
        mat4.multiply(tMatrix, tMatrix, this.inverseBindpose);

        // Copy to buffer
        for(var j = 0; j < 16; j++){
            bufferMatrix[(offset * 16) + j] = tMatrix[j];
        }

        offset++;

        // Recursive
        if(recursive){
            for(var i = 0; i < this.children.length; i++){
                offset = this.children[i].getFlatMatrix(bufferMatrix, offset, true);
            }
        }

        return offset;
    }
}