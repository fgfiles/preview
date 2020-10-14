import { RenderPass } from './main.js';

export class RenderPassPostProcess extends RenderPass {
	constructor({material = null} = {}) {
        super(...arguments);

        this.material = material;
	}

	render(dt, scene, viewport, stack, matrix, materialOverride, frameBufferTextureStack = []) {

        if(this.frameBufferTexture){
            frameBufferTextureStack.push(this.frameBufferTexture);

            // Bind frameBufferTexture
            this.frameBufferTexture.bind(viewport, 0, "TEXTURE_2D", viewport.width, viewport.height);
            
            // TODO: Clear instead of viewport.clear()?
            if(this.viewportClear) viewport.clear();

            this.material.render(dt, scene, viewport, stack, matrix, frameBufferTextureStack);

            // Unbind frameBufferTexture
            this.frameBufferTexture.unbind(viewport);
        }else{
            // TODO: Clear instead of viewport.clear()?
            if(this.viewportClear) viewport.clear();

            this.material.render(dt, scene, viewport, stack, matrix, frameBufferTextureStack);
        }
        
        for(let renderPass of this.renderPasses){
            renderPass.render(dt, scene, viewport, stack, matrix, frameBufferTextureStack);
        }

        if(this.frameBufferTexture) frameBufferTextureStack.pop();
	}
}