import { mat4 } from '../../lib/gl-matrix-master/src/gl-matrix.js';
import { CONST, Camera, FrameBufferTexture2D, MaterialDepth, MaterialDepthSkinned, RenderPass }  from '../main.js';

let lightMVMatrix = mat4.create();
let viewMatrix = mat4.create();

const CUBEMAP_TARGETS = [
    [-1,  0,  0],
    [ 1,  0,  0],
    [ 0,  1,  0],
    [ 0, -1,  0],
    [ 0,  0, -1],
    [ 0,  0,  1]
];

const CUBEMAP_UPS = [
    [ 0, -1,  0],
    [ 0, -1,  0],
    [ 0,  0, -1],
    [ 0,  0,  1],
    [ 0, -1,  0],
    [ 0, -1,  0]
];

const CUBEMAP_TEXTURE_TARGETS = [
    "TEXTURE_CUBE_MAP_POSITIVE_X",
    "TEXTURE_CUBE_MAP_NEGATIVE_X",
    "TEXTURE_CUBE_MAP_POSITIVE_Y",
    "TEXTURE_CUBE_MAP_NEGATIVE_Y",
    "TEXTURE_CUBE_MAP_POSITIVE_Z",
    "TEXTURE_CUBE_MAP_NEGATIVE_Z"
]

const RENDER_TO_SCREEN = false; // Render shadowmap to canvas/screen. Useful for debugging

export class RenderPassShadow extends RenderPass {
	constructor({renderPasses = [], width = 1024, height = 1024} = {}) {
        super(...arguments);

        this.width = width;
        this.height = height;

        this.frameBufferTextures = [];
        this.material = new MaterialDepth();
        this.materialSkinned = new MaterialDepthSkinned();
	}

	render(dt, scene, viewport, stack, matrix, frameBufferTextureStack = []) {
        if(!CONST.DIRECTIONAL_SHADOWS_ENABLED && !CONST.POINT_SHADOWS_ENABLED){
            for(let renderPass of this.renderPasses){
                if(!RENDER_TO_SCREEN) renderPass.render(dt, scene, viewport, stack, matrix, frameBufferTextureStack);
            }
        }else{
            let shadowCount = 0;
            
            if(CONST.DIRECTIONAL_SHADOWS_ENABLED){
                if(!this.frameBufferTextures[shadowCount]){
                    this.frameBufferTextures[shadowCount] = new FrameBufferTexture2D({height: this.width, width: this.height, magFilter: "NEAREST", minFilter: "NEAREST", textureType: "TEXTURE_2D", flipY: true, wrap: {s: "CLAMP_TO_EDGE", t: "CLAMP_TO_EDGE"}})
                }

                // Bind frameBufferTexture
                if(!RENDER_TO_SCREEN) this.frameBufferTextures[shadowCount].bind(viewport, 0, viewport.webgl.TEXTURE_2D);

                viewport.clear();
                viewport.webgl.clearColor(0, 0, 0, 0);
                viewport.webgl.clearDepth(1.0);
                viewport.webgl.clear(viewport.webgl.COLOR_BUFFER_BIT | viewport.webgl.DEPTH_BUFFER_BIT);

                for(let entity of scene.entities){
                    if(entity instanceof Camera === false && entity.visible){ //TODO: Move this to entity?
                        if(entity.components[0] && entity.components[0].meshes && entity.components[0].meshes[0].material.skeletal){
                            entity.render(dt, scene, viewport, scene.directionalLight, stack, viewMatrix, null, this.materialSkinned);
                        }else{
                            entity.render(dt, scene, viewport, scene.directionalLight, stack, viewMatrix, null, this.material);
                        }
                    }
                }

                // Unbind frameBufferTexture
                this.frameBufferTextures[shadowCount].unbind(viewport);

                shadowCount++;
            }

            if(CONST.POINT_SHADOWS_ENABLED){
                // Render each light as a camera with a shadow material
                for(let lightIndex = shadowCount; lightIndex < CONST.MAX_LIGHTS + shadowCount; lightIndex++){
                    let light = scene.lights[lightIndex - shadowCount];

                    // Note: We still need to create a blank texture for the shader
                    if(!this.frameBufferTextures[lightIndex]){
                        this.frameBufferTextures[lightIndex] = new FrameBufferTexture2D({magFilter: "NEAREST", minFilter: "NEAREST", textureType: "TEXTURE_CUBE_MAP", flipY: true, wrap: {s: "REPEAT", t: "REPEAT"}})
                    }

                    if(!light || !light.enabled) continue;

                    stack.push(light);

                    // Calculate view matrix
                    // mat4.mul(lightMVMatrix, matrix, light.transform.localMatrixInversed);

                    // Render entity to frameBufferTexture
                    for(let i = 0; i < 6; i++) {
                        // Creates a view matrix using target and up vectors 
                        // according to each face of pointlight's cubemap.

                        mat4.lookAt(viewMatrix, [0,0,0], CUBEMAP_TARGETS[i], CUBEMAP_UPS[i]);

                        // Bind frameBufferTexture
                        if(!RENDER_TO_SCREEN) this.frameBufferTextures[lightIndex].bind(viewport, 0, undefined, undefined, viewport.webgl[CUBEMAP_TEXTURE_TARGETS[i]]);

                        viewport.clear();
                        viewport.webgl.clearColor(0,0,0,0);
                        viewport.webgl.clearDepth(1.0);
                        viewport.webgl.clear(viewport.webgl.COLOR_BUFFER_BIT | viewport.webgl.DEPTH_BUFFER_BIT);

                        for(let entity of scene.entities){
                            if(entity instanceof Camera === false && entity !== light && entity.visible){ //TODO: Move this to entity?
                                if(entity.components[0] && entity.components[0].meshes[0].material.skeletal){
                                    entity.render(dt, scene, viewport, light, stack, viewMatrix, null, this.materialSkinned);
                                }else{
                                    entity.render(dt, scene, viewport, light, stack, viewMatrix, null, this.material);
                                }
                            }
                        }
                    }

                    stack.pop();

                    // Unbind frameBufferTexture
                    this.frameBufferTextures[lightIndex].unbind(viewport);
                }

                shadowCount += CONST.MAX_LIGHTS;
            }
            
            frameBufferTextureStack.push(this.frameBufferTextures);

            for(let renderPass of this.renderPasses){
                if(!RENDER_TO_SCREEN) renderPass.render(dt, scene, viewport, stack, matrix, frameBufferTextureStack);
            }

            frameBufferTextureStack.pop();
        }
	}
}