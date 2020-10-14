import { CONST, Material, Color, Texture } from '../main.js';

let tLightPositionFlatArray = new Float32Array(CONST.MAX_LIGHTS * 3);
let tLightMVPFlatArray = new Float32Array(CONST.MAX_LIGHTS * 16);
let tLighColorFlatArray = new Float32Array(CONST.MAX_LIGHTS * 3);
let tLightEnabled = new Array(CONST.MAX_LIGHTS);
let tLightIntensity = new Array(CONST.MAX_LIGHTS);
let tLightMaxDistance = new Array(CONST.MAX_LIGHTS);

// Variable Qualifiers

// Qualifiers give a special meaning to the variable. The following qualifiers are available:
//		const – The declaration is of a compile time constant.
//		attribute – Global variables that may change per vertex, that are passed from the OpenGL application to vertex shaders. This qualifier can only be used in vertex shaders. For the shader this is a read-only variable. See Attribute section.
//		uniform – Global variables that may change per primitive [...], that are passed from the OpenGL application to the shaders. This qualifier can be used in both vertex and fragment shaders. For the shaders this is a read-only variable. See Uniform section.
//		varying – used for interpolated data between a vertex shader and a fragment shader. Available for writing in the vertex shader, and read-only in a fragment shader. See Varying section.

// The vertex level shader. This is typically the position on screen.
const VERTEX_SHADER = `
	precision highp float;

	#define MAX_BONES ${CONST.MAX_BONES}
	#define MAX_LIGHTS ${CONST.MAX_LIGHTS}

	#define SKELETAL_ENABLED
	#define TEXTURES_ENABLED
	#if MAX_LIGHTS > 0
	#define SHADOWS_ENABLED
	#endif

	attribute vec4 aVertexPosition;
	attribute vec3 aVertexNormal;
	attribute vec2 aTextureCoord;
	attribute vec4 aVertexWeights;
	attribute vec4 aVertexWeightIndices;

	uniform mat4 uMVCPMatrix; // Model View Camera Projection Matrix
	uniform mat4 uMMatrix; // World Matrix
	uniform mat4 uViewMatrix; // View Matrix
	uniform mat4 uNormalMatrix;

	uniform mat4 uDeformMatrix[MAX_BONES]; // Bone matrices

	uniform mat4 uDirectionalLightMVPMatrix; // Light MVP Matrix
	varying vec4 vDirectionalShadowPos;

	#if MAX_LIGHTS > 0
	uniform mat4 uLightMVPMatrix[MAX_LIGHTS]; // Light MVP Matrix
	varying vec4 vShadowPos[MAX_LIGHTS];
	#endif

	varying vec3 vPositionCoord;
	varying vec2 vTextureCoord;
	varying vec3 vNormal;

	const mat4 texUnitConverter = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);
	
	mat4 boneTransformMat4() {
		mat4 ret;

		// Weight normalization factor
		float normfac = 1.0 / (aVertexWeights[0] + aVertexWeights[1] + aVertexWeights[2] + aVertexWeights[3]);

		// Weight1 * Bone1 + Weight2 * Bone2
		ret = normfac * aVertexWeights[0] * uDeformMatrix[int(floor(aVertexWeightIndices[0] + 0.5))]
			+ normfac * aVertexWeights[1] * uDeformMatrix[int(floor(aVertexWeightIndices[1] + 0.5))]
			+ normfac * aVertexWeights[2] * uDeformMatrix[int(floor(aVertexWeightIndices[2] + 0.5))]
			+ normfac * aVertexWeights[3] * uDeformMatrix[int(floor(aVertexWeightIndices[3] + 0.5))];

		return ret;
	}

	void main() {
		// Set the position
		#ifdef SKELETAL_ENABLED
			if(aVertexWeights[0] + aVertexWeights[1] + aVertexWeights[2] + aVertexWeights[3] > 0.0){
				mat4 bt = boneTransformMat4();
				vNormal = normalize((bt * vec4(aVertexNormal, 0.0)).xyz);

				gl_Position = uMVCPMatrix * bt * aVertexPosition;
			}else{
				vNormal = normalize(mat3(uNormalMatrix) * aVertexNormal);

				gl_Position = uMVCPMatrix * aVertexPosition;
			}
		#else
			vNormal = normalize(mat3(uNormalMatrix) * aVertexNormal);

			gl_Position = uMVCPMatrix * aVertexPosition;
		#endif

		vPositionCoord = vec3(uMMatrix * aVertexPosition);
		
        // Set texture coordinate
        #ifdef TEXTURES_ENABLED
            vTextureCoord = aTextureCoord;
		#endif

		#ifdef SHADOWS_ENABLED
			vDirectionalShadowPos = texUnitConverter * uDirectionalLightMVPMatrix * aVertexPosition;

			for(int i=0; i < ${CONST.MAX_LIGHTS}; ++i){
				vShadowPos[i] = uLightMVPMatrix[i] * aVertexPosition;
				// vShadowPos[i] = aVertexPosition.xyz - uLightPosition[i];
			}
		#endif
	}
`;

// The fragment (or "pixel") level shader.
//distanceLightWeighting = alpha/(uPointLightingDistance*uPointLightingDistance)
const FRAG_SHADER = `
	#extension GL_OES_standard_derivatives: enable

	#ifdef GL_FRAGMENT_PRECISION_HIGH
		precision highp float;
		// precision highp int;
	#else
		precision mediump float;
		precision mediump int;
	#endif

	#define MAX_LIGHTS ${CONST.MAX_LIGHTS}

    #ifdef GL_OES_standard_derivatives
        #define USE_SVM
    #endif

	#if MAX_LIGHTS > 0
	#define POINT_LIGHTING_ENABLED
	#define DIRECTIONAL_SHADOWS_ENABLED
	#define POINT_SHADOWS_ENABLED
	#endif
	#define DIRECTIONAL_LIGHTING_ENABLED
	#define SHADOW_BIAS 0.0007
	#define FOG_ENABLED
	#define TEXTURE_DIFFUSE_ENABLED
	#define TEXTURE_SPECULAR_COLOR_ENABLED
	#define TEXTURE_AMBIENT_ENABLED
	#define TEXTURE_AMBIENT_BLEND_MODE 1 // 0: Additive | 1: Multiply | 2: Screen
	#define TEXTURE_AMBIENT_COORDINATES 0 // 0: Use UVs | 1: Use World Coordinates XY | 2: Use World Coordinates XZ
	#define TEXTURE_AMBIENT_SIZE 1024.00
	#define TEXTURE_AMBIENT_SCALE 1.0
	#define TEXTURE_AMBIENT_FLIPY
	#define TEXTURE_EMIT_ENABLED

	varying vec3 vPositionCoord;
	varying vec2 vTextureCoord;
	varying vec3 vNormal;

	varying vec4 vDirectionalShadowPos;
	#if MAX_LIGHTS > 0
	varying vec4 vShadowPos[MAX_LIGHTS];
	#endif

	uniform vec3 uCameraPosition;

	uniform vec3 uSceneAmbientLightColor;

	uniform vec3 uDirectionalLightColor;
	uniform vec3 uDirectionalLightVector;
	uniform float uDirectionalLightIntensity;
	
	uniform sampler2D uDiffuseTexture;
	uniform sampler2D uSpecularColorTexture;
	uniform sampler2D uSpecularHighlightTexture;
	uniform sampler2D uAmbientTexture; // TODO: Should be global illumination texture
	uniform sampler2D uEmitTexture;

	uniform vec4 uFogColor;
	uniform float uFogDensity;
	uniform float uFogDistance;

	#if MAX_LIGHTS > 0
	uniform vec3 uLightPosition[MAX_LIGHTS]; // Light positions
	uniform vec3 uLightColor[MAX_LIGHTS];
	uniform float uLightIntensity[MAX_LIGHTS];
	uniform float uLightMaxDistance[MAX_LIGHTS];
	uniform samplerCube uPointLightDepth[MAX_LIGHTS];
	#endif
	uniform sampler2D uDirectionalLightDepth;
	uniform float uDirectionalLightDepthSize;

	uniform vec3 uMaterialDiffuseColor;
	uniform vec3 uMaterialSpecularColor;
	uniform vec3 uMaterialAmbientColor;
	uniform vec3 uMaterialEmitColor;
	uniform vec3 uMaterialTransmissionFilter;
	uniform float uMaterialDissolve;
	uniform float uMaterialSpecularExponent;
	uniform float uMaterialEmitExponent;

	uniform float uShadowBias;

	float unpackDepthVec2(in vec2 color) {
		const vec2 bitShift = vec2(1.0 / 255.0, 1.0);
		return dot(color, bitShift);
	}

	float unpackDepthVec3(in vec3 color) {
		const vec3 bitShift = vec3(1.0 / (255.0 * 255.0), 1.0 / 255.0, 1.0);
		return dot(color, bitShift);
	}

	float unpackDepthVec4(in vec4 color) {
		const vec4 bitShift = vec4(1.0 / (255.0 * 255.0 * 255.0), 1.0 / (255.0 * 255.0), 1.0 / 255.0, 1.0);
		return dot(color, bitShift);
	}

	vec4 shadow_filter(vec2 uv_shadowMap, in sampler2D depthColorTexture){
        // if (!use_filter) {
        	// return texture2D(depthColorTexture, uv_shadowMap);
		// }
		
        vec4 result = vec4(0.0);
		
		for (int x = -1; x <= 1; x++) {
        	for (int y = -1; y <= 1; y++) {
        		float x_l = (uv_shadowMap.x - float(x) / uDirectionalLightDepthSize);
        		float y_l = (uv_shadowMap.y - float(y) / uDirectionalLightDepthSize);
        		vec2 lookup = vec2(x_l, y_l);
        		result += texture2D(depthColorTexture, lookup).rgba; //get(x,y);
        	}
		}
		
        return result / 9.0;
	}
	
	float linstep(float low, float high, float v){
		return clamp((v-low)/(high-low), 0.0, 1.0);
	}

	float directionalShadow(in vec4 shadowPosition, in sampler2D depthColorTexture) {
		#ifdef USE_SVM
			vec4 shadowMapColor = shadow_filter(shadowPosition.xy, depthColorTexture);
			float distance = shadowPosition.z;
			float mean = unpackDepthVec3(shadowMapColor.rgb);

			// Surface is fully lit
			if(distance < mean) return 1.0;

			float depth_2 = shadowMapColor.a;

			// The fragment is either in shadow or penumbra. We now use chebyshev's upperBound to check
			// How likely this pixel is to be lit (p_max)
			float variance = depth_2 - pow(mean, 2.00);
			variance = max(variance, uShadowBias);

			float d = distance - mean;
			float p_max = variance / (variance + d*d);
			p_max = clamp(p_max, 0.0, 1.0);
			float p = smoothstep(distance - 0.02, distance, mean);

			return p_max;
			
			// float p_max = linstep(0.2, 1.0, variance / (variance + d*d));
			// float p = smoothstep(distance - 0.02, distance, mean);
			// return (max(p, p_max) > 1.0 - uShadowBias)?1.0:0.0;
			// return clamp(max(p, p_max), 0.0, 1.0);
			// shadowCoeff = 0 = shadow
			// shadowCoeff = 1 = no shadow
		#else
			vec3 fragmentDepth = shadowPosition.xyz;
			fragmentDepth.z -= uShadowBias;

			float texelDepth = unpackDepthVec4(texture2D(depthColorTexture, fragmentDepth.xy));
			return (fragmentDepth.z < texelDepth) ? 1.0 : 0.0;

			// float texelSize = 1.0 / 1024.0;
			// float amountInLight = 0.0;

			// for (int x = -1; x <= 1; x++) {
			// 	for (int y = -1; y <= 1; y++) {
			// 		float texelDepth = unpackDepthVec4(texture2D(depthColorTexture, fragmentDepth.xy + vec2(x, y) * texelSize));

			// 		if (fragmentDepth.z < texelDepth) {
			// 			amountInLight += 1.0;
			// 		}
			// 	}
			// }
			// amountInLight /= 9.0;

			// return amountInLight;
		#endif
	}

	float omnidirectionalShadow(in vec3 direction, in samplerCube sampler) {
		direction *= vec3(1.0, -1.0, 1.0);
		float vertexDepth = clamp(length(direction), 0.0, 1.0);
		float shadowMapDepth = unpackDepthVec4(textureCube(sampler, direction)) + SHADOW_BIAS;

		return (vertexDepth > shadowMapDepth) ? 0.0 : 1.0;
	}

	float calculateFog(){
		// get the distance of the pixel
		float perspective_far = uFogDistance;
		float fog_cord = (gl_FragCoord.z / gl_FragCoord.w) / perspective_far;

		// density of fog
		float fog_density = uFogDensity;

		// increase fog by density
		// fog also thickens with distance
		return fog_cord * fog_density;
	}

	void main(void) {
		vec3 N = normalize(vNormal);
		vec3 V = normalize(uCameraPosition); // we are in Eye Coordinates, so EyePos is (0,0,0) 

		#if defined(DIRECTIONAL_LIGHTING_ENABLED) || defined(POINT_LIGHTING_ENABLED)

			// Calculate lighting
			vec4 Iamb = vec4(0.0);
			vec4 Ispec = vec4(0.0);
			vec4 Idiff = vec4(0.0);
			vec4 Iemit = vec4(0.0);

			#ifdef DIRECTIONAL_LIGHTING_ENABLED
				vec3 L = normalize(-uDirectionalLightVector); 
				vec3 R = normalize(-reflect(L,N)); 
			
				//calculate Ambient Term: 
				Iamb += vec4(uSceneAmbientLightColor, 0.0); 

				#ifdef DIRECTIONAL_SHADOWS_ENABLED
					float shadow = directionalShadow(vDirectionalShadowPos, uDirectionalLightDepth);
				#else
					float shadow = 1.0;
				#endif
				
				//calculate Diffuse Term: 
				Idiff += vec4(clamp(shadow * uDirectionalLightColor * max(dot(N,L), 0.0), 0.0, 1.0), 0.0);
			
				// calculate Specular Term:
				Ispec += vec4(clamp(shadow * uDirectionalLightColor * pow(max(dot(R,V),0.0),0.3*uMaterialSpecularExponent), 0.0, 1.0), 0.0);
			#endif
			
			#ifdef POINT_LIGHTING_ENABLED
				for (int i=0; i<MAX_LIGHTS; i++){

					vec3 L = normalize(uLightPosition[i] - vPositionCoord); 

					if(length(L) > 0.0){
						vec3 R = normalize(-reflect(L,N)); 

						#ifdef POINT_SHADOWS_ENABLED
							float shadow = omnidirectionalShadow(L, uPointLightDepth[i]); //lightPosition, in samplerCube sampler
							if(shadow <= 0.0) continue;
						#else
							float shadow = 1.0;
						#endif

						//calculate Ambient Term: 
						// vec4 Iamb = vec4(uMaterialAmbientColor, 1.0); 
						
						//calculate Diffuse Term: 
						Idiff += vec4(clamp(uLightColor[i] * max(dot(N,L), 0.0), 0.0, 1.0), 0.0);
					
						// calculate Specular Term:
						Ispec += vec4(clamp(uLightColor[i] * pow(max(dot(R,V),0.0),0.3*uMaterialSpecularExponent), 0.0, 1.0), 0.0);
					}
				}
			#endif

			#if defined(TEXTURE_AMBIENT_ENABLED) || defined(TEXTURE_DIFFUSE_ENABLED)
				#if defined(TEXTURE_AMBIENT_ENABLED)
						Iamb *= texture2D(uAmbientTexture, vTextureCoord);
					#endif
				#if defined(TEXTURE_DIFFUSE_ENABLED)
					Iamb *= texture2D(uDiffuseTexture, vTextureCoord);
				#endif
			#else
				Iamb *= vec4(uSceneAmbientLightColor * uMaterialAmbientColor, 1.0);
			#endif

			#ifdef TEXTURE_DIFFUSE_ENABLED
				Idiff *= texture2D(uDiffuseTexture, vTextureCoord);
			#else
				Idiff *= vec4(uMaterialDiffuseColor, 1.0);
			#endif

			#ifdef TEXTURE_SPECULAR_COLOR_ENABLED
				Ispec *= texture2D(uSpecularColorTexture, vTextureCoord);
			#else
				Ispec *= vec4(uMaterialSpecularColor, 1.0);
			#endif

			#ifdef TEXTURE_EMIT_ENABLED
				Iemit += texture2D(uEmitTexture, vTextureCoord);
			#else
				Iemit += vec4(uMaterialEmitColor, 1.0);
			#endif
			Iemit.rgb *= uMaterialEmitExponent;

			// Final Color = Diffuse + Specular + Ambient + Emit
			gl_FragColor = Idiff + Ispec + Iamb + Iemit; 
		  	gl_FragColor.a *= uMaterialDissolve;
		#else
			#ifdef TEXTURE_DIFFUSE_ENABLED
				gl_FragColor = texture2D(uDiffuseTexture, vTextureCoord);
			#else
				gl_FragColor = vec4(uMaterialDiffuseColor, 1.0);
			#endif
		#endif

		// Discard if there's no pixel to show. This helps when there's empty space background
		// TODO: Is there a way to optimize this?
		if (gl_FragColor.a == 0.0) discard;

		#ifdef FOG_ENABLED
			float fog = calculateFog();

			// mix together the frag color with the fog color
			gl_FragColor = mix(uFogColor, gl_FragColor, clamp(1.0-fog,0.0,1.0));
		#endif
	}
`;

export class MaterialPhong extends Material {
	constructor({ambientColor = new Color(0.0, 0.0, 0.0, 1.0), diffuseColor = new Color(1.0, 1.0, 1.0, 1.0), specularColor = new Color(0.0, 0.0, 0.0, 1.0), specularExponent = 128.0, emitColor = new Color(0.0, 0.0, 0.0, 0.0), emitExponent = 1, transmissionFilter = new Color(1.0, 1.0, 1.0, 1.0), dissolve = 1, lighting = 1, shadowCastingMode = 1, receiveShadows = true, shadowBias = CONST.DEFAULT_SHADOW_BIAS, skeletal = false, ambientTextureCoordinateSpace = "UVtoXZ", ambientTextureFlipY = false, receivesFog = true, ambientTexture = null, diffuseTexture = null, specularColorTexture = null, specularHighlightTexture = null, emitTexture = null, alphaTexture = null, bumpMapTexture = null, displacementTexture = null, decalTexture = null} = {}) {
		super(...arguments);

		this.vertexShader = VERTEX_SHADER;
		this.fragmentShader = FRAG_SHADER;

        this.ambientColor = ambientColor;
        this.diffuseColor = diffuseColor;
		this.specularColor = specularColor;
		this.emitColor = emitColor;
		this.specularExponent = specularExponent;
		this.emitExponent = emitExponent;
		this.transmissionFilter = transmissionFilter;
		this.dissolve = dissolve;

        this.ambientTexture = ambientTexture;
        this.diffuseTexture = diffuseTexture;
        this.specularColorTexture = specularColorTexture;
        this.specularHighlightTexture = specularHighlightTexture;
        this.emitTexture = emitTexture;
        this.alphaTexture = alphaTexture;
        this.bumpMapTexture = bumpMapTexture;
        this.displacementTexture = displacementTexture;
		this.decalTexture = decalTexture;
		this.shadowBias = shadowBias;

        this.lighting = lighting;
		this.skeletal = skeletal; // TODO Rename to "skinning"?

		this.shadowCastingMode = shadowCastingMode;
		this.receiveShadows = receiveShadows;
		this.receivesFog = receivesFog;
		
		this.ambientTextureCoordinateSpace = ambientTextureCoordinateSpace; // TODO: Name this var better?
		this.ambientTextureFlipY = ambientTextureFlipY; // TODO: Name this var better?
        
		this.buildProgram(); // TODO: Where should "autobuild" this live?
	}

	render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack) {
		// Set uniforms (uPMatrix, uCMatrix, etc...)
        super.render(dt, scene, viewport, camera, stack, viewMatrix, modelMatrix, frameBufferTextureStack);
        
        // Set current textures
		if(this.diffuseTexture){
			if(this.diffuseTexture.setAsTexture(viewport, 0, viewport.program.uniform.uDiffuseTexture) === false) return;
		}

		if(this.ambientTexture){
			if(this.ambientTexture.setAsTexture(viewport, 1, viewport.program.uniform.uAmbientTexture) === false) return;
		}

		if(this.specularColorTexture){
			if(this.specularColorTexture.setAsTexture(viewport, 2, viewport.program.uniform.uSpecularColorTexture) === false) return;
		}

		if(this.specularHighlightTexture){
			if(this.specularHighlightTexture.setAsTexture(viewport, 3, viewport.program.uniform.uSpecularHighlightTexture) === false) return;
		}

		if(this.emitTexture){
			if(this.emitTexture.setAsTexture(viewport, 4, viewport.program.uniform.uEmitTexture) === false) return;
		}

		viewport.webgl.uniform4fv(viewport.program.uniform.uDiffuseColor, this.diffuseColor.toArray());

		// Set the material properties
		viewport.webgl.uniform3fv(viewport.program.uniform.uMaterialDiffuseColor, this.diffuseColor.toVec3Array());
		viewport.webgl.uniform3fv(viewport.program.uniform.uMaterialSpecularColor, this.specularColor.toVec3Array());
		viewport.webgl.uniform3fv(viewport.program.uniform.uMaterialAmbientColor, this.ambientColor.toVec3Array());
		viewport.webgl.uniform3fv(viewport.program.uniform.uMaterialEmitColor, this.emitColor.toVec3Array());
		viewport.webgl.uniform3fv(viewport.program.uniform.uMaterialTransmissionFilter, this.transmissionFilter.toVec3Array());
		viewport.webgl.uniform1f(viewport.program.uniform.uMaterialSpecularExponent, this.specularExponent);
		viewport.webgl.uniform1f(viewport.program.uniform.uMaterialEmitExponent, this.emitExponent);
		viewport.webgl.uniform1f(viewport.program.uniform.uMaterialDissolve, this.dissolve);

		// Set global lighting
		let shadowCount = 0;
		
        viewport.webgl.uniform3fv(viewport.program.uniform.uSceneAmbientLightColor, scene.ambientLightColor.toVec3Array()); //TODO: [Optimization] Prevent creating Float32Arrays every time
        viewport.webgl.uniform3fv(viewport.program.uniform.uDirectionalLightColor, scene.directionalLight.diffuseColor.toVec3Array());
		viewport.webgl.uniform3fv(viewport.program.uniform.uDirectionalLightVector, scene.directionalLight.vector);
		viewport.webgl.uniform1f(viewport.program.uniform.uShadowBias, this.shadowBias);

		if(CONST.DIRECTIONAL_SHADOWS_ENABLED){
			if(viewport.program.uniform[`uDirectionalLightDepth`] && frameBufferTextureStack[frameBufferTextureStack.length - 1]){
				if(frameBufferTextureStack[frameBufferTextureStack.length - 1][shadowCount].setAsTexture(viewport, 5 + shadowCount, viewport.program.uniform[`uDirectionalLightDepth`]) === false) return;
				viewport.webgl.uniform1f(viewport.program.uniform.uDirectionalLightDepthSize, frameBufferTextureStack[frameBufferTextureStack.length - 1][shadowCount].width);
			}

			viewport.webgl.uniformMatrix4fv(viewport.program.uniform.uDirectionalLightMVPMatrix, false, scene.directionalLight.getMVPMatrix(modelMatrix, viewport));

			shadowCount++;
		}

		// Build dynamic point lights
		if(viewport.program.uniform["uLightPosition[0]"] !== undefined){
			tLightPositionFlatArray.fill(0);
			tLightMVPFlatArray.fill(0);
			tLighColorFlatArray.fill(0);
			tLightIntensity.fill(0);
			tLightMaxDistance.fill(0);

			for(let lightIndex = 0; lightIndex < CONST.MAX_LIGHTS; lightIndex++){
				let light = scene.lights[lightIndex];

				if(CONST.POINT_SHADOWS_ENABLED && viewport.program.uniform[`uPointLightDepth[${lightIndex}]`] && frameBufferTextureStack[frameBufferTextureStack.length - 1]){
					if(frameBufferTextureStack[frameBufferTextureStack.length - 1][lightIndex + shadowCount].setAsTexture(viewport, 5 + shadowCount + lightIndex, viewport.program.uniform[`uPointLightDepth[${lightIndex}]`]) === false) return;
				}

				if(!light || !light.enabled) continue;
				
				for(var j = 0; j < 3; j++){
					tLightPositionFlatArray[(lightIndex * 3) + j] = light.transform.xyz[j];
				}

				let tMVP = light.getMVPMatrix(modelMatrix, viewport);
				for(var j = 0; j < 16; j++){
					tLightMVPFlatArray[(lightIndex * 16) + j] = tMVP[j];
				}

				for(var j = 0; j < 3; j++){
					tLighColorFlatArray[(lightIndex * 3) + j] = light.diffuseColor.toArray()[j];
				}

				tLightIntensity[lightIndex] = light.intensity * 1;

				tLightMaxDistance[lightIndex] = light.maxDistance * 1;
			}

			shadowCount += CONST.MAX_LIGHTS;

			viewport.webgl.uniform3fv(viewport.program.uniform["uLightPosition[0]"], tLightPositionFlatArray);
			viewport.webgl.uniformMatrix4fv(viewport.program.uniform["uLightMVPMatrix[0]"], false, tLightMVPFlatArray);
			viewport.webgl.uniform3fv(viewport.program.uniform["uLightColor[0]"], tLighColorFlatArray);
			// viewport.webgl.uniform1fv(viewport.program.uniform["uLightIntensity[0]"], tLightIntensity);
			// viewport.webgl.uniform1fv(viewport.program.uniform["uLightMaxDistance[0]"], tLightMaxDistance);
		}
		
		// Set fog
		viewport.webgl.uniform4fv(viewport.program.uniform.uFogColor, scene.fogColor.toArray());
		viewport.webgl.uniform1f(viewport.program.uniform.uFogDensity, scene.fogDensity);
		viewport.webgl.uniform1f(viewport.program.uniform.uFogDistance, viewport.camera._farPlane);
		
		// Enable transparency
		viewport.webgl.blendFunc(viewport.webgl.SRC_ALPHA, viewport.webgl.ONE_MINUS_SRC_ALPHA);
		viewport.webgl.enable(viewport.webgl.BLEND);
    }

    buildProgram(){
		this.vertexShader = VERTEX_SHADER;
		this.fragmentShader = FRAG_SHADER;
        
        if(!CONST.SHADOWS_VSM_ENABLED) this.fragmentShader = this.fragmentShader.replace("#define USE_SVM", "");

		if(!CONST.POINT_SHADOWS_ENABLED){
			this.vertexShader = this.vertexShader.replace("#define POINT_SHADOWS_ENABLED", "");
			this.fragmentShader = this.fragmentShader.replace("#define POINT_SHADOWS_ENABLED", "");
		}

		if(!CONST.LIGHTING_ENABLED){
			this.vertexShader = this.vertexShader.replace("#define DIRECTIONAL_SHADOWS_ENABLED", "");
			this.fragmentShader = this.fragmentShader.replace("#define DIRECTIONAL_SHADOWS_ENABLED", "");
			this.vertexShader = this.vertexShader.replace("#define POINT_SHADOWS_ENABLED", "");
			this.fragmentShader = this.fragmentShader.replace("#define POINT_SHADOWS_ENABLED", "");
			this.vertexShader = this.vertexShader.replace("#define DIRECTIONAL_LIGHTING_ENABLED", "");
			this.fragmentShader = this.fragmentShader.replace("#define DIRECTIONAL_LIGHTING_ENABLED", "");
			this.vertexShader = this.vertexShader.replace("#define POINT_LIGHTING_ENABLED", "");
			this.fragmentShader = this.fragmentShader.replace("#define POINT_LIGHTING_ENABLED", "");
		}
        
        switch(this.lighting){
			case 1:
				// Leave it alone
				break;
			case 0:
			default:
                this.vertexShader = this.vertexShader.replace("#define DIRECTIONAL_LIGHTING_ENABLED", "");
                this.fragmentShader = this.fragmentShader.replace("#define DIRECTIONAL_LIGHTING_ENABLED", "");
                this.vertexShader = this.vertexShader.replace("#define POINT_LIGHTING_ENABLED", "");
                this.fragmentShader = this.fragmentShader.replace("#define POINT_LIGHTING_ENABLED", "");
				this.vertexShader = this.vertexShader.replace("#define SHADOWS_ENABLED", "");
				this.fragmentShader = this.fragmentShader.replace("#define SHADOWS_ENABLED", "");
                break;
        }
		
        if(!this.ambientTexture && !this.diffuseTexture && !this.specularColorTexture && !this.specularHighlightTexture && !this.alphaTexture && !this.bumpMapTexture && !this.displacementTexture && !this.decalTexture){
			this.vertexShader = this.vertexShader.replace("#define TEXTURES_ENABLED", "");
            this.fragmentShader = this.fragmentShader.replace("#define TEXTURES_ENABLED", "");
		}

		if(!this.ambientTexture){
			this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_ENABLED", "");
		}else{
			this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_SIZE 1024.00", "#define TEXTURE_AMBIENT_SIZE " + this.ambientTexture.width.toFixed(2));
			if(this.ambientTexture.scale) this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_SCALE 1.0", "#define TEXTURE_AMBIENT_SCALE " + this.ambientTexture.scale.toFixed(2));
			
			switch(this.ambientTextureCoordinateSpace){
				case "UV":
					this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_COORDINATES 0", "#define TEXTURE_AMBIENT_COORDINATES 0");
					break;
				case "UVtoXY":
					this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_COORDINATES 0", "#define TEXTURE_AMBIENT_COORDINATES 1");
					break;
				case "UVtoXZ":
					this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_COORDINATES 0", "#define TEXTURE_AMBIENT_COORDINATES 2");
					break;
			}
			if(this.ambientTextureCoordinateSpace !== "WORLD"){
				this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_COORDINATES 1", "#define TEXTURE_AMBIENT_COORDINATES 0");
			}
			if(!this.ambientTextureFlipY){
				this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_AMBIENT_FLIPY", "");
			}
		}

		if(!this.diffuseTexture){
			this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_DIFFUSE_ENABLED", "");
		}

		if(!this.specularColorTexture){
			this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_SPECULAR_COLOR_ENABLED", "");
		}

		if(!this.specularHighlightTexture){
			this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_SPECULAR_HIGHLIGHT_ENABLED", "");
		}

		if(!this.emitTexture){
			this.fragmentShader = this.fragmentShader.replace("#define TEXTURE_EMIT_ENABLED", "");
		}
		
		if(!this.skeletal){
			this.vertexShader = this.vertexShader.replace("#define SKELETAL_ENABLED", "");
		}

		if(!this.receivesFog){
			this.fragmentShader = this.fragmentShader.replace("#define FOG_ENABLED", "");
		}

		if(!this.receiveShadows){
			this.vertexShader = this.vertexShader.replace("#define SHADOWS_ENABLED", "");
			this.fragmentShader = this.fragmentShader.replace("#define SHADOWS_ENABLED", "");
		}
    }
}