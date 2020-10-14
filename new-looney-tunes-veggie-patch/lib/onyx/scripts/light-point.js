import { mat4 } from "../lib/gl-matrix-master/src/gl-matrix.js";
import { Entity, Light, Transform, Color } from "./main.js";

let _id = 0;

let tMVPMatrix = mat4.create();

export class PointLight extends Light {
	constructor({id = "PointLight_" + (_id++), intensity = 1.0, maxDistance = 128.0} = {}){
		super(...arguments);
		
		this.constantAttenuation = 1;
		this.linearAttenuation = 1;
		this.quadraticAttenuation = 1;
	}

	getMVPMatrix(modelMatrix, viewport, viewMatrix){
		mat4.perspective(this.projectionMatrix, 1.5708, 1, 0.01, this.maxDistance);
		// mat4.lookAt(tMVPMatrix, this.transform.xyz, [this.transform.x, this.transform.y, this.transform.z - 100], [0,1,0]);

		// mat4.mul(tMVPMatrix, this.projectionMatrix, this.transform.localMatrix);

		mat4.copy(tMVPMatrix, this.projectionMatrix);

		if(viewMatrix){
			// Cube map direction
			mat4.mul(tMVPMatrix, tMVPMatrix, viewMatrix);
		}

		// This position
		mat4.mul(tMVPMatrix, tMVPMatrix, this.transform.localMatrixInversed);

		if(modelMatrix){
			mat4.mul(tMVPMatrix, tMVPMatrix, modelMatrix);
		}

		// mat4.targetTo(tMVPMatrix, this.transform.xyz, [this.transform.x, this.transform.y, this.transform.z - 100], [0,1,0]);


		return tMVPMatrix;
	}
}