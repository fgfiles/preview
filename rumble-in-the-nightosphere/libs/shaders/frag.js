var shaders = shaders || {};
shaders.gameboy = `
precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform float pixelSize;
void main(void)
{
    vec2 coord = vTextureCoord*filterArea.xy;
    vec2 st = floor( coord / pixelSize) * pixelSize;
    float t = texture2D(uSampler, st/filterArea.xy).r;
    gl_FragColor = t > 0.75 ? vec4(.608, .737, .059, 1)
       : t > 0.50 ? vec4(.545, .674, .059, 1)
       : t > 0.25 ? vec4(.188, .384, .188, 1)
       :            vec4(.059, .219, .059, 1);
}
`;
shaders.bloom = `
precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
vec4 cheapBlur(sampler2D uSampler, vec2 uv){
	vec2 pixelSize = vec2(1.0) / filterArea.xy;
    vec2 halfSize = pixelSize / vec2(2.0);    
    
    int distance = 4;
    vec4 fragColor = vec4(0); 

    vec2 step1 = (vec2(distance) + 0.5) / filterArea.xy;    
    fragColor += texture2D(uSampler, uv + step1) / float(4);
    fragColor += texture2D(uSampler,  uv - step1) / float(4);
  	vec2 step2 = step1;
    step2.x = -step2.x;
    fragColor += texture2D(uSampler, uv + step2) / float(4);
    fragColor += texture2D(uSampler,  uv - step2) / float(4);

    return fragColor;
}
vec4 overlay(vec4 lowPixel, vec4 topPixel){
	if(lowPixel.g > 0.5){
		return 1.0 - (1.0-2.0*(lowPixel-0.5)) * (1.0-topPixel);
	}
	else{
		return (2.0*lowPixel) * topPixel;
	}	 
}
void main(void)
{
    vec2 uv = vTextureCoord;        
    gl_FragColor = mix(texture2D(uSampler, uv), overlay(texture2D(uSampler, uv), cheapBlur(uSampler, uv)), 0.5);
}
`;
shaders.base = `
precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
vec4 lol( vec4 colorin ){
    return colorin + 0.2;
}
void main(void)
{
    vec2 st = vTextureCoord;
    vec4 colorin = texture2D(uSampler, st);
    gl_FragColor = colorin;
}
`;
