import { mat4 } from '../lib/gl-matrix-master/src/gl-matrix.js';
import { GLProgram, Color, MaterialClick, CONST } from './main.js';

let id = 0;
let viewMatrix = mat4.create();

export class Viewport {
	get clearColor() { return this._clearColor; }
	set clearColor(value) {
		this._clearColor = value;
		this.webgl.clearColor(this._clearColor.color[0], this._clearColor.color[1], this._clearColor.color[2], this._clearColor.color[3]);

		return this._clearColor;
	}

	get width() {
		return this.contextElement.clientWidth * this.getDevicePixelRatio(this.webgl);
	}

	get height() {
		return this.contextElement.clientHeight * this.getDevicePixelRatio(this.webgl);
	}
	
	constructor( contextElement, { listenForMouseEvents = false } = {} ) {
		this._currentTexture = [];

		this.id = id++;
		
		this.mouseEventViewport = null;
		this.mouseEventRadius = 1.0;
		this.materialClick = new MaterialClick();
		
		this.camera = null;
		this.contextElement = contextElement;
		this._clearColor = new Color(0, 0, 0, 1);
		this.clearOnRender = true;
		this.programs = [];
		this.program = null;

		this.enabledExtensions = {};

		this.frameBufferTextures = [];

		this._prerenderCalls = [];
		
		// TODO: This should live at the camera
		this.projectionMatrix = mat4.create();
		// TODO: move getAttributes to params + update scene.js
		// this._projectionType = contextElement.getAttribute("projection-type") || "Perspective";
		// this._nearPlane = (contextElement.getAttribute("nearplane") * 1) || 0;
		// this._farPlane = (contextElement.getAttribute("farplane") * 1) || 1000.0;

		this.orthoWidth = (contextElement.getAttribute("ortho-width") * 1) || 0;
		this.orthoHeight = (contextElement.getAttribute("ortho-height") * 1) || 0;

		this.parallax = (contextElement.getAttribute("parallax") == "true");
		
		// Initialize WebGL
		if(!window.WebGLRenderingContext) throw new Error("[Onyx] WebGL is not supported by this browser.");

		// WebGL Options
		let webglOptions = {
			alpha: true,
			antialias: true,
			depth: true,
			failIfMajorPerformanceCaveat: false,
			powerPreference: "default",
			premultipliedAlpha: true,
			preserveDrawingBuffer: true,
			stencil: true
		}

		// Read from HTML tag
		if(contextElement.getAttribute("alpha") == 'false') webglOptions.alpha = false;
		if(contextElement.getAttribute("antialias") == 'false') webglOptions.antialias = false;
		if(contextElement.getAttribute("depth") == 'false') webglOptions.depth = false;
		if(contextElement.getAttribute("fail-if-major-performance-caveat") == 'true') webglOptions.failIfMajorPerformanceCaveat = true;
		if(contextElement.getAttribute("power-preference")) webglOptions.powerPreference = contextElement.getAttribute("powerPreference");
		if(contextElement.getAttribute("premultiplied-alpha") == 'false') webglOptions.premultipliedAlpha = false;
		if(contextElement.getAttribute("preserve-drawing-buffer") == 'false') webglOptions.preserveDrawingBuffer = false;
		if(contextElement.getAttribute("stencil") == 'false') webglOptions.stencil = false;

		
		try {
			this.webgl = contextElement.getContext("webgl", webglOptions) || contextElement.getContext("experimental-webgl", webglOptions);
			this.webgl.id = this.id;
		} catch(e) {
			throw new Error("[Onyx] Couldn't initialize WebGL");
			return;
		}

		if(!this.webgl){
			throw new Error("[Onyx] WebGL appears to be disabled");
			return;
		}
		
		// Get the viewport ready...
		this.webgl.viewport(0, 0, contextElement.width, contextElement.height);
		this.webgl.clearColor(this._clearColor.color[0], this._clearColor.color[1], this._clearColor.color[2], this._clearColor.color[3]);
		this.webgl.blendFuncSeparate(this.webgl.SRC_ALPHA, this.webgl.ONE_MINUS_SRC_ALPHA, this.webgl.ZERO, this.webgl.ONE);

		this.projectionMatrix = mat4.create();

		this.enableExtension("OES_standard_derivatives");
		// this.enableExtension("OES_texture_float");
		// this.enableExtension("OES_texture_float_linear");
		
		this.clear();
		
		// Watch for changes
		window.addEventListener("resize", () => {
			this.evaluate();
		});

		if(listenForMouseEvents){
			this.listenForMouseEvents();
		}

		this.evaluate();
	}
	
	clear() {
		this.webgl.clearColor(this._clearColor.color[0], this._clearColor.color[1], this._clearColor.color[2], this._clearColor.color[3]);
		this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);
	}

	enableExtension(extension){
		if(!this.enabledExtensions[extension]) this.enabledExtensions[extension] = this.webgl.getExtension(extension);
		if(!this.enabledExtensions[extension]) console.warn(`Extension "${extension}" not available.`);
	}
		
	evaluate(clear = true) {
		if(clear){
			let devicePixelRatio = this.getDevicePixelRatio(this.webgl);

			if(!navigator.isCocoonJS){
				if(this.contextElement.clientWidth && this.contextElement.clientHeight){
					this.contextElement.width = this.contextElement.clientWidth * devicePixelRatio;
					this.contextElement.height = this.contextElement.clientHeight * devicePixelRatio;
				}
			}else{
				this.contextElement.width = window.innerWidth * devicePixelRatio;
				this.contextElement.height = window.innerHeight * devicePixelRatio;
			}
		}else{
			if(this.contextElement.clientWidth && this.contextElement.clientHeight){
				if(this.contextElement.width !== this.contextElement.clientWidth * devicePixelRatio) this.contextElement.width = this.contextElement.clientWidth * devicePixelRatio;
				if(this.contextElement.height !== this.contextElement.clientHeight * devicePixelRatio) this.contextElement.height = this.contextElement.clientHeight * devicePixelRatio;
			}
		}
		this.webgl.viewport(0, 0, this.webgl.drawingBufferWidth, this.webgl.drawingBufferHeight);

		if(!this.camera) return;

		//TODO this should be at the camera level, along with FOV, etc.
		if(this.camera._projectionType.toLowerCase() == "orthographic"){
			// Solve width / height
			let width = this.orthoWidth;
			let height = this.orthoHeight;
			
			if(!width && !height){
				width = this.contextElement.clientWidth;
				height = this.contextElement.clientHeight;
			}else{
				let aspect = this.webgl.drawingBufferWidth / this.webgl.drawingBufferHeight;

				if(!width){
					width = height * aspect;
				}else if(!height){
					height = width / aspect;
				}
			}

			// this.width = width;
			// this.height = height;

			mat4.ortho(this.projectionMatrix, 0, width, 0, height, this.camera._nearPlane, this.camera._farPlane);
		}else{
			mat4.perspective(this.projectionMatrix, this.camera.fov, this.webgl.drawingBufferWidth / this.webgl.drawingBufferHeight, this.camera._nearPlane, this.camera._farPlane);
		}
	}

	getDevicePixelRatio(context){
		// For hi-res displays-- For example, the Chromebook Pixel
		if (CONST.AUTO_DETECT_DEVICE_PIXEL_RATIO && 'devicePixelRatio' in window) {
			if (window.devicePixelRatio > 1){// && context.webkitBackingStorePixelRatio < 2) {
				return window.devicePixelRatio;
			}else{
				return 1;
			}
		}else{
			return 1;	
		}
	}
	
	render(dt, scene, stack, matrix, materialOverride, frameBufferTextureStack) {
		if(!this.camera) return;

		// Fire any prerender calls
		while(this._prerenderCalls.length){
			this._prerenderCalls[0]();
			this._prerenderCalls.splice(0, 1);
		}

		// if(this.clearOnRender) this.clear();

		// Calculate view matrix
		mat4.mul(viewMatrix, matrix, this.projectionMatrix);
		
		this.camera.render(dt, scene, this, stack, viewMatrix, materialOverride, frameBufferTextureStack);
		// this.camera.render(dt, scene, this, stack, viewMatrix, this.materialClick, frameBufferTextureStack);

		// Fixes flickering on some browsers (maybe?)
		// this.webgl.flush();
	}

	renderPick(dt = 0, scene, stack, matrix, materialOverride = this.materialClick, frameBufferTextureStack, mouseX, mouseY, event, radius = 1.0, callback) {
		if(!this.camera) return;

		// window.requestAnimationFrame(() => {
			// this.canvas2d.width = this.contextElement.width;
			// this.canvas2d.height = this.contextElement.height;
			// this.evaluate(true);
			
			// this.clear();

			this.mouseEventViewport.camera = this.camera;
			this.mouseEventViewport.contextElement.width = this.contextElement.width;
			this.mouseEventViewport.contextElement.height = this.contextElement.height;
			this.mouseEventViewport.orthoHeight = this.orthoHeight;
			this.mouseEventViewport.orthoWidth = this.orthoWidth;
			this.mouseEventViewport.evaluate(true);
			this.mouseEventViewport.canvas2d.width = this.mouseEventViewport.contextElement.width;
			this.mouseEventViewport.canvas2d.height = this.mouseEventViewport.contextElement.height;
			this.mouseEventViewport.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);
			// this.mouseEventViewport.clear();
			// this.mouseEventViewport.webgl.disable(this.webgl.GL_BLEND);
			
			// Calculate view matrix
			mat4.mul(viewMatrix, matrix, this.projectionMatrix);
			
			this.camera.render(dt, scene, this.mouseEventViewport, stack, viewMatrix, materialOverride, frameBufferTextureStack);

			if(event.clientX === undefined){
				event.clientX = mouseX;
				event.clientY = mouseY;
			}

			// Offset
			// let rect = this.contextElement.getBoundingClientRect();
			// mouseX -= rect.left;
			// mouseY -= rect.top;

			radius = Math.max(radius | 0, 1);

			let devicePixelRatio = this.getDevicePixelRatio(this.webgl);
			mouseX *= devicePixelRatio;
			mouseY *= devicePixelRatio;
			mouseX -= radius / 2;
			mouseY -= radius / 2;
			mouseY = this.contextElement.height - mouseY;

			var rgbaData = new Uint8Array((radius * radius) * 4);
			// this.webgl.readPixels(mouseX | 0, mouseY | 0, radius, radius, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, rgbaData);
			this.mouseEventViewport.webgl.readPixels(mouseX | 0, mouseY | 0, radius, radius, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, rgbaData);

			let scores = [];
			for(let i = 0; i < rgbaData.length; i+=4){
				let index = (rgbaData[i] + (rgbaData[i + 1] * 255)) - 1;

				// Find entity by RGB data
				let entity = this.camera.parentScene.findByIndex(index);
				
				// Add entity to the candidates list
				if(entity){
					if(!scores[index]) scores[index] = 0;

					scores[index]++;
				}
			}
			
			let largest = 0;
			let largestEntity = 0;
			for(let i in scores){
				if(scores[i] > largest){
					largest = scores[i];
					largestEntity = i * 1;
				}
			}

			// return;

			let entity = scene.findByIndex(largestEntity);
			// let entity = this.camera.parentScene.findByIndex(largestEntity);
			if(!entity) entity = scene;

			if(event.type === "mousedown" || event.type === "touchstart"){
				entity.onMouseDown(event);
			}else if(event.type === "mouseup" || event.type === "touchend"){
				entity.onMouseUp(event);
			}else if(event.type === "mousemove"){
				entity.onMouseOver(event);
			}else if(event.type === "mousedrop"){
				entity.onMouseDrop(event);
			}

			// Render again. TODO [Performance]: Fix
			// this.camera.render(dt, scene, this, stack, viewMatrix);

			if(callback) callback();
		// });

	}

	// renderPickOld(dt = 0, scene, stack, matrix, materialOverride = this.materialClick, frameBufferTextureStack, mouseX, mouseY, event, radius = 1.0) {
	// 	if(!this.camera) return;

	// 	window.requestAnimationFrame(() => {
	// 		// let width = this.contextElement.offsetWidth || this.contextElement.width || this.contextElement.naturalWidth;
	// 		// let height = this.contextElement.offsetHeight || this.contextElement.height || this.contextElement.naturalHeight;

	// 		// mouseX *= devicePixelRatio;
	// 		// mouseY *= devicePixelRatio;
			
	// 		// if(this.camera._projectionType.toLowerCase() == "orthographic"){
	// 		// 	// Solve width / height
	// 		// 	width = this.orthoWidth;
	// 		// 	height = this.orthoHeight;

	// 		// 	if(!width && !height){
	// 		// 		width = this.contextElement.clientWidth;
	// 		// 		height = this.contextElement.clientHeight;
	// 		// 	}else{
	// 		// 		let aspect = this.webgl.drawingBufferWidth / this.webgl.drawingBufferHeight;

	// 		// 		if(!width){
	// 		// 			width = height * aspect;
	// 		// 		}else if(!height){
	// 		// 			height = width / aspect;
	// 		// 		}
	// 		// 	}
	// 		// }

	// 		// width /= devicePixelRatio;
	// 		// height /= devicePixelRatio;
		
	// 		// this.mouseEventViewport.camera = this.camera;
	// 		// this.mouseEventViewport.contextElement.width = width;
	// 		// this.mouseEventViewport.contextElement.height = height;
	// 		// this.mouseEventViewport.evaluate(true);
	// 		// this.mouseEventViewport.canvas2d.width = this.mouseEventViewport.contextElement.width;
	// 		// this.mouseEventViewport.canvas2d.height = this.mouseEventViewport.contextElement.height;
	// 		// this.mouseEventViewport.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);

	// 		// alert(this.contextElement.width || this.contextElement.naturalWidth);
	// 		this.canvas2d.width = this.contextElement.width;
	// 		this.canvas2d.height = this.contextElement.height;
	// 		this.evaluate(true);
			
	// 		this.clear();
			
	// 		// this.mouseEventViewport.clear();
	// 		// this.mouseEventViewport.webgl.disable(this.webgl.GL_BLEND);

	// 		// Calculate view matrix
	// 		mat4.mul(viewMatrix, matrix, this.projectionMatrix);
			
	// 		this.camera.render(dt, scene, this, stack, viewMatrix, materialOverride, frameBufferTextureStack);
	// 		// this.camera.render(dt, scene, this.mouseEventViewport, stack, viewMatrix, materialOverride, frameBufferTextureStack);
			
	// 		// this.camera.renderScenePick( dt, scene, this.mouseEventViewport, stack, viewMatrix, materialOverride, frameBufferTextureStack );


	// 		radius = Math.max(radius | 0, 1);

	// 		let devicePixelRatio = this.getDevicePixelRatio(this.webgl);
	// 		mouseX *= devicePixelRatio;
	// 		mouseY *= devicePixelRatio;
	// 		mouseX -= radius / 2;
	// 		mouseY -= radius / 2;
	// 		mouseY = this.contextElement.height - mouseY;

	// 		var rgbaData = new Uint8Array((radius * radius) * 4);
	// 		this.webgl.readPixels(mouseX | 0, mouseY | 0, radius, radius, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, rgbaData);
			
	// 		// Copy scene to 2D Canvas (TODO: Is this faster if we read from the webgl buffer?)
	// 		// this.mouseEventViewport.context2d.drawImage(this.mouseEventViewport.contextElement, 0, 0);
	// 		// // alert(this.mouseEventViewport.contextElement.width);
	// 		// let rgbaData = this.mouseEventViewport.context2d.getImageData(mouseX | 0, mouseY | 0, radius, radius).data;
	// 		// this.context2d.drawImage(this.contextElement, 0, 0);
	// 		// // alert(this.contextElement.width);
	// 		// let rgbaData = this.context2d.getImageData(mouseX | 0, mouseY | 0, radius, radius).data;

	// 		let scores = [];
	// 		for(let i = 0; i < rgbaData.length; i++){
	// 			// Find entity by RGB data
	// 			let entity = this.camera.parentScene.findByIndex(rgbaData[i] - 1);
				
	// 			// Add entity to the candidates list
	// 			if(entity){
	// 				let index = rgbaData[i] - 1;
	// 				if(!scores[index]) scores[index] = 0;

	// 				scores[index]++;
	// 			}
	// 		}
			
	// 		let largest = 0;
	// 		let largestEntity = 0;
	// 		for(let i in scores){
	// 			if(scores[i] > largest){
	// 				largest = scores[i];
	// 				largestEntity = i * 1;
	// 			}
	// 		}

	// 		// return;

	// 		// if(this.camera.parentScene.entities[largestEntity]) this.camera.parentScene.entities[largestEntity].emit('click', event);
	// 		if(this.camera.parentScene.findByIndex(largestEntity)) this.camera.parentScene.findByIndex(largestEntity).onMouseDown(event);

	// 	});

	// }

	createProgram( material ) {
		for(let program of this.programs){
			if(program.vertexShader == material.vertexShader && program.fragmentShader == material.fragmentShader){
				return program;
			} 
		}

		// Create a new program (if one doesn't already exist)
		this.programs.push(new GLProgram(this));

		let program = this.programs[this.programs.length - 1];
		
		// Compile shaders
		program.addVertexShader(this, material.vertexShader);
		program.addFragmentShader(this, material.fragmentShader);
		
		// Links the compiled shaders to the program
		this.webgl.linkProgram(program.program);	
		
		// If creating the shader program failed, alert
		if (!this.webgl.getProgramParameter(program.program, this.webgl.LINK_STATUS)) {
			throw("Unable to initialize the shader program. " + this.webgl.getProgramInfoLog(program.program));
		}
		
		// Get attributes from shaders
		program.getAttributesFromShaders(this, material.shaderAttributes);
		program.getUniformLocations(this, material.shaderUniforms);

		return program;
	}
	
	useProgram( program ) {
		if(this.program === program) return;
		
		this.program = program;
		
		this.program.use(this);
	}
	
	bindToCamera( camera ) {
		this.camera = camera;
		camera.addViewport(this);
		this.evaluate();
	}
	
	listenForMouseEvents( {scene = null, mouseRadius = 1.0} = {} ){
		if(!scene) return;

	    let videoBufferCanvas = document.createElement("canvas");
	    
		this.mouseEventViewport = new Viewport(videoBufferCanvas);
		this.mouseEventRadius = mouseRadius;

		let offsetX = 0;
		let offsetY = 0;
		let radius = 1;
		
		// Initialize 2D
		try {
			this.mouseEventViewport.canvas2d = document.createElement('canvas');
			this.mouseEventViewport.context2d = this.mouseEventViewport.canvas2d.getContext("2d");
			
			this.canvas2d = document.createElement('canvas');
			this.context2d = this.canvas2d.getContext("2d");
		} catch(e) {
			console.error("Couldn't initialize 2D");
		}
	    
		// Watch for mouse events
		this.contextElement.addEventListener("mousedown", (event) => {
			this._prerenderCalls.push(() => {
				let rect = this.contextElement.getBoundingClientRect();
				offsetX = Math.round(event.clientX - rect.left);
				offsetY = Math.round(event.clientY - rect.top);
				radius = this.mouseEventRadius;

				this.renderPick(0, scene, [scene], scene.transform.localMatrix, undefined, undefined, offsetX, offsetY, event, radius);
			});
			// event.preventDefault(); 
		});
		
		this.contextElement.addEventListener("touchstart", (event) => {
			this._prerenderCalls.push(() => {
				let rect = this.contextElement.getBoundingClientRect();
				offsetX = Math.round(event.targetTouches[0].pageX - rect.left);
				offsetY = Math.round(event.targetTouches[0].pageY - rect.top);
				radius = event.targetTouches[0].radiusX;
				
	// 			console.log(event);
				this.renderPick(0, scene, [scene], scene.transform.localMatrix, undefined, undefined, offsetX, offsetY, event, radius);
			});
			// event.preventDefault(); 
		});
		
		this.contextElement.addEventListener("mousemove", (event) => {
			let rect = this.contextElement.getBoundingClientRect();
			offsetX = Math.round(event.clientX - rect.left);
			offsetY = Math.round(event.clientY - rect.top);
			
			// this._prerenderCalls.push(() => {
			// 	// scene.onMouseUp(event);

			// 	// this.renderPick(0, scene, [scene], scene.transform.localMatrix, undefined, undefined, offsetX, offsetY, event, radius);
			// });
		});
		
		this.contextElement.addEventListener("touchmove", (event) => {
			let rect = this.contextElement.getBoundingClientRect();

			offsetX = Math.round(event.targetTouches[0].pageX - rect.left);
			offsetY = Math.round(event.targetTouches[0].pageY - rect.top);
			
			// this._prerenderCalls.push(() => {
			// 	// scene.onMouseUp(event);

			// 	// this.renderPick(0, scene, [scene], scene.transform.localMatrix, undefined, undefined, offsetX, offsetY, event, radius);
			// });
		});

		this.contextElement.addEventListener("mouseup", (event) => {
			this._prerenderCalls.push(() => {
				// scene.onMouseUp(event);

				this.renderPick(0, scene, [scene], scene.transform.localMatrix, undefined, undefined, offsetX, offsetY, event, radius);
			});
			// event.preventDefault(); 
		});

		this.contextElement.addEventListener("touchend", (event) => {
			this._prerenderCalls.push(() => {
				// scene.onMouseUp(event);

				this.renderPick(0, scene, [scene], scene.transform.localMatrix, undefined, undefined, offsetX, offsetY, event, radius);
			});
			// event.preventDefault(); 
		});
	}

	addFrameBufferTexture(frameBufferTexture){
		this.frameBufferTextures.push(frameBufferTexture);
	}

	removeFrameBufferTexture(frameBufferTexture){
		if(this.frameBufferTextures.indexOf(frameBufferTexture) > -1) 
			this.frameBufferTextures.splice(this.frameBufferTextures.indexOf(frameBufferTexture), 1);
	}
}