import { Material } from '../main.js';

const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;

    uniform mat4 uMVCPMatrix;

    void main(void) {
        gl_Position = uMVCPMatrix * vec4(aVertexPosition, 1.0);
    }
`

const FRAG_SHADER = `
	precision mediump float;

    void main(void) {
        gl_FragColor = vec4(1.0);
    }
`

export class MaterialBasic extends Material {
	constructor() {
		super(...arguments);

		this.vertexShader = VERTEX_SHADER;
		this.fragmentShader = FRAG_SHADER;
	}
}