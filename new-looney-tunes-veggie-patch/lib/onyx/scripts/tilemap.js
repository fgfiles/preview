import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Component, MaterialTilemap, Mesh, Texture, Transform } from './main.js';

let tMatrix = mat4.create();

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

let _id = 0;

export class Tilemap extends Component {
	get atlas(){ return this._atlas; }
	set atlas(val){ 
		if(!val){
			this._atlas = null;
			this.mesh.material.atlas = this._atlas;
			return;
		}

		this._atlas = new Texture({src: val, flipY: false, magFilter: this._magFilter, minFilter: this._minFilter, generateMipmap: false});
		this.mesh.material.atlas = this._atlas;

		this._atlas.load().then(() => {
			this.pixelsPerUnit = this._pixelsPerUnit; // Refresh size
		});

		return this._atlas;
	}

	get map(){ return this._map; }
	set map(val){ 
		if(!val){
			this._map = null;
			this.mesh.material.map = this.map;
			return;
		}

		this._map = new Texture({src: val, flipY: false, magFilter: this._magFilter, minFilter: this._minFilter, wrap: {s: "CLAMP_TO_EDGE", t: "CLAMP_TO_EDGE"}, generateMipmap: false});
		this.mesh.material.map = this._map;

		this._map.load().then(() => {
			this.pixelsPerUnit = this._pixelsPerUnit; // Refresh size
		});

		return this._map;
	}

	get pixelsPerUnit(){ return this._pixelsPerUnit }
	set pixelsPerUnit(val){
		this._pixelsPerUnit = val;

		this.mesh.vertices[0] = 0;
		this.mesh.vertices[3] = this._map.img.width * this._pixelsPerUnit;
		this.mesh.vertices[6] = this._map.img.width * this._pixelsPerUnit;
		this.mesh.vertices[9] = 0;
		this.mesh.vertices[12] = 0;
		this.mesh.vertices[15] = this._map.img.width * this._pixelsPerUnit;
		
		this.mesh.vertices[1] = 0;
		this.mesh.vertices[4] = 0;
		this.mesh.vertices[7] = this._map.img.height * this._pixelsPerUnit;
		this.mesh.vertices[10] = this._map.img.height * this._pixelsPerUnit;
		this.mesh.vertices[13] = 0;
		this.mesh.vertices[16] = this._map.img.height * this._pixelsPerUnit;
		
		this.mesh.invalidate(true, true);
	}

	get tileSize(){ return this._tileSize }
	set tileSize(val){
		if(val instanceof Array === false){
			val = [val, val];
		}
		this._tileSize = val;
	}

	get minFilter(){ return this._minFilter }
	set minFilter(val){
		this._minFilter	= val;
		this._atlas.minFilter = val;
		this._map.minFilter = val;
	}

	get magFilter(){ return this._magFilter }
	set magFilter(val){
		this._magFilter	= val;
		this._atlas.magFilter = val;
		this._map.magFilter = val;
	}

	constructor({id = _id++, transform = new Transform(), map = "", atlas = "", pixelsPerUnit = 1.0, tileSize = [16, 16], atlasPadding = 1.0, magFilter = "LINEAR", minFilter = "LINEAR_MIPMAP_LINEAR", wrap = {s: "CLAMP_TO_EDGE", t: "CLAMP_TO_EDGE"}} = {}) {
		super(...arguments);

		this.id = id;

		this.mesh = new Mesh({
			material: new MaterialTilemap("TILEMAP_"+id, {
				atlas: null,
				map: null
			}),
			vertices: new Float32Array(FACE),
			uvs: new Float32Array(FACE_UVS),
			normals: new Float32Array(FACE_NORMALS)
		});
		
		this.transform = transform;

		this._minFilter = minFilter;
		this._magFilter = magFilter;
		this._pixelsPerUnit = pixelsPerUnit;
		this._tileSize = tileSize;
		
		this.map = map;
		this.atlas = atlas;

		this.tileSize = tileSize;
	}
	
	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix){
		stack.push(this);

		// Calculate view matrix
		mat4.mul(tMatrix, modelMatrix, this.transform.localMatrix);

		this.mesh.render(dt, scene, viewport, camera, stack, viewMatrix, tMatrix);

		stack.pop();
	}
}