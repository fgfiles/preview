import { mat4, vec3, vec4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Entity, Transform } from './main.js';

let viewMatrix = mat4.create();

export class Camera extends Entity {
	get nearPlane() { return this._nearPlane; }
	set nearPlane(value) {
		this._nearPlane = value;
		// this.evaluate();
		return this._nearPlane;
	}
	
	get farPlane() { return this._farPlane; }
	set farPlane(value) {
		this._farPlane = value;
		// this.evaluate();
		return this._farPlane;
	}

	get projectionType() { return this._projectionType; }
	set projectionType(value) {
		this._projectionType = value;
		// this.evaluate();
		return this._projectionType;
	}

	constructor({nearPlane = 1, farPlane = 1000, fov = 0.872665, projectionType = "projection", followType = "STATIC", stiffness = 0.65} = {}) {
		super(...arguments);
		this._nearPlane = nearPlane;
		this._farPlane = farPlane;
		this._projectionType = projectionType;
		this.fov = fov;

		this.viewports = [];
		this.shaderPasses = [];
		
		this.mvTransform = new Transform(); // World space
		
		// Set mvTransform identity
		// mat4.identity(this.transform.localMatrix);
		// mat4.identity(this.mvTransform.localMatrix);
		
		// Should "follow" be a component so we can use it for other things?
		this.followEntity = null;
		this.followOffset = [0, 0, 0]; // Should this be a transform?
		this.followType = followType;

		this.stiffness = stiffness;
		
		this.limit = {
			minimum: {
				x: null,
				y: null,
				z: null
			},
			maximum: {
				x: null,
				y: null,
				z: null
			}
		};
		this.lock = [null, null, null];
	}

	render(dt, scene, viewport, stack, matrix, materialOverride, frameBufferTextureStack){
		stack.push(this);

		// Calculate view matrix
		mat4.mul(viewMatrix, matrix, this.transform.localMatrixInversed);

		// Render entity to viewport
		for(let entity of scene.entities){
			if(entity !== this && entity.visible){
				entity.render(dt, scene, viewport, this, stack, viewMatrix, null, materialOverride, frameBufferTextureStack);
			}
		}

		stack.pop();
	}
	
	renderScenePick( viewport ) {
		for(let i = 0; i < this.scene.entities.length; i++){
			// Render entity to viewport
			this.scene.entities[i].renderPick( viewport, this, i );
		}
	}
	
	update(deltaTime, scene) {
		if(this.followEntity){
			let newX = this.transform.x - this.followOffset[0];
			let newY = this.transform.y - this.followOffset[1];
			let newZ = this.transform.z - this.followOffset[2];

			let destX = this.followEntity.transform.x;
			let destY = this.followEntity.transform.y;
			let destZ = this.followEntity.transform.z;
			
			switch(this.followType.toUpperCase()){
				case "EASEIN":
					newX += Math.round((destX - newX) * Math.pow(this.stiffness, 2));
					newY += Math.round((destY - newY) * Math.pow(this.stiffness, 2));
					newZ += Math.round((destZ - newZ) * Math.pow(this.stiffness, 2));
					break;
				case "EASEOUT":
					// a + ((b-a) * %)
					newX += Math.round((destX - newX) * this.stiffness);
					newY += Math.round((destY - newY) * this.stiffness);
					newZ += Math.round((destZ - newZ) * this.stiffness);
					break;
				case "SPRING":
					var vector = {
						x: (this.followEntity.transform.x + this.followOffset[0]) - this.transform.x,
						y: (this.followEntity.transform.y + this.followOffset[1]) - this.transform.y,
						z: (this.followEntity.transform.z + this.followOffset[2]) - this.transform.z
					}
		
					var targetHeight = 0;
					var targetWidth = 0;
					var springConstantX = 5.5;
					var springConstantY = 6.5;
					var springConstantZ = 5.5;
		
					// if(Math.abs(vector.x) > targetWidth) {
						newX += springConstantX * vector.x;
					// }
		
					// if(Math.abs(vector.y) > targetWidth) {
						newY += springConstantY * vector.y;
					// }

					// if(Math.abs(vector.z) > targetWidth) {
						newZ += springConstantZ * vector.z;
					// }
				
					break;
				case "STATIC":
				default:
					newX = destX;
					newY = destY;
					newZ = destZ;
					break;
			}
			
			newX += this.followOffset[0];
			newY += this.followOffset[1];
			newZ += this.followOffset[2];

			// Limit to bounds
			if(this.limit.minimum.x !== null && newX < this.limit.minimum.x) newX = this.limit.minimum.x;
			if(this.limit.minimum.y !== null && newY < this.limit.minimum.y) newY = this.limit.minimum.y;
			if(this.limit.minimum.z !== null && newZ < this.limit.minimum.z) newZ = this.limit.minimum.z;

			if(this.limit.maximum.x !== null && newX > this.limit.maximum.x) newX = this.limit.maximum.x;
			if(this.limit.maximum.y !== null && newY > this.limit.maximum.y) newY = this.limit.maximum.y;
			if(this.limit.maximum.z !== null && newZ > this.limit.maximum.z) newZ = this.limit.maximum.z;
			
			
			this.transform.translateTo(newX, newY, newZ);
		}
		
		if(this.lock[0] !== null) this.transform.translateToX(this.lock[0]);
		if(this.lock[1] !== null) this.transform.translateToY(this.lock[1]);
		if(this.lock[2] !== null) this.transform.translateToY(this.lock[2]);

		// Limit to bounds
		// TODO: Take scaling (zoom) into account
		if(this.limit.minimum.x !== null && this.transform.x < this.limit.minimum.x) this.transform.x = this.limit.minimum.x;
		if(this.limit.minimum.y !== null && this.transform.y < this.limit.minimum.y) this.transform.y = this.limit.minimum.y;
		if(this.limit.minimum.z !== null && this.transform.z < this.limit.minimum.z) this.transform.z = this.limit.minimum.z;

		if(this.limit.maximum.x !== null && this.transform.x > this.limit.maximum.x) this.transform.x = this.limit.maximum.x;
		if(this.limit.maximum.y !== null && this.transform.y > this.limit.maximum.y) this.transform.y = this.limit.maximum.y;
		if(this.limit.maximum.z !== null && this.transform.z > this.limit.maximum.z) this.transform.z = this.limit.maximum.z;
	}
	
	addViewport( viewport ) {
		this.viewports.push(viewport);
	}
	
	follow( entity, offset = [this.transform.x, this.transform.y, this.transform.z] ) {
		this.followEntity = entity;
		this.followOffset = offset;
	}
	
	lockX(x = this.transform.x) {
		this.lock[0] = x;
	}
	
	unlockX() {
		this.lock[0] = null;
	}
	
	lockY(y = this.transform.y){
		this.lock[1] = y;
	}
	
	unlockY() {
		this.lock[1] = null;
	}

	lockZ(z = this.transform.z) {
		this.lock[1] = z;
	}
	
	unlockZ() {
		this.lock[0] = null;
	}

	getFrustum(viewport){
		let ndcPoints = [
			[-1, -1, -1, 1],
			[-1, -1,  1, 1],
			[-1,  1, -1, 1],
			[-1,  1,  1, 1],
			[ 1, -1, -1, 1],
			[ 1, -1,  1, 1],
			[ 1,  1, -1, 1],
			[ 1,  1,  1, 1],
		];

		// Get inverse MVP
		var m = [];
		mat4.copy(m, viewport.projectionMatrix);
		mat4.multiply(m, m, this.transform.localMatrixInversed);
		// mat4.multiply(m, m, this.mvTransform.localMatrix);
		mat4.invert(m, m);

		// Get world space by multiplying corners (NDC cube points) by matrix
		for(let point of ndcPoints){
			vec4.transformMat4(point, point, m);

			point[0] /= point[3];
			point[1] /= point[3];
			point[2] /= point[3];
			point[3] /= point[3];
		}

		return ndcPoints;
	}
	
	// #based on https://github.com/sinisterchipmunk/jax/blob/5d392c9d67cb9ae5623dc03846027c473f625925/src/jax/webgl/camera.js#L568
	unproject( viewport, winx = 0, winy = 0, winz = 1) {
		// Note: The basic idea here is to create an inverted matrix, then project the (normalized) coordinates with it
		// Note: Near plane should be minimum 0.1;
		let tFarPlane = this.farPlane;
		this._farPlane = this.transform.z;
		viewport.evaluate(false);

		var inf = vec4.create();
		var transformMatrix = (this.parallax)?this.transform.getInverseParallax(this):this.transform.localMatrixInversed;
		var mvTransformMatrix = this.mvTransform.localMatrix;
		var projectionMatrix = viewport.projectionMatrix;
		var view = [0, 0, viewport.contextElement.width, viewport.contextElement.height];

		//Calculation for inverting a matrix, compute projection x modelview; then compute the inverse
		// Note: Typical shaders are using uPMatrix * uCMatrix * uMVMatrix
		var m = mat4.create();
		mat4.copy(m, projectionMatrix);
		// mat4.invert(m, m);
		mat4.multiply(m, m, transformMatrix);
		mat4.multiply(m, m, mvTransformMatrix);
		mat4.invert(m, m);

		// Transformation of normalized coordinates between -1 and 1
		inf[0] = (winx - view[0]) / view[2] * 2.0 - 1.0;
		inf[1] = (winy - view[1]) / view[3] * 2.0 - 1.0;
		inf[2] = 2.0 * winz - 1.0;
		// inf[2] = winz;
		inf[3] = 1.0;
		
//			vec4.invert(inf, inf);

		//Objects coordinates
		var out = vec4.create();
		vec4.transformMat4(out, inf, m);

		this._farPlane = tFarPlane;
		viewport.evaluate(false);

		if(out[3] == 0.0){
			return null;
		}

		out[3] = 1.0 / out[3];
		return [out[0]*out[3], out[1]*out[3], out[2]*out[3]];
		// return [out[0] * viewport.contextElement.width, out[1] * viewport.contextElement.height];
    }

	// # http://webglfactory.blogspot.com/2011/05/how-to-convert-world-to-screen.html
	project(viewport, point3D) {
		var transformMatrix = (viewport.parallax)?this.transform.getInverseParallax(this):this.transform.localMatrixInversed;
		var mvTransformMatrix = this.mvTransform.localMatrix;
		var projectionMatrix = viewport.projectionMatrix;
		var m = mat4.create();
		mat4.copy(m, projectionMatrix);

		mat4.multiply(m, m, transformMatrix);
		mat4.multiply(m, m, mvTransformMatrix);

		var v2d = [];

		var ix = point3D.xyz[0]
		var iy = point3D.xyz[1]
		var iz = point3D.xyz[2]

		var ox = m[0] * ix + m[4] * iy + m[8] * iz + m[12]
		var oy = m[1] * ix + m[5] * iy + m[9] * iz + m[13]
		var ow = m[3] * ix + m[7] * iy + m[11] * iz + m[15]

		v2d[0] =     (ox / ow + 1) / 2
		v2d[1] = 1 - (oy / ow + 1) / 2

		v2d[0] = Math.round(v2d[0] * viewport.contextElement.width);
		v2d[1] = Math.round(v2d[1] * viewport.contextElement.height);

		return v2d
	}

	getParallaxOffset(v3) {
		return this.transform.getParallaxOffset((v3.xyz)?v3.xyz:v3, this);
	}
}