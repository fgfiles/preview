'use strict';

import { Material } from '../main.js';

const BONE_MAX = 64;

const VERTEX_SHADER = `
	#define SKELETAL_ENABLED

	attribute vec3 aVertexPosition, barycentric;
	attribute vec4 aVertexWeights;
	attribute vec4 aVertexWeightIndices;

	uniform mat4 uMVCPMatrix; // Model View Camera Projection Matrix
	uniform mat4 uMMatrix; // Model
	uniform mat4 uTMatrix; // Entity
	uniform mat4 uCMatrix; // Camera
	uniform mat4 uMVMatrix;// Inverse Camera
	uniform mat4 uPMatrix; // Projection
	uniform mat4 uNormalMatrix;
	uniform mat4 uDeformMatrix[${BONE_MAX}]; // Bone matrices
	
	varying vec4 vPositionCoord;
	varying vec3 vBC;
	
	mat4 boneTransformMat4() {
		mat4 ret;

		// Weight normalization factor
		float normfac = 1.0 / (aVertexWeights[0] + aVertexWeights[1] + aVertexWeights[2] + aVertexWeights[3]);

		// Weight1 * Bone1 + Weight2 * Bone2
		ret = normfac * aVertexWeights[0] * uDeformMatrix[int(floor(aVertexWeightIndices[0] + 0.5))]
			+ normfac * aVertexWeights[1] * uDeformMatrix[int(floor(aVertexWeightIndices[1] + 0.5))]
			+ normfac * aVertexWeights[2] * uDeformMatrix[int(floor(aVertexWeightIndices[2] + 0.5))]
			+ normfac * aVertexWeights[3] * uDeformMatrix[int(floor(aVertexWeightIndices[3] + 0.5))];

		return ret;
	}

	void main() {
		vBC = barycentric;

		// Set the position
		#ifdef SKELETAL_ENABLED
			if(aVertexWeights[0] + aVertexWeights[1] + aVertexWeights[2] + aVertexWeights[3] > 0.0){
				mat4 bt = boneTransformMat4();
				gl_Position = uMVCPMatrix * bt * vec4(aVertexPosition, 1.0);

				vNormal = (bt * vec4(aVertexNormal, 0.0)).xyz;
			}else{
				gl_Position = uMVCPMatrix * vec4(aVertexPosition, 1.0);
			}
		#else
			gl_Position = uMVCPMatrix * vec4(aVertexPosition, 1.0);
		#endif
	}
`;

const FRAG_SHADER = `
	#extension GL_OES_standard_derivatives : enable

	precision mediump float;

	varying vec4 vPositionCoord;
	varying vec3 vBC;
    
    float edgeFactor(){
        vec3 d = fwidth(vBC);
        vec3 a3 = smoothstep(vec3(0.0), d*1.5, vBC);
        return min(min(a3.x, a3.y), a3.z);
    }

	void main(void) {
        gl_FragColor.rgb = mix(vec3(0.0), vec3(0.5), edgeFactor());
	}
`;

export class MaterialWireframe extends Material {
	constructor(name = "", {lighting = 1, skeletal = false} = {}) {
		super(name);

		this.vertexShader = VERTEX_SHADER;
		this.fragmentShader = FRAG_SHADER;

		this.shaderAttributes = [...ATTRIBUTES];
        this.shaderUniforms = [...UNIFORMS];
        
		this.buildProgram(); // TODO: Where should "autobuild" this live?
	}

    buildProgram(){
		this.shaderAttributes = [...ATTRIBUTES];
		this.shaderUniforms = [...UNIFORMS];
		
		this.vertexShader = VERTEX_SHADER;
        this.fragmentShader = FRAG_SHADER;
        
		if(!this.skeletal){
			this.vertexShader = this.vertexShader.replace("#define SKELETAL_ENABLED", "");

			// Because Edge doesn't optimize uniforms out automatically
			if(this.shaderUniforms.indexOf("uDeformMatrix") > -1) this.shaderUniforms.splice(this.shaderUniforms.indexOf("uDeformMatrix"), 1);
		}
    }
}