import { mat4, vec3, vec4, quat, quat2 } from '../lib/gl-matrix-master/src/gl-matrix.js';

let tMat4 = mat4.create();

export class Transform {
	/**
	 * A representation of position, rotation and scale in 3D space
	 * @param {Object} options
	 * @param {Array} options.position
	 * @param {Array} options.rotation
	 * @param {Array} options.scale
	 */
	constructor({position = [0,0,0,1], rotation = [0,0,0,1], scale = [1,1,1]} = {}) {
		this.valid = {
			mat4: false,
			translation: false,
			rotation: false,
			rotationQuat: false,
			scale: false,
			inverse: false,
			inverseTransposed: false,
		};

		this._temp = {
			mat4: mat4.create(),
			inverseMat4: mat4.create(),
			inverseTransposeMat4: mat4.create(),
			translation: vec3.fromValues(position[0] || 0, position[1] || 0, position[2] || 0, (position[3] === undefined)?1:position[3]),
			rotation: vec3.fromValues(rotation[0] || 0, rotation[1] || 0, rotation[2] || 0, (rotation[3] === undefined)?1:rotation[3]),
			rotationQuat: quat.create(), //quat.fromValues(rotation[0] || 0, rotation[1] || 0, rotation[2] || 0, (rotation[3] === undefined)?1:rotation[3]),
			scale: vec3.fromValues((scale[0] === undefined)?1:scale[0], (scale[1] === undefined)?1:scale[1], (scale[2] === undefined)?1:scale[2])
		}
	}

	/**
	 * The transform's local matrix.
	 */
	get localMatrix(){
		if(!this.valid.mat4){
			mat4.fromRotationTranslationScale(this._temp.mat4, this.rotationQuat, this._temp.translation, this._temp.scale);

			this.valid.mat4 = true;
		}

		return this._temp.mat4;
	}

	set localMatrix(value){
		this._temp.mat4 = value;

		this.invalidate();
		this.valid.mat4 = true;
	}
	
	/**
	 * The transform's local matrix inversed.
	 */
	get localMatrixInversed() {
		if(!this.valid.inverse || !this.valid.mat4){
			mat4.invert(this._temp.inverseMat4, this.localMatrix);

			this.valid.inverse = true;
		}

		return this._temp.inverseMat4;
	}

	/**
	 * The transform's local matrix inversed and transposed.
	 */
	get localMatrixInversedTransposed() {
		if(!this.valid.inverseTransposed || !this.valid.inverse || !this.valid.mat4){
			mat4.transpose(this._temp.inverseTransposeMat4, this.localMatrixInversed);

			this.valid.inverseTransposed = true;
		}
	
		return this._temp.inverseTransposeMat4;
	}

	get rotationQuat(){
		if(!this.valid.rotationQuat){
			quat.fromEuler(this._temp.rotationQuat, this._temp.rotation[0] * (180 / Math.PI), this._temp.rotation[1] * (180 / Math.PI), this._temp.rotation[2] * (180 / Math.PI));

			this.valid.rotationQuat = true;
			this.valid.mat4 = false;
		}

		return this._temp.rotationQuat;
	}

	set rotationQuat(value){
		this._temp.rotationQuat = this._temp.rotationQuat;

		this.valid.rotationQuat = true;
	}
	
	/**
	 * Translation's X component
	 */
	get x() { 
		if(!this.valid.translation){	
			mat4.getTranslation(this._temp.translation, this.localMatrix);

			this.valid.translation = true;
		}

		return this._temp.translation[0];
	}

	/**
	 * Translation's Y component
	 */
	get y() { 
		if(!this.valid.translation){	
			mat4.getTranslation(this._temp.translation, this.localMatrix);

			this.valid.translation = true;
		}

		return this._temp.translation[1];
	}

	/**
	 * Translation's Z component
	 */
	get z() { 
		if(!this.valid.translation){	
			mat4.getTranslation(this._temp.translation, this.localMatrix);

			this.valid.translation = true;
		}

		return this._temp.translation[2];
	}

	/**
	 * Translation's XYZ components represented as an array
	 */
	get xyz() { 
		if(!this.valid.translation){	
			mat4.getTranslation(this._temp.translation, this.localMatrix);

			this.valid.translation = true;
		}

		return this._temp.translation;
	}

	set x(val) { 
		if(this._temp.translation[0] === val) return val;

		this._temp.translation[0] = val;
		this.valid.mat4 = false;

		return val; 
	}
	set y(val) { 
		if(this._temp.translation[1] === val) return val;

		this._temp.translation[1] = val;
		this.valid.mat4 = false;

		return val; 
	}
	set z(val) { 
		if(this._temp.translation[2] === val) return val;

		this._temp.translation[2] = val;
		this.valid.mat4 = false;

		return this._temp.translation[2]; 
	}
	set xyz(val) { 
		if(this._temp.translation[0] === val[0] && this._temp.translation[1] === val[1] && this._temp.translation[2] === val[2]) return val;

		this._temp.translation[0] = val[0];
		this._temp.translation[1] = val[1];
		this._temp.translation[2] = val[2];

		this.valid.mat4 = false;

		return this._temp.translation; 
	}
	
	get sx() {
		if(!this.valid.scale){	
			mat4.getScaling(this._temp.scale, this.localMatrix);

			this.valid.scale = true;
		}

		return this._temp.scale[0];
	}
	
	get sy() { 
		if(!this.valid.scale){	
			mat4.getScaling(this._temp.scale, this.localMatrix);

			this.valid.scale = true;
		}

		return this._temp.scale[1];
	}
	
	get sz() { 
		if(!this.valid.scale){	
			mat4.getScaling(this._temp.scale, this.localMatrix);

			this.valid.scale = true;
		}

		return this._temp.scale[2];
	}
	
	get sxyz() { 
		if(!this.valid.scale){	
			mat4.getScaling(this._temp.scale, this.localMatrix);

			this.valid.scale = true;
		}

		return this._temp.scale;
	}

	set sx(val) { 
		if(this._temp.scale[0] === val) return val;

		this._temp.scale[0] = val;
		this.valid.mat4 = false;

		return this._temp.scale[0]; 
	}
	set sy(val) { 
		if(this._temp.scale[1] === val) return val;

		this._temp.scale[1] = val;
		this.valid.mat4 = false;

		return this._temp.scale[1]; 
	}

	set sz(val) { 
		if(this._temp.scale[2] === val) return val;

		this._temp.scale[2] = val;
		this.valid.mat4 = false;

		return this._temp.scale[2]; 
	}

	set sxyz(val){
		if(this._temp.scale[0] === val[0] && this._temp.scale[1] === val[1] && this._temp.scale[2] === val[2]) return val;

		this._temp.scale[0] = val[0];
		this._temp.scale[1] = val[1];
		this._temp.scale[2] = val[2];

		this.valid.mat4 = false;

		return this._temp.scale; 
	}

	get pitch() { 
		if(!this.valid.rotation){	
			mat4.getRotation(this._temp.rotation, this.localMatrix);

			this.valid.rotation = true;
		}

		return this._temp.rotation[0];
	}

	get yaw() { 
		if(!this.valid.rotation){	
			mat4.getRotation(this._temp.rotation, this.localMatrix);

			this.valid.rotation = true;
		}

		return this._temp.rotation[1];
	}

	get roll() { 
		if(!this.valid.rotation){	
			mat4.getRotation(this._temp.rotation, this.localMatrix);

			this.valid.rotation = true;
		}

		return this._temp.rotation[2];
	}

	set pitch(val) { 
		if(this._temp.rotation[0] === val) return val;

		this._temp.rotation[0] = val;
		this.valid.rotationQuat = false;
		this.valid.mat4 = false;

		return this._temp.rotation[0]; 
	}
	
	set yaw(val) { 
		if(this._temp.rotation[1] === val) return val;

		this._temp.rotation[1] = val;
		this.valid.rotationQuat = false;
		this.valid.mat4 = false;

		return this._temp.rotation[1]; 
	}
	
	set roll(val) { 	
		if(this._temp.rotation[2] === val) return val;

		this._temp.rotation[2] = val;
		this.valid.rotationQuat = false;
		this.valid.mat4 = false;

		return this._temp.rotation[2]; 
	}

	invalidate(){
		this.valid = {
			mat4: false,
			translation: false,
			rotation: false,
			rotationQuat: false,
			scale: false,
			inverse: false,
			inverseTransposed: false,
		}
	}

	/**
	 * 
	 * @param {Array} target 3-Dimensional array representing the point in space to look at
	 * @param {Array} up 3-Dimensional vector representing up
	 */
	targetTo(target, up = [0, 1, 0]){
		mat4.targetTo(tMat4, this.xyz, target, up);

		mat4.getRotation(this._temp.rotationQuat, tMat4);

		let x = this._temp.rotationQuat[0];
		let y = this._temp.rotationQuat[1];
		let z = this._temp.rotationQuat[2];
		let w = this._temp.rotationQuat[3];

		this.yaw  = Math.atan2(2*y*w - 2*x*z, 1 - 2*y*y - 2*z*z);
		this.pitch = Math.atan2(2*x*w - 2*y*z, 1 - 2*x*x - 2*z*z);
		this.roll   = Math.asin(2*x*y + 2*z*w);

		this.valid.mat4 = false;
		this.valid.rotation = false;
		this.valid.rotationQuat = false;
	}

	/**
	 * 
	 * @param {Array} target 3-Dimensional array representing the point in space to look at
	 * @param {Array} up 3-Dimensional vector representing up
	 */
	lookAt(target, up = [0, 1, 0]){
		mat4.lookAt(tMat4, this.xyz, target, up);

		mat4.getRotation(this._temp.rotationQuat, tMat4);

		let x = this._temp.rotationQuat[0];
		let y = this._temp.rotationQuat[1];
		let z = this._temp.rotationQuat[2];
		let w = this._temp.rotationQuat[3];

		this.yaw  = Math.atan2(2*y*w - 2*x*z, 1 - 2*y*y - 2*z*z);
		this.pitch = Math.atan2(2*x*w - 2*y*z, 1 - 2*x*x - 2*z*z);
		this.roll   = Math.asin(2*x*y + 2*z*w);

		this.valid.mat4 = false;
		this.valid.rotation = false;
		this.valid.rotationQuat = false;
	}

	orbitX(angle, origin = [0, 0, 0]){
		vec3.rotateX(this._temp.translation, this._temp.translation, origin, angle);

		this.valid.mat4 = false;
		this.valid.inverse = false;
		this.valid.translation = false;
		this.valid.rotation = false;
		this.valid.rotationQuat = false;
	}

	orbitY(angle, origin = [0, 0, 0]){
		vec3.rotateY(this._temp.translation, this._temp.translation, origin, angle);

		this.valid.mat4 = false;
		this.valid.inverse = false;
		this.valid.translation = false;
		this.valid.rotation = false;
		this.valid.rotationQuat = false;
	}

	orbitZ(angle, origin = [0, 0, 0]){
		vec3.rotateZ(this._temp.translation, this._temp.translation, origin, angle);

		this.valid.mat4 = false;
		this.valid.inverse = false;
		this.valid.translation = false;
		this.valid.rotation = false;
		this.valid.rotationQuat = false;
	}
}