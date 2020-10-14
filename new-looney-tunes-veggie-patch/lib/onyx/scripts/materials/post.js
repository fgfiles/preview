'use strict';

import { Material } from '../main.js';

const FACE = [
	-1.0, -1.0, 0.0,
	 1.0, -1.0, 0.0,
	 1.0,  1.0, 0.0,
	-1.0,  1.0, 0.0,
	-1.0, -1.0, 0.0,
	 1.0,  1.0, 0.0 
];
            
const FACE_UVS = [
	0.0, 0.0, //  left,    top, 
	1.0, 0.0, // right,    top, 
	1.0, 1.0, // right, bottom, 
	0.0, 1.0, //  left, bottom, 
	0.0, 0.0, //  left,    top, 
	1.0, 1.0  // right, bottom, 
];

const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    varying vec2 vTextureCoord;

    void main(void) {
        vTextureCoord = aTextureCoord;

        gl_Position = vec4(aVertexPosition, 1.0);
    }
`

const FRAG_SHADER = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
    #else
        precision mediump float;
    #endif

    varying vec2 vTextureCoord;

    uniform sampler2D uTexture;

    void main(void) {
        gl_FragColor = texture2D(uTexture, vTextureCoord);
    }
`

export class MaterialPost extends Material {
	constructor() {
		super(...arguments);

		this.vertexShader = VERTEX_SHADER;
		this.fragmentShader = FRAG_SHADER;

        this.vertices = new Float32Array(FACE);
        this.uvs = new Float32Array(FACE_UVS);

        this.buffers = {
			vertices: [],
			uvs: [],
			normals: [],
			weights: [],
			weightIndices: []
		}

		this.valid = {
			vertices: [],
			uvs: [],
			normals: [],
			weights: [],
			weightIndices: []
		};
    }
    
    render(dt, scene, viewport, stack, matrix, frameBufferTextureStack) {
        if(!this.vertices.length) return;

        super.render(...arguments);

        if(viewport.program.attribute.aVertexPosition !== undefined){
			// Buffer mesh verts
			if(!this.buffers.vertices[viewport.id] || !this.valid.vertices[viewport.id]){
				this.buffers.vertices[viewport.id] = viewport.webgl.createBuffer();        

				// Pass vertices to buffer
				// TODO: Do this once per vertices being updated (but bind on every frame)
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.vertices[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.vertices, viewport.webgl.STATIC_DRAW); // TODO: Allow mesh to define type?
				
				this.valid.vertices[viewport.id] = true;
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.vertices[viewport.id]);   

			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aVertexPosition, 3, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aVertexPosition);
        }

		// UVs
		if(viewport.program.attribute.aTextureCoord !== undefined){
			// Buffer mesh texture coordinates
			if(!this.buffers.uvs[viewport.id] || !this.valid.uvs[viewport.id]){
				this.buffers.uvs[viewport.id] = viewport.webgl.createBuffer();             

				// Pass texture coordinates to buffer
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.uvs[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.uvs, viewport.webgl.STATIC_DRAW);        
				
				this.valid.uvs[viewport.id] = true; 
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.uvs[viewport.id]);   
			
			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aTextureCoord, 2, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aTextureCoord);
        }
        
        if(frameBufferTextureStack[frameBufferTextureStack.length - 1].setAsTexture(viewport, 0, viewport.program.uniform.uTexture) === false) return;
		
        
		// Draw
		viewport.webgl.drawArrays(viewport.webgl.TRIANGLES, 0, this.vertices.length / 3);
    }
}