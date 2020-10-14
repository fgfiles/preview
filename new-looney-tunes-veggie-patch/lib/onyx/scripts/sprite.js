import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Component, MaterialPhong, Mesh, SpriteAnimation, Texture, Transform } from './main.js';

const tMatrix = mat4.create();

const FACE = [
	0.0, 0.0, 0.0,
	1.0, 0.0, 0.0,
	1.0, 1.0, 0.0,
	0.0, 1.0, 0.0,
	0.0, 0.0, 0.0,
	1.0, 1.0, 0.0 
];
            
const FACE_UVS = [
	0.0, 1.0, //  left,    top, 
	1.0, 1.0, // right,    top, 
	1.0, 0.0, // right, bottom, 
	0.0, 0.0, //  left, bottom, 
	0.0, 1.0, //  left,    top, 
	1.0, 0.0  // right, bottom, 
];

const FACE_NORMALS = [
	0.0, 0.0, 1.0,
	0.0, 0.0, 1.0,
	0.0, 0.0, 1.0,
	0.0, 0.0, 1.0,
	0.0, 0.0, 1.0,
	0.0, 0.0, 1.0
];

export class Sprite extends Component {
	get src(){ return this._src; }
	set src(val){ 
		if(!val){
			this.textures = [];
			this.mesh.material.diffuseTexture = this.textures[0];
			this._src = val;
			return;
		}

		if(!Array.isArray(val)) val = [val];
	
		for(let index in val){
			for(let texture of this.textures){
				if(texture.src == val) return;
			}

			this.textures[index] = new Texture({src: val[index], flipY: false, magFilter: this._magFilter, minFilter: this._minFilter});
			this.mesh.material.diffuseTexture = this.textures[index]; // Note: this is just to tell shader that we're using textures
			this.mesh.material.buildProgram();
	
			this.textures[index].load().then(() => {
				this.fitToTexture(index);
				// TODO(?): Should select full frame by default?
			});
		}

		this._src = val;

		return val;
	}

	get minFilter(){ return this._minFilter }
	set minFilter(val){
		this._minFilter	= val;

		for(let texture of this.textures){
			texture.minFilter = val;
		}
	}

	get magFilter(){ return this._magFilter }
	set magFilter(val){
		this._magFilter	= val;

		for(let texture of this.textures){
			texture.magFilter = val;
		}
	}

	get pixelsPerUnit(){ return this._pixelsPerUnit; }
	set pixelsPerUnit(val){
		if(!this.textures[0] || !this.textures[0].img){
			this.mesh.vertices.set(new Float32Array(FACE));
			return;
		}

		let change = val / this._pixelsPerUnit;

		for(var i = 0; i < this.mesh.vertices.length; i++){
			this.mesh.vertices[i] *= change;
		} 
		
		this._pixelsPerUnit = val;

		this.mesh.invalidate(true);

		return this._pixelsPerUnit; 
	}

	constructor({src = "", transform = new Transform(), textures = [], material = null, magFilter = "LINEAR", minFilter = "LINEAR_MIPMAP_LINEAR", wrap = {s: "CLAMP_TO_EDGE", t: "CLAMP_TO_EDGE"}, flipX = false, flipY = false, pivot = [0, 0], lighting = 0, width = 0, height = 0, shadowCastingMode = 1, pixelsPerUnit = 1} = {}) {
		super(...arguments);

		this.transform = transform;

		this._pixelsPerUnit = 1;

		this.textures = textures;

		this._minFilter = minFilter;
		this._magFilter = magFilter;
		this._wrap = wrap;
		this._src = src;
		this._materialIndex = 0;

		this.flipX = flipX;
		this.flipY = flipY;
		this.pivot = pivot;

		this.width = width;
		this.height = height;

		this.animations = {};

		if(!material){
			material = new MaterialPhong({
				name: "SPRITE_"+src, 
				lighting: lighting,
				shadowCastingMode: shadowCastingMode,
				// diffuseTexture: this.texture
			})
		}

		this.mesh = new Mesh({
			id: "MESH_SPRITE_" + this.id,
			material: material,
			vertices: new Float32Array(FACE),
			uvs: new Float32Array(FACE_UVS),
			normals: new Float32Array(FACE_NORMALS)
		});

		if(!textures.length){
			this.src = src;
			this.pixelsPerUnit = pixelsPerUnit;
		}else{
			this.pixelsPerUnit = pixelsPerUnit;
			for(let index in src){
				this.fitToTexture(index);
			}
		}
	}

	loadTextures(viewport){
		let remaining = this.textures.length;

		return new Promise((resolve, reject) => {
			for(let texture of this.textures){
				texture.load(viewport).then(() => {
					// If there are no remaining, resolve
					// Note: JS returns the previous value when doing ++ or --
					if(remaining-- === 1) resolve();
				});
			}
		});
	}
	
    render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, materialOverride, frameBufferTextureStack) {
		stack.push(this);

		// Calculate view matrix
		mat4.mul(tMatrix, modelMatrix, this.transform.localMatrix);

		this.mesh.render(dt, scene, viewport, camera, stack, viewMatrix, tMatrix, materialOverride, frameBufferTextureStack);

		stack.pop();
	}
	
	update(dt, scene, entity){
		super.update(dt, scene, entity);

		if(this.currentAnimation) this.currentAnimation.update(dt, scene, entity, this);
	}

	addAnimation(animationId, animation){
		this.animations[animationId] = animation;

		//TODO: This part feels a little hacky
		animation.sprite = this;
	}

	playAnimation(animationId, callback){
		if(!this.animations[animationId]) return console.warn(`Animation '${animationId}' not found`);

		this.currentAnimation = this.animations[animationId];
		this.currentAnimation.play(callback);
	}

	selectAnimation(animationId){
		if(!this.animations[animationId]) return console.warn(`Animation '${animationId}' not found`);

		this.currentAnimation = this.animations[animationId];
		this.currentAnimation.setFrame(0);
	}

	fitToTexture(textureIndex = 0){
		this.selectFrame(0, 0, this.textures[textureIndex].img.width, this.textures[textureIndex].img.height, this.pivot[0], this.pivot[1], textureIndex, true);
	}

	selectFrame(x = 1, y = 1, width = 0, height = 0, pivotX = this.pivot[0], pivotY = this.pivot[1], offsetX = 0, offsetY = 0, materialIndex = 0, forceVertexUpdate = false){
		this._materialIndex = materialIndex;
		this.mesh.material.diffuseTexture = this.textures[materialIndex];

		let texture = this.mesh.material.diffuseTexture;
		if(!texture) return;

		let left = x / texture.img.width;
		let right = (x + width) / texture.img.width;
		let bottom = y / texture.img.height;
		let top = (y + height) / texture.img.height;
		
		if(this.flipX) [left, right] = [right, left];
		if(this.flipY) [top, bottom] = [bottom, top];

		this.mesh.uvs.set([
			 left,    top, 
			right,    top, 
			right, bottom, 
			 left, bottom, 
			 left,    top, 
			right, bottom
		]);

		// Set vertices
		// if(pivotX !== this.pivot[0] || pivotX !== this.pivot[1]){
		// 	let offsetX = width * pivotX;
		// 	let offsetY = height * pivotY;

		// 	this.mesh.vertices[0] = -offsetX;
		// 	this.mesh.vertices[3] =  offsetX;
		// 	this.mesh.vertices[6] =  offsetX;
		// 	this.mesh.vertices[9] = -offsetX;
		// 	this.mesh.vertices[12] = -offsetX;
		// 	this.mesh.vertices[15] =  offsetX;
			
		// 	this.mesh.vertices[1] = -offsetY;
		// 	this.mesh.vertices[4] = -offsetY;
		// 	this.mesh.vertices[7] =  offsetY;
		// 	this.mesh.vertices[10] =  offsetY;
		// 	this.mesh.vertices[13] = -offsetY;
		// 	this.mesh.vertices[16] =  offsetY;

		// 	this.mesh.invalidate(true, true);

		width = width * this._pixelsPerUnit;
		height = height * this._pixelsPerUnit;

		if(width != this.width || height != this.height || forceVertexUpdate){
			this.mesh.vertices[0] =  (FACE[0]  * width) + (-pivotX * width);// - (offsetX * this._pixelsPerUnit);
			this.mesh.vertices[3] =  (FACE[3]  * width) + (-pivotX * width);// - (offsetX * this._pixelsPerUnit);
			this.mesh.vertices[6] =  (FACE[6]  * width) + (-pivotX * width);// - (offsetX * this._pixelsPerUnit);
			this.mesh.vertices[9] =  (FACE[9]  * width) + (-pivotX * width);// - (offsetX * this._pixelsPerUnit);
			this.mesh.vertices[12] = (FACE[12] * width) + (-pivotX * width);// - (offsetX * this._pixelsPerUnit);
			this.mesh.vertices[15] = (FACE[15] * width) + (-pivotX * width);// - (offsetX * this._pixelsPerUnit);

			this.mesh.vertices[1] =  (FACE[1]  * height) + (-pivotY * height);
			this.mesh.vertices[4] =  (FACE[4]  * height) + (-pivotY * height);
			this.mesh.vertices[7] =  (FACE[7]  * height) + (-pivotY * height);
			this.mesh.vertices[10] = (FACE[10] * height) + (-pivotY * height);
			this.mesh.vertices[13] = (FACE[13] * height) + (-pivotY * height);
			this.mesh.vertices[16] = (FACE[16] * height) + (-pivotY * height);
			
			this.mesh.invalidate(true, true, false, false, false);
		}else{
			this.mesh.invalidate(false, true, false, false, false);
		}

		this.width = width;
		this.height = height;
		this.pivot = [pivotX, pivotY];
	}
}