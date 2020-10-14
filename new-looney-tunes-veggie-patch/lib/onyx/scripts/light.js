import { mat4 } from "../lib/gl-matrix-master/src/gl-matrix.js";
import { Entity, Transform, Color } from "./main.js";

let _id = 0;

let tMVPMatrix = mat4.create();

export class Light extends Entity {
	constructor({id = "Light_" + (_id++), transform = new Transform(), ambientColor = new Color(0,0,0,1), diffuseColor = new Color(1,1,1,1), specularColor = new Color(1,1,1,1), intensity = 1.0, maxDistance = 128.0} = {}){
		super(...arguments);

		this.ambientColor = ambientColor;
		this.diffuseColor = diffuseColor;
		this.specularColor = specularColor;

		this.intensity = intensity;
		this.maxDistance = maxDistance;

		this.projectionMatrix = mat4.create();
		mat4.identity(this.projectionMatrix);
		// mat4.ortho(this.projectionMatrix, -40, 40, -40, 40, -this.maxDistance, this.maxDistance);
		// mat4.ortho(this.projectionMatrix, -40, 40, -40, 40, -40.0, 80);
		// mat4.ortho(this.projectionMatrix, -10, 10, -10, 10, -10.0, 80);

	}

	getMVPMatrix(modelMatrix, viewMatrix){
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