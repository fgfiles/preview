import * as Onyx from '../../lib/onyx/scripts/main.js';

const VERTEX_SHADER = `
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

	uniform mat4 uMVCPMatrix; // Model View Camera Projection Matrix
    
	varying vec2 vTextureCoord;
    
    void main(void) {
        gl_Position = uMVCPMatrix * vec4(aVertexPosition, 1.0);

        vTextureCoord = aTextureCoord;
    }
`

const FRAG_SHADER = `
    #extension GL_OES_standard_derivatives: enable

    #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
    #else
        precision mediump float;
    #endif

    uniform sampler2D uDiffuseTexture;
    
	uniform vec3 uHSLAdjust;
    
    varying vec2 vTextureCoord;
    
    // All components are in the range [0…1], including hue.
    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    

    // All components are in the range [0…1], including hue.
    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main(void) {
        vec4 color = texture2D(uDiffuseTexture, vTextureCoord);

        // Convert to HSV
        color.rgb = rgb2hsv(color.rgb);

        // Adjust
        color.r += uHSLAdjust.r;
        color.g += uHSLAdjust.g;
        color.b += uHSLAdjust.b;

        // Convert to RGB
        color.rgb = hsv2rgb(color.rgb);

        gl_FragColor = color;
        // gl_FragColor = vec4(1.,1.,0.,1.);
        
        // if(gl_FragColor.a == 0.0) discard;
    }
`

export default class MaterialSpriteColorized extends Onyx.Material {
	constructor() {
		super(...arguments);

        
		this.vertexShader = VERTEX_SHADER;
        this.fragmentShader = FRAG_SHADER;
        
        this.blend = false;
        this.depthTest = true;
        
        this.cullFace = false;
    }
    
    render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack) {

		// Set uniforms (uMVMatrix, etc...)
		super.render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack);

        // Parent Entity
        let entity = stack[stack.length - 3];
        let sprite = stack[stack.length - 2];

        // Set current textures
        // let texture = entity.sprite.textures[entity.sprite._materialIndex];
        // if(texture.setAsTexture(viewport, 0, viewport.program.uniform.uDiffuseTexture) === false) return;
        if(sprite.textures[sprite._materialIndex].setAsTexture(viewport, 0, viewport.program.uniform.uDiffuseTexture) === false) return;

        // Set HSV adjust
        if(entity.HSV) viewport.webgl.uniform3fv(viewport.program.uniform.uHSLAdjust, entity.HSV);

        // // Enable transparency
		viewport.webgl.blendFunc(viewport.webgl.SRC_ALPHA, viewport.webgl.ONE_MINUS_SRC_ALPHA);
		viewport.webgl.enable(viewport.webgl.BLEND);
    }
}