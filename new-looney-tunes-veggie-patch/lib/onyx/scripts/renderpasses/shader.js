import { RenderPass }  from '../main.js';

export class RenderPassShader extends RenderPass {
	constructor({renderPasses = [], shader = null} = {}) {
        super(...arguments);

        this.frameBufferTextures = [];
        this.shader = shader;
	}

	render(dt, scene, viewport, stack, matrix, frameBufferTextureStack = []) {
		if(this.viewportClear) viewport.clear();
	
		if(this.shader) this.shader.render(dt, scene, viewport, scene.cameras[0], stack, matrix, frameBufferTextureStack);

		for(let renderPass of this.renderPasses){
			renderPass.render(dt, scene, viewport, stack, matrix, frameBufferTextureStack);
		}
	}
}