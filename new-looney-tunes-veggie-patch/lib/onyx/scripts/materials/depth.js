import { CONST, Material } from '../main.js';

const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;

    uniform mat4 uLMVMatrix;
    
    varying float vDepth;

    void main(void) {
        gl_Position = uLMVMatrix * vec4(aVertexPosition, 1.0);

        float zBuf = gl_Position.z / gl_Position.w;  // between -1 and 1
        vDepth = 0.5 + (zBuf * 0.5);           // between 0 and 1
    }
`

const FRAG_SHADER = `
    #extension GL_OES_standard_derivatives: enable

    #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
    #else
        precision mediump float;
    #endif

    #ifdef GL_OES_standard_derivatives
        #define USE_SVM
    #endif

    varying float vDepth;

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

    vec4 packDepthVec4(const in float depth) {
        const vec4 bitShift = vec4(255.0 * 255.0 * 255.0, 255.0 * 255.0, 255.0, 1.0);
        const vec4 bitMask = vec4(0.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
      
        vec4 res = fract(depth * bitShift);
        res -= res.xxyz * bitMask;
      
        return res;
    }

    void main(void) {
        #ifdef USE_SVM
            float depth2 = pow(vDepth, 2.0);

            // approximate the spatial average of vDepth^2
            float dx = dFdx(vDepth);
            float dy = dFdy(vDepth);
            float depth2Avg = depth2 + 0.25 * (dx*dx + dy*dy);

            // depth saved in red and green channels while average depth^2 is
            // stored in the blue and alpha channels
            gl_FragColor = vec4(packDepthVec3(vDepth), depth2Avg);
        #else
            // Packs normalized fragment's Z-Coordinate which is in [0,1] interval.
            
            gl_FragColor = packDepthVec4(gl_FragCoord.z);
        #endif
    }
`

export class MaterialDepth extends Material {
	constructor() {
		super(...arguments);

		this.vertexShader = VERTEX_SHADER;
        this.fragmentShader = FRAG_SHADER;
        
        if(!CONST.SHADOWS_VSM_ENABLED) this.fragmentShader = this.fragmentShader.replace("#define USE_SVM", "");

        this.blend = false;
        this.cullFaceMode = "FRONT";
    }
    
    render(dt, scene, viewport, light, stack, viewMatrix, modelMatrix) {
        // TODO: Pull in parent's material's diffuse texture (for sprite alpha)
        let parent = stack[stack.length - 1];
        if(!parent || !parent.material.shadowCastingMode) return false; // TODO: Might need to move this if we're using depth for something else

        super.render(dt, scene, viewport, light, stack);
        
        viewport.webgl.disable(viewport.webgl.CULL_FACE);

        viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uLMVMatrix, false, light.getMVPMatrix(modelMatrix, viewport, viewMatrix));
    }
}