import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';

import { CONST, Component, Transform } from './main.js';

export class Skeleton extends Component {
	constructor({transform = new Transform(), children = []} = {}) {
        super();

        this.transform = transform;
        
        this.children = children;
        
        this.matrixBuffer = new Float32Array(CONST.MAX_BONES * 16);
        // this.scaledMatrix = mat4.create();

        // this.calcBindPose();
    }

    calcBindPose(){
        for(var i = 0; i < this.children.length; i++){
            // this.children[i].calcOrigin(true);
            this.children[i].calcBindPose(true);
        }
    }

    flattenChildren(children = this.children, flat = []){
        for(let child of children){
            flat.push(child);

            this.flattenChildren(child.children, flat);
        }

        return flat;
    }

    getFlatMatrix(worldMatrix){        
        let offset = 0;

        // mat4.scale(this.scaledMatrix, );

        for(var i = 0; i < this.children.length; i++){
            offset = this.children[i].getFlatMatrix(this.matrixBuffer, offset, false);
        }

        return this.matrixBuffer;
    }
}