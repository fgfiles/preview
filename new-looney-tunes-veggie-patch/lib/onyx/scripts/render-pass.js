export class RenderPass {
	constructor({renderPasses = [], frameBufferTexture = null, viewportClear = true} = {}) {
        this.renderPasses = renderPasses;
        this.frameBufferTexture = frameBufferTexture;
        this.viewportClear = viewportClear;
	}

	render(dt, scene, viewport, stack, matrix, materialOverride, frameBufferTextureStack = []) {

        if(this.frameBufferTexture){
            frameBufferTextureStack.push(this.frameBufferTexture);

            // Bind frameBufferTexture
            this.frameBufferTexture.bind(viewport, 0, viewport.width, viewport.height);

            // TODO: Clear instead of viewport.clear()?
            if(this.viewportClear) viewport.clear();

            viewport.render(dt, scene, stack, matrix, undefined, frameBufferTextureStack);

            // Unbind frameBufferTexture
            this.frameBufferTexture.unbind(viewport);
        }else{
            // TODO: Clear instead of viewport.clear()?
            if(this.viewportClear) viewport.clear();

            viewport.render(dt, scene, stack, matrix, undefined, frameBufferTextureStack);
        }
        
        for(let renderPass of this.renderPasses){
            renderPass.render(dt, scene, viewport, stack, matrix, undefined, frameBufferTextureStack);
        }

        if(this.frameBufferTexture) frameBufferTextureStack.pop();
	}
}