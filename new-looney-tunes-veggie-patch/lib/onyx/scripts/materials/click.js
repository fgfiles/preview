import { CONST, Material } from '../main.js';

const VERTEX_SHADER = `
    #define TEXTURES_ENABLED

    attribute vec3 aVertexPosition;
	attribute vec2 aTextureCoord;

	uniform mat4 uMVCPMatrix; // Model View Camera Projection Matrix
    
    varying float vDepth;
	varying vec2 vTextureCoord;

    void main(void) {
        gl_Position = uMVCPMatrix * vec4(aVertexPosition, 1.0);

        // Set texture coordinate
        #ifdef TEXTURES_ENABLED
            vTextureCoord = aTextureCoord;
		#endif
    }
`

const FRAG_SHADER = `
    #extension GL_OES_standard_derivatives: enable

    #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
    #else
        precision mediump float;
    #endif

    #define TEXTURES_ENABLED

    uniform sampler2D uDiffuseTexture;
    uniform float uEntityIndex;
    
	varying vec2 vTextureCoord;

    vec2 packDepthVec2(const in float depth) {
        const vec2 bitShift = vec2(255.0, 1.0);
        const vec2 bitMask = vec2(0.0, 1.0 / 255.0);
      
        vec2 res = fract(depth * bitShift);
        res -= res.xy * bitMask;
      
        return res;
    }

    vec3 packDepthVec3(const in float depth) {
        const vec3 bitShift = vec3(255.0 * 255.0, 255.0, 1.0);
        const vec3 bitMask = vec3(0.0, 1.0 / 255.0, 1.0 / 255.0);
      
        vec3 res = fract(depth * bitShift);
        res -= res.xyz * bitMask;
      
        return res;
    }

    void main(void) {
        // Packs normalized fragment's Z-Coordinate which is in [0,1] interval.
        gl_FragColor = vec4(mod(uEntityIndex, 255.0) / 255.0, floor(uEntityIndex / 255.0) / 255.0, 1.0, 1.0);
        // gl_FragColor = vec4(packDepthVec3(uEntityIndex), 1.0);

        #ifdef TEXTURES_ENABLED
            gl_FragColor.a = ceil(texture2D(uDiffuseTexture, vTextureCoord).a);
        #endif
        
        if(gl_FragColor.a == 0.0) discard;
    }
`

export class MaterialClick extends Material {
	constructor() {
		super(...arguments);

		this.vertexShader = VERTEX_SHADER;
        this.fragmentShader = FRAG_SHADER;
        
        this.blend = true;
        this.depthTest = true;
        
        this.cullFace = false;
    }

    render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack) {
        // Parent Entity
        let entity = stack[stack.length - 3];
        if(!entity.pointerEvents) return false;
        let entityIndex = entity.index;

        if(entityIndex < 0) return;
        
		// Set uniforms (uMVMatrix, etc...)
		super.render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack);

        // Parent material
        let parentMaterial = stack[stack.length - 1].material;

        // Set current textures
		if(parentMaterial.diffuseTexture){
			if(parentMaterial.diffuseTexture.setAsTexture(viewport, 0, viewport.program.uniform.uDiffuseTexture) === false) return;
        }

        viewport.webgl.uniform1f(viewport.program.uniform.uEntityIndex, entityIndex + 1);
        
		// Enable transparency
		viewport.webgl.blendFunc(viewport.webgl.SRC_ALPHA, viewport.webgl.ONE_MINUS_SRC_ALPHA);
		viewport.webgl.enable(viewport.webgl.BLEND);
    }
}