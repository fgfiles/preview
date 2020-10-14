import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';

import { Color, Texture } from './main.js';

const SCREEN_VERTEX_POSITION = [
	-1, -1, 0,
	 1, -1, 0,
	 1,  1, 0,
	-1,  1, 0,
	-1, -1, 0,
	 1,  1, 0,
];

let tMatrix = mat4.create();

export class Material {
	// TODO: depthFunc should be LESS by default
	constructor({name = "", depthTest = true, depthFunc = 'LEQUAL', depthMask = true, depthRangeNear = 0, depthRangeFar = 1, cullFace = true, cullFaceMode = "BACK", frontFace = "CCW"} = {}) {
		this.name = name;
		this.program = [];
		this.vbuffer = null;

		this.blend = true;

		this.depthTest = depthTest;
		// this.depthWrite = true;
		this.depthFunc = depthFunc; 
		this.depthMask = depthMask;
		this.depthRangeNear = depthRangeNear;
		this.depthRangeFar = depthRangeFar;

		this.cullFace = cullFace;
		this.cullFaceMode = cullFaceMode;
		this.frontFace = frontFace;

		this.timeOffset = 0;

		this.buffers = {
			screenVertices: [],
		}
	}

	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack) {
		// TODO: We should compile a shader cache, so that way we aren't unnecessarily swapping shaders
		// TODO: Compile per viewport
		if(!this.program[viewport.id]){
			this.program[viewport.id] = viewport.createProgram(this);
		}
		viewport.useProgram(this.program[viewport.id]);

		if(this.blend){
			viewport.webgl.enable(viewport.webgl.BLEND);
			viewport.webgl.blendFuncSeparate(viewport.webgl.SRC_ALPHA, viewport.webgl.ONE_MINUS_SRC_ALPHA, viewport.webgl.ZERO, viewport.webgl.ONE);
			// viewport.webgl.blendFuncSeparate(viewport.webgl.BLEND_DST_ALPHA, viewport.webgl.ONE_MINUS_SRC_ALPHA, viewport.webgl.ZERO, viewport.webgl.ONE);
			// viewport.webgl.blendFuncSeparate(viewport.webgl.BLEND_SRC_ALPHA, viewport.webgl.SRC_ALPHA, viewport.webgl.ZERO, viewport.webgl.ONE);
		}else{
			viewport.webgl.disable(viewport.webgl.BLEND);
		}

		// Enable depth testing
		if(this.depthTest){
			viewport.webgl.enable(viewport.webgl.DEPTH_TEST);
			viewport.webgl.depthMask(this.depthMask);
			viewport.webgl.depthFunc(viewport.webgl[this.depthFunc]);
			viewport.webgl.depthRange(this.depthRangeNear, this.depthRangeFar);
		}else{
			viewport.webgl.disable(viewport.webgl.DEPTH_TEST);
		}

		if(this.cullFace){
			viewport.webgl.enable(viewport.webgl.CULL_FACE);
			viewport.webgl.cullFace(viewport.webgl[this.cullFaceMode]);
			viewport.webgl.frontFace(viewport.webgl[this.frontFace]);
		}else{
			viewport.webgl.disable(viewport.webgl.CULL_FACE);
		}

        // Set screen vertices
        if(viewport.program.attribute.aVertexScreenPosition !== undefined){
			// Buffer mesh verts
			if(!this.buffers.screenVertices[viewport.id]){
				this.buffers.screenVertices[viewport.id] = viewport.webgl.createBuffer();        

				// Pass vertices to buffer
				// TODO: Do this once per vertices being updated (but bind on every frame)
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.screenVertices[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, new Float32Array(SCREEN_VERTEX_POSITION), viewport.webgl.STATIC_DRAW);
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.screenVertices[viewport.id]);   

			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aVertexScreenPosition, 3, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aVertexScreenPosition);
		}

		// Model View Camera Projection Matrix
		if(viewport.program.uniform.uMVCPMatrix !== undefined){
			mat4.mul(tMatrix, viewMatrix, modelMatrix);
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uMVCPMatrix, false, tMatrix);
		}
		
		// Set the camera position matrix
		if(viewport.program.uniform.uCMatrix !== undefined){
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uCMatrix, false, camera.transform.localMatrixInversed);
		}

		// Set the model view matrix (Inverse of camera position)
		if(viewport.program.uniform.uMVMatrix !== undefined){
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uMVMatrix, false, camera.mvTransform.localMatrix);
		}

		// Set the model view matrix (Inverse of camera position)
		if(viewport.program.uniform.uVMatrix !== undefined){
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uVMatrix, false, viewMatrix);
		}

		// Set the model matrix
		if(viewport.program.uniform.uMMatrix !== undefined){
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uMMatrix, false, modelMatrix); 
		}

		// Set the camera position
		if(viewport.program.uniform.uCameraPosition !== undefined){
			viewport.webgl.uniform3fv(viewport.program.uniform.uCameraPosition, camera.transform.xyz); 
		}

        // Set the time
        if(viewport.program.uniform.iTime !== undefined){
            viewport.webgl.uniform1f(viewport.program.uniform.iTime, (scene.clock.stats.currentGameTime + this.timeOffset) / 100000); // Divide by 1000 to help with intigers on lowp
        }

		if(viewport.program.uniform.uNormalMatrix !== undefined){
			mat4.invert(tMatrix, modelMatrix);
			mat4.transpose(tMatrix, tMatrix);
			
			// TODO: Can this be optimized?
			// Note: The second argument (transpose) MUST be false according to WebGL spec
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uNormalMatrix, false, tMatrix); 
		}

		// Set the entity position matrix
		if(viewport.program.uniform.uTMatrix !== undefined){
			if(viewport.parallax){
				viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uTMatrix, false, entity.transform.getParallaxMat4(camera));
			}else{
				viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uTMatrix, false, entity.transform.localMatrix);
			}
		}
	}

	setValues(obj){
		return;
	}
}