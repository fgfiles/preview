import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { Component, MaterialPhong } from './main.js';

let _id = 0;

const tMatrix = mat4.create();

export class Mesh extends Component {
	constructor({id = "Mesh_" + (_id++), material = new MaterialPhong(), vertices = new Float32Array(0), uvs = new Float32Array(0), normals = new Float32Array(0), weights = new Float32Array(0), weightIndices = new Float32Array(0), parameters = new Float32Array(0), faces = new Float32Array(0), bufferUsage = { vertices: "STATIC_DRAW", uvs: "STATIC_DRAW", normals: "STATIC_DRAW", weights: "STATIC_DRAW", weightIndices: "STATIC_DRAW" }} = {}, ) {
        super(...arguments);

		this.material = material; // TODO: Should we have multiple materials?
		this.vertices = vertices;
		this.uvs = uvs;
		this.normals = normals;
		// this.parameters = parameters;
		// this.faces = faces;
		this.weights = weights;
		this.weightIndices = weightIndices;

		this.castShadow = true;
		this.receiveShadow = true;

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

		// TODO: Make this argument more optional
		this.bufferUsage = bufferUsage;
	}

	update() {
		// Anything?
	}

	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, material = this.material, frameBufferTextureStack){
		if(!material || !this.vertices.length) return;

		stack.push(this);

		// Calculate view matrix
		mat4.mul(tMatrix, modelMatrix, this.transform.localMatrix);
		
		if(material.render(dt, scene, viewport, camera, stack, viewMatrix, tMatrix, frameBufferTextureStack) === false) return;

		if(viewport.program.attribute.aVertexPosition !== undefined){
			// Buffer mesh verts
			if(!this.buffers.vertices[viewport.id] || !this.valid.vertices[viewport.id]){
				this.buffers.vertices[viewport.id] = viewport.webgl.createBuffer();        

				// Pass vertices to buffer
				// TODO: Do this once per vertices being updated (but bind on every frame)
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.vertices[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.vertices, viewport.webgl[this.bufferUsage.vertices]);
				
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
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.uvs, viewport.webgl[this.bufferUsage.uvs]);        
				
				this.valid.uvs[viewport.id] = true; 
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.uvs[viewport.id]);   
			
			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aTextureCoord, 2, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aTextureCoord);
		}
		
		// Normals
		if(viewport.program.attribute.aVertexNormal !== undefined){
			// Buffer mesh normals
			if(!this.buffers.normals[viewport.id] || !this.valid.normals[viewport.id]){
				this.buffers.normals[viewport.id] = viewport.webgl.createBuffer();             

				// Pass normals to buffer
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.normals[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.normals, viewport.webgl[this.bufferUsage.normals]);         
				
				this.valid.normals[viewport.id] = true;
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.normals[viewport.id]);   
			
			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aVertexNormal, 3, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aVertexNormal);
		}

		// Weights
		if(viewport.program.attribute.aVertexWeights !== undefined){
			// Buffer mesh weights
			if(!this.buffers.weights[viewport.id] || !this.valid.weights[viewport.id]){
				this.buffers.weights[viewport.id] = viewport.webgl.createBuffer();             

				// Pass weights to buffer
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.weights[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.weights, viewport.webgl[this.bufferUsage.weights]);         
				
				this.valid.weights[viewport.id] = true;
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.weights[viewport.id]);   
			
			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aVertexWeights, 4, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aVertexWeights);
		}
		
		// Weights Indices
		if(viewport.program.attribute.aVertexWeightIndices !== undefined){
			// Buffer mesh weights
			if(!this.buffers.weightIndices[viewport.id] || !this.valid.weightIndices[viewport.id]){
				this.buffers.weightIndices[viewport.id] = viewport.webgl.createBuffer();             

				// Pass weight indicies to buffer
				viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.weightIndices[viewport.id]);   
				viewport.webgl.bufferData(viewport.webgl.ARRAY_BUFFER, this.weightIndices, viewport.webgl[this.bufferUsage.weightIndices]);         
				
				this.valid.weightIndices[viewport.id] = true;
			}
			viewport.webgl.bindBuffer(viewport.webgl.ARRAY_BUFFER, this.buffers.weightIndices[viewport.id]);   
			
			// Tell the vertex shader how to read the array
			viewport.webgl.vertexAttribPointer(viewport.program.attribute.aVertexWeightIndices, 4, viewport.webgl.FLOAT, false, 0, 0);
			viewport.webgl.enableVertexAttribArray(viewport.program.attribute.aVertexWeightIndices);
		}

		// Joint transforms
		if(viewport.program.uniform["uDeformMatrix[0]"] !== undefined){
			// TODO: Select model and entity properly
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform["uDeformMatrix[0]"], false, stack[stack.length - 2].skeleton.getFlatMatrix(stack[stack.length - 3].transform.localMatrix));
		}

		// Draw
		viewport.webgl.drawArrays(viewport.webgl.TRIANGLES, 0, this.vertices.length / 3);

		stack.pop();
	}

	invalidate(vertices = true, uvs = true, normals = true, weights = true, weightIndices = true){
		//TODO: make each one optional (and default to what the current value is)
		this.valid = { 
			vertices: (vertices)?[]:this.valid.vertices,
			uvs: (uvs)?[]:this.valid.uvs,
			normals: (normals)?[]:this.valid.normals,
			weights: (weights)?[]:this.valid.weights,
			weightIndices: (weightIndices)?[]:this.valid.weightIndices
		}
	}

	//TODO: Should this be a geometry class?
	addPlane(width, height){
		//TODO: Generalize this concept
		function Float32Concat(first, second){
			var firstLength = first.length,
				result = new Float32Array(firstLength + second.length);
		
			result.set(first);
			result.set(second, firstLength);
		
			return result;
		}

		this.vertices = Float32Concat(this.vertices, [
			0.0,         0.0,          0.0,
			1.0 * width, 0.0,          0.0,
			1.0 * width, 1.0 * height, 0.0,
			0.0,         1.0 * height, 0.0,
			0.0,         0.0,          0.0,
			1.0 * width, 1.0 * height, 0.0 
		]);
		this.uvs = Float32Concat(this.uvs, [
			0.0, 1.0, //  left,    top, 
			1.0, 1.0, // right,    top, 
			1.0, 0.0, // right, bottom, 
			0.0, 0.0, //  left, bottom, 
			0.0, 1.0, //  left,    top, 
			1.0, 0.0  // right, bottom, 
		]);
		this.normals = Float32Concat(this.normals, [
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0
		]);

		this.invalidate();

		return this;
	}

	addCube(){
		//TODO: Generalize this concept
		function Float32Concat(first, second){
			var firstLength = first.length,
				result = new Float32Array(firstLength + second.length);
		
			result.set(first);
			result.set(second, firstLength);
		
			return result;
		}

		this.vertices = Float32Concat(this.vertices, 
			[-0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5]
		)

		this.uvs = Float32Concat(this.vertices, 
			[0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]
		)

		this.normals = Float32Concat(this.vertices, 
			[0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]
		)

		this.invalidate();

		return this;
	}
}