import { mat4 } from '../../lib/gl-matrix-master/src/gl-matrix.js';
import { Material, Color, Texture } from '../main.js';

const VERTEX_SHADER = `
	precision highp float;

	attribute vec3 aVertexPosition;
	attribute vec2 aTextureCoord;

	uniform mat4 uMVCPMatrix; // Model View Camera Projection Matrix

	uniform vec2 uAtlasSize;
	uniform vec2 uMapSize;
	uniform vec2 uTileSize;
	
	varying vec2 vPixelCoord;
	varying vec2 vTexCoord;

	varying vec2 vAtlasSize;
	varying vec2 vMapSize;
	varying vec2 vTileSize;

	void main() {
		vPixelCoord = aTextureCoord;
		vTexCoord = vPixelCoord * (uAtlasSize / (uAtlasSize / uMapSize)) * uTileSize;

		vTileSize = uTileSize;
		vAtlasSize = uAtlasSize;

		gl_Position = uMVCPMatrix * vec4(aVertexPosition, 1.0);
	}
`;

const FRAG_SHADER = `
	#ifdef GL_FRAGMENT_PRECISION_HIGH
		precision highp float;
	#else
		precision mediump float;
	#endif

	uniform sampler2D uAtlasTexture;
	uniform sampler2D uMapTexture;

	varying vec2 vPixelCoord;
	varying vec2 vTexCoord;

	varying vec2 vAtlasSize;
	varying vec2 vMapSize;
	varying vec2 vTileSize;

	void main(void) {
		// Grab the tile number (x,y)
		vec4 tile = texture2D(uMapTexture, vPixelCoord);
		if(tile.a == 0.0 || (tile.x == 1.0 && tile.y == 1.0)) {
			discard;
		}
		// gl_FragColor = vec4(tile.x * 30.0, tile.y * 30.0, 0.0, 1.0);
		
		// Grab the tile's texture frag color
		vec2 spriteOffset = floor(tile.xy * 256.0) * vTileSize;
		vec2 spriteCoord = mod(vTexCoord, vTileSize);
		gl_FragColor = tile.a * texture2D(uAtlasTexture, (spriteOffset + spriteCoord) / vAtlasSize);
	}
`;

export class MaterialTilemap extends Material {
	constructor(name = "", { cullFace = false, cullFaceMode = "BACK", frontFace = "CCW" } = {}) {
		super(name);

		this.vertexShader = VERTEX_SHADER;
		this.fragmentShader = FRAG_SHADER;

		this.cullFace = cullFace;
		this.cullFaceMode = cullFaceMode;
		this.frontFace = frontFace;	
	}

	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack) {
		// Set uniforms (uMVMatrix, etc...)
		super.render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack);
        
        // Set current textures
		if(this.map){
			if(this.map.setAsTexture(viewport, 0, viewport.program.uniform.uMapTexture) === false) return;
		}

		if(this.atlas){
			if(this.atlas.setAsTexture(viewport, 1, viewport.program.uniform.uAtlasTexture) === false) return;
		}

		if(this.cullFace){
			viewport.webgl.enable(viewport.webgl.CULL_FACE);
			viewport.webgl.cullFace(viewport.webgl[this.cullFaceMode]);
			viewport.webgl.frontFace(viewport.webgl[this.frontFace]);
		}else{
			viewport.webgl.disable(viewport.webgl.CULL_FACE);
        }
         
        // viewport.webgl.uniform2fv(viewport.program.uniform.inverseAtlasTextureSize, [1 / this.atlas.width, 1 / this.atlas.height]);
        // viewport.webgl.uniform2fv(viewport.program.uniform.inverseMapTextureSize, [1 / this.map.width, 1 / this.map.height]);
        viewport.webgl.uniform2fv(viewport.program.uniform.uAtlasSize, [this.atlas.width, this.atlas.height]);
        viewport.webgl.uniform2fv(viewport.program.uniform.uMapSize, [this.map.width, this.map.height]);
        viewport.webgl.uniform2fv(viewport.program.uniform.uTileSize, stack[stack.length - 2].tileSize);
        // viewport.webgl.uniform1f(viewport.program.uniform.inverseTileSize, 1 / this.tileSize);
    }
}