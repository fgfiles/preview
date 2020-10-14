import { Texture } from "./main.js";

export class FrameBufferTexture2D extends Texture {
	get width(){ return this.framebufferWidth }
	set width(val){ return this.framebufferWidth = val }
	get height(){ return this.framebufferHeight }
    set height(val){ return this.framebufferHeight = val }
    
	constructor({width = 1024, height = 1024, flipY = false, textureType = "TEXTURE_2D", magFilter = "LINEAR", minFilter = "LINEAR", generateMipmap = false, wrap = {s: "CLAMP_TO_EDGE", t: "CLAMP_TO_EDGE"}} = {}) {
        super(...arguments);

        this.framebuffer = null;
        this.framebufferWidth = width;
        this.framebufferHeight = height;

		this.flipY = flipY;
		this.magFilter = magFilter;
        this.minFilter = minFilter;
        this.textureType = textureType;

        this.wrap = wrap;
        
        this.generateMipmap = generateMipmap;

        this.useDepthBuffer = true;

        this.loaded = true;
	}

	bind(viewport, textureNumber = 0, width = this.width, height = this.height, target = viewport.webgl[this.textureType]){        
        // Create the "texture"
        if(!this.texture[viewport.id] || width !== this.width || height !== this.height){
            this.width = width;
            this.height = height;
            // console.log(width, height);
            if(this.texture[viewport.id]) this.unload(viewport);
            this.createTexture(viewport);
        }

        viewport.webgl.bindTexture(viewport.webgl[this.textureType], this.texture[viewport.id]);

        // Create and bind the framebuffer
        if(!this.framebuffer){
            this.framebuffer = viewport.webgl.createFramebuffer();
            this.width = width;
            this.height = height;
        }
        this.img = this.framebuffer;

        viewport.webgl.bindFramebuffer(viewport.webgl.FRAMEBUFFER, this.framebuffer);
        viewport.webgl.framebufferRenderbuffer(viewport.webgl.FRAMEBUFFER, viewport.webgl.DEPTH_ATTACHMENT, viewport.webgl.RENDERBUFFER, this.depthBuffer);

        // Set the size of the viewport to be the same size as the frame buffer
        viewport.webgl.viewport(0, 0, this.width, this.height);

        // attach the texture as the first color attachment
        viewport.webgl.framebufferTexture2D(viewport.webgl.FRAMEBUFFER, viewport.webgl.COLOR_ATTACHMENT0, target, this.texture[viewport.id], 0); // 0 = level

        viewport._currentTexture[textureNumber] = this;
    }

    unbind(viewport){
        viewport.webgl.bindFramebuffer(viewport.webgl.FRAMEBUFFER, null);

        // Set the size of the viewport to be the same size as the frame buffer
        viewport.webgl.viewport(0, 0, viewport.width, viewport.height);
    }

    createTexture(viewport){
        // Create the texture in GL
        this.texture[viewport.id] = viewport.webgl.createTexture();
        viewport.webgl.bindTexture(viewport.webgl[this.textureType], this.texture[viewport.id]);
		viewport.webgl.pixelStorei(viewport.webgl.UNPACK_FLIP_Y_WEBGL, this.flipY);
        
        // Initialize the texture
        // define size and format of level 0
        const targetTextureWidth = this.framebufferWidth;
        const targetTextureHeight = this.framebufferHeight;
        const level = 0;
        const internalFormat = viewport.webgl.RGBA;
        const border = 0;
        const format = viewport.webgl.RGBA;
        const type = viewport.webgl.UNSIGNED_BYTE;
        const data = null; // Just tell WebGL to allocate the texture

        if(this.textureType === "TEXTURE_CUBE_MAP"){
            for(let i = 0; i < 6; i++){
                viewport.webgl.texImage2D(viewport.webgl.TEXTURE_CUBE_MAP_POSITIVE_X + i, level, internalFormat,
                    targetTextureWidth, targetTextureHeight, border,
                    format, type, data);
            }
        }else{
            viewport.webgl.texImage2D(viewport.webgl[this.textureType], level, internalFormat,
                            targetTextureWidth, targetTextureHeight, border,
                            format, type, data);
        }

        // If using a depth buffer, create one
        if(this.useDepthBuffer){
            // create a depth renderbuffer
            this.depthBuffer = viewport.webgl.createRenderbuffer();
            viewport.webgl.bindRenderbuffer(viewport.webgl.RENDERBUFFER, this.depthBuffer);
            
            // make a depth buffer and the same size as the targetTexture
            viewport.webgl.renderbufferStorage(viewport.webgl.RENDERBUFFER, viewport.webgl.DEPTH_COMPONENT16, targetTextureWidth, targetTextureHeight);
        }
    }

    updateTexture(viewport){
        
    }
}