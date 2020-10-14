import { CONST, MaterialDepth } from '../main.js';

const VERTEX_SHADER = `
    #define MAX_BONES ${CONST.MAX_BONES}
    
    attribute vec3 aVertexPosition;
	attribute vec4 aVertexWeights;
	attribute vec4 aVertexWeightIndices;

    uniform mat4 uLMVMatrix;

    uniform mat4 uDeformMatrix[MAX_BONES]; // Bone matrices
    
    varying float vDepth;

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

    void main(void) {
		// Set the position
        if(aVertexWeights[0] + aVertexWeights[1] + aVertexWeights[2] + aVertexWeights[3] > 0.0){
            mat4 bt = boneTransformMat4();

            gl_Position = uLMVMatrix * bt * vec4(aVertexPosition, 1.0);
        }else{
            gl_Position = uLMVMatrix * vec4(aVertexPosition, 1.0);
        }

        float zBuf = gl_Position.z / gl_Position.w;  // between -1 and 1
        vDepth = 0.5 + (zBuf * 0.5);           // between 0 and 1
    }
`

export class MaterialDepthSkinned extends MaterialDepth {
	constructor() {
		super(...arguments);

		this.vertexShader = VERTEX_SHADER;
    }
}