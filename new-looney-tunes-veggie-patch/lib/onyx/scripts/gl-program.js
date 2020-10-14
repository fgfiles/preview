export class GLProgram {
	constructor( viewport ) { 
		this.program = viewport.webgl.createProgram();
		this.attribute = {};
		this.uniform = {};
		this.fragmentShader = "";
		this.vertexShader = "";

		// TODO: Make this an option for materials
		// viewport.webgl.getExtension('OES_standard_derivatives');
	}
	
	addVertexShader( viewport, shader ){
		var vs = viewport.webgl.createShader(viewport.webgl.VERTEX_SHADER);
		viewport.webgl.shaderSource(vs, shader);
		viewport.webgl.compileShader(vs);
		viewport.webgl.attachShader(this.program, vs); // Maybe do this after, so that you can attach/detach shaders
		
		// If creating the shader program failed, alert
		if (!viewport.webgl.getShaderParameter(vs, viewport.webgl.COMPILE_STATUS)) {
			throw("An error occurred compiling the vertex shader: " + viewport.webgl.getShaderInfoLog(vs));
		}
		
		this.vertexShader = shader;
	}
	
	addFragmentShader( viewport, shader ){
		var fs = viewport.webgl.createShader(viewport.webgl.FRAGMENT_SHADER);
		viewport.webgl.shaderSource(fs, shader);
		viewport.webgl.compileShader(fs);
		viewport.webgl.attachShader(this.program, fs);
		
		// If creating the shader program failed, alert
		if (!viewport.webgl.getShaderParameter(fs, viewport.webgl.COMPILE_STATUS)) {
			throw("An error occurred compiling the fragment shader: " + viewport.webgl.getShaderInfoLog(fs));
		}
		
		this.fragmentShader = shader;
	}
	
	getAttributesFromShaders( viewport ){
		let attributeCount = viewport.webgl.getProgramParameter(this.program, viewport.webgl.ACTIVE_ATTRIBUTES);

		for(let i = 0; i < attributeCount; i++){
			let attributeInfo = viewport.webgl.getActiveAttrib(this.program, i);
			this.attribute[attributeInfo.name] = viewport.webgl.getAttribLocation(this.program, attributeInfo.name);

			if(this.attribute[attributeInfo.name] < 0) delete this.attribute[attributeInfo.name];
		}
	}
	
	getUniformLocations( viewport ){
		let uniformCount = viewport.webgl.getProgramParameter(this.program, viewport.webgl.ACTIVE_UNIFORMS);

		for(let i = 0; i < uniformCount; i++){
			let uniformInfo = viewport.webgl.getActiveUniform(this.program, i);
			this.uniform[uniformInfo.name] = viewport.webgl.getUniformLocation(this.program, uniformInfo.name);

			if(this.uniform[uniformInfo.name] < 0) delete this.uniform[uniformInfo.name];
		}
	}
	
	use( viewport ){
		viewport.webgl.useProgram( this.program );
	}
}