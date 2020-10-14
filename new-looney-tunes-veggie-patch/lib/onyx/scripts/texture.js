let imgCache = {};

let isPowerOf2 = function(n){
	return n && (n & (n - 1)) === 0;
}

export class Texture {
	get width(){ return this.img.naturalWidth || this.img.width }
	set width(val){ return this.img.width = val }
	get height(){ return this.img.naturalHeight || this.img.height }
	set height(val){ return this.img.height = val }
	
	constructor({src = "", flipY = true, textureType = "TEXTURE_2D", magFilter = "LINEAR", minFilter = "LINEAR_MIPMAP_LINEAR", generateMipmap = true, img = new Image(), wrap = {s: "CLAMP_TO_EDGE", t: "CLAMP_TO_EDGE"}} = {}) {
		this.src = src;

		this._loadPromise = null;
		this.loaded = false;

		this.texture = [];
		this.img = img;

		this.flipY = flipY;
		this.magFilter = magFilter;
		this.minFilter = minFilter;
        this.textureType = textureType;

		this._generateMipmap = generateMipmap;

		this.wrap = wrap;

		// if(src) this.load();
	}

	load(viewport = null) {
		if(this._loadPromise) return this._loadPromise;

		if(imgCache[this.src]){
			this.img = imgCache[this.src];
			
			this._loadPromise = new Promise((resolve, reject) => {
				this.loaded = true;
				this._loadPromise = null;

				if(viewport){
					if(Array.isArray(viewport)){
						for(let vp of viewport){
							this.setAsTexture(vp);
						}
					}else{
						this.setAsTexture(viewport);
					}
				}

				resolve(this);
			});
		}else{
			this._loadPromise = new Promise((resolve, reject) => {
				this.img.onload = (() => {
					this.loaded = true;
					this._loadPromise = null;
					imgCache[this.src] = this.img;

					if(!isPowerOf2(this.img.width) || !isPowerOf2(this.img.height)) this._generateMipmap = false;

					if(viewport){
						if(Array.isArray(viewport)){
							for(let vp of viewport){
								this.setAsTexture(vp);
							}
						}else{
							this.setAsTexture(viewport);
						}
					}

					resolve(this);
				});
				this.img.onerror = ((e) => {
					this.loaded = false;
					this._loadPromise = null;
					reject(`Error loading image file: '${this.img.src}'`);
				});
			});
	
			this.img.src = this.src;
		}
		
		return this._loadPromise;
	}

	unload ( viewport ) {
		viewport.webgl.deleteTexture(this.texture[viewport.id]);
	}

	createTexture(viewport){
		this.texture[viewport.id] = viewport.webgl.createTexture();

		viewport.webgl.bindTexture(viewport.webgl[this.textureType], this.texture[viewport.id]);
		viewport.webgl.pixelStorei(viewport.webgl.UNPACK_FLIP_Y_WEBGL, this.flipY);
		// viewport.webgl.pixelStorei(viewport.webgl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

		if(this.textureType === "TEXTURE_CUBE_MAP"){
            for(let i = 0; i < 6; i++){
                viewport.webgl.texImage2D(viewport.webgl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, viewport.webgl.RGBA, viewport.webgl.RGBA, viewport.webgl.UNSIGNED_BYTE, this.img);
            }
        }else{
			viewport.webgl.texImage2D(viewport.webgl[this.textureType], 0, viewport.webgl.RGBA, viewport.webgl.RGBA, viewport.webgl.UNSIGNED_BYTE, this.img);
		}
	}
	
	updateTexture( viewport ) {
		if(this._generateMipmap){
			viewport.webgl.generateMipmap(viewport.webgl[this.textureType]);
		}

		// For video
		// if(this.video.readyState === 4){
		// 	viewport.webgl.texImage2D(viewport.webgl[this.textureType], 0, viewport.webgl.RGBA, viewport.webgl.RGBA, viewport.webgl.UNSIGNED_BYTE, this.video);
		// }
		//viewport.webgl.texParameteri(viewport.webgl[this.textureType], viewport.webgl.TEXTURE_MAG_FILTER, viewport.webgl.NEAREST);
		//viewport.webgl.texParameteri(viewport.webgl[this.textureType], viewport.webgl.TEXTURE_MIN_FILTER, viewport.webgl.NEAREST);
	}

	setAsTexture( viewport, textureNumber = 0, uniformPosition = null){
		// TODO: Set to black texture if none loaded
		if(!this.img){ 
			console.error('Texture has no image loaded');
			return false;
		}
		if(!this.loaded){ 
			console.warn('Texture image not yet loaded');
			return false;
		}
		// if(viewport._currentTexture[textureNumber] == this) return;
		
		// Create the texture if it doesn't exist yet
		if(!this.texture[viewport.id]){
			this.createTexture(viewport);
			this.updateTexture(viewport);
		}

		viewport.webgl.activeTexture(viewport.webgl["TEXTURE"+textureNumber]);
		viewport.webgl.bindTexture(viewport.webgl[this.textureType], this.texture[viewport.id]);

		// Allow non-square textures
		viewport.webgl.texParameteri(viewport.webgl[this.textureType], viewport.webgl.TEXTURE_WRAP_S, viewport.webgl[this.wrap.s]);
		viewport.webgl.texParameteri(viewport.webgl[this.textureType], viewport.webgl.TEXTURE_WRAP_T, viewport.webgl[this.wrap.t]);

		viewport.webgl.texParameteri(viewport.webgl[this.textureType], viewport.webgl.TEXTURE_MAG_FILTER, viewport.webgl[this.magFilter]);
		viewport.webgl.texParameteri(viewport.webgl[this.textureType], viewport.webgl.TEXTURE_MIN_FILTER, viewport.webgl[this.minFilter]);
		
		if(uniformPosition){
			viewport.webgl.uniform1i(uniformPosition, textureNumber);
		}

		viewport._currentTexture[textureNumber] = this;

		return true;
	};
}