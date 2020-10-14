import { mat4, vec3, vec4 } from "../lib/gl-matrix-master/src/gl-matrix.js";
import { Entity, Light, Transform, Color } from "./main.js";

let _id = 0;

let tMVPMatrix = mat4.create();
let tLVMatrix = mat4.create();
let tLPMatrix = mat4.create();
let tCropMatrix = mat4.create();

export class DirectionalLight extends Light {
	constructor({id = "DirectionalLight_" + (_id++), vector = [0, -1, 0]} = {}){
		super(...arguments);

		this.vector = vector;
		this.maxShadowDistance = 50;
	}

	getMVPMatrix(modelMatrix, viewport){
		let minX =  Infinity;
		let maxX = -Infinity;
		let minY =  Infinity;
		let maxY = -Infinity;
		let minZ =  Infinity;
		let maxZ = -Infinity;

		// Get view frustum
		// let t = viewport.camera.farPlane;

		// viewport.camera.farPlane = this.maxShadowDistance;
		// viewport.evaluate();

		let frustum = viewport.camera.getFrustum(viewport);

		// viewport.camera.farPlane = t;
		// viewport.evaluate();

		// Get max distance scale
		let scaleX = Math.abs(frustum[7][0] - frustum[0][0]) / this.maxShadowDistance;
		let scaleY = Math.abs(frustum[7][1] - frustum[0][1]) / this.maxShadowDistance;
		let scaleZ = Math.abs(frustum[7][2] - frustum[0][2]) / this.maxShadowDistance;
		let scale = Math.min(scaleX, scaleY, scaleZ);

		// Find center by averaging
		let frustumCenter = [0, 0, 0];
		for(let point of frustum){
			frustumCenter[0] += point[0];
			frustumCenter[1] += point[1];
			frustumCenter[2] += point[2];
		}

		for(let i = 0; i < 3; i++){
			frustumCenter[i] /= 8;
		}

		// Rotate light view to direction
		//  - Get light view direction matrix
		let normalized = [];
		vec3.normalize(normalized, this.vector);
		normalized[0] += frustumCenter[0];
		normalized[1] += frustumCenter[1];
		normalized[2] += frustumCenter[2];
		mat4.lookAt(tLVMatrix, frustumCenter, normalized, [0, 1, 0]);
		
		//  - Rotate
		for(let point of frustum){
			vec4.transformMat4(point, point, tLVMatrix);

			minX = Math.min(minX, point[0]);
			maxX = Math.max(maxX, point[0]);
			minY = Math.min(minY, point[1]);
			maxY = Math.max(maxY, point[1]);
			minZ = Math.min(minZ, point[2]);
			maxZ = Math.max(maxZ, point[2]);
		}

		
		// Get units per texel
		let bufferSize = (viewport._currentTexture[0]) ? viewport._currentTexture[0].width : 512; // TODO: Is this hacky to grab the texture from here?
		let unitsPerTexelX = (maxX) / bufferSize; 
		let unitsPerTexelY = (maxY) / bufferSize; 
		let unitsPerTexelZ = (maxZ) / bufferSize; 

		// Prevent shimmering
		// minX /= unitsPerTexelX;
		// minX = Math.floor(minX);
		// minX *= unitsPerTexelX;

		// maxX /= unitsPerTexelX;
		// maxX = Math.floor(maxX);
		// maxX *= unitsPerTexelX;
		
		// minY /= unitsPerTexelY;
		// minY = Math.floor(minY);
		// minY *= unitsPerTexelY;

		// maxY /= unitsPerTexelY;
		// maxY = Math.floor(maxY);
		// maxY *= unitsPerTexelY;
		
		// minZ /= unitsPerTexelZ;
		// minZ = Math.floor(minZ);
		// minZ *= unitsPerTexelZ;
		
		// maxZ /= unitsPerTexelZ;
		// maxZ = Math.floor(maxZ);
		// maxZ *= unitsPerTexelZ;

		// console.log(frustum, frustumCenter);
		// console.log( minX, maxX, minY, maxY, minZ, maxZ);

		// Generate orthographic matrix
		mat4.ortho(tLPMatrix, -1, 1, -1, 1, minZ, maxZ);
		// mat4.ortho(tLPMatrix, minX, maxX, minY, maxY, minZ, maxZ);

		// Crop
		scaleX = Math.min(2 / (maxX - minX), 2 / this.maxShadowDistance);
		scaleY = Math.min(2 / (maxY - minY), 2 / this.maxShadowDistance);
		scaleZ = Math.min(1 / (maxZ - minZ), 1 / this.maxShadowDistance);
		let offsetX = -0.5 * (minX + maxX) * scaleX;
		let offsetY = -0.5 * (minY + maxY) * scaleY;
		let offsetZ = -minZ * scaleZ;

		tCropMatrix[0] = scaleX;
		tCropMatrix[5] = scaleY;
		tCropMatrix[10] = scaleZ;
		tCropMatrix[12] = offsetX;
		tCropMatrix[13] = offsetY;
		tCropMatrix[14] = offsetZ;

		// cropMatrix * lpMatrix * lvMatrix;
		mat4.mul(tMVPMatrix, tCropMatrix, tLPMatrix);
		mat4.mul(tMVPMatrix, tMVPMatrix, tLVMatrix);

		// lpMatrix * lvMatrix * cropMatrix;
		// mat4.mul(tMVPMatrix, tLPMatrix, tLVMatrix);
		// mat4.mul(tMVPMatrix, tMVPMatrix, tCropMatrix);

		// ... * Model
		if(modelMatrix){
			mat4.mul(tMVPMatrix, tMVPMatrix, modelMatrix);
		}

		// debugger;

		return tMVPMatrix;
	}
}