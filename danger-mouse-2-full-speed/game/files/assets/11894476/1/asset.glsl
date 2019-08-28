// ------------------------
// Portal Fragment Shader
// ------------------------

varying vec2 vUv0;
varying vec4 vColor;

uniform sampler2D uDiffuseMap;

uniform float uTimerTex;
varying float vDepth;
varying vec4  vFogColor;

void main(void)
{
	vec2  uv          = vUv0 + 0.0*vec2(vUv0.y * 1.5 + 0.2 * uTimerTex, -0.1 * uTimerTex);    
    float desaturated = (vColor.r + vColor.g + vColor.b) / 3.0;
    vec4  vColorDesat = mix(vColor, vec4(desaturated, desaturated, desaturated, vColor.a), 0.1) + vec4(-0.15, 0.15, 0.0, 0.0);    
    vec4  tex         = texture2D(uDiffuseMap, uv)* vColor ;
            
    vec4 texOrVertColor = mix(vColorDesat, tex,  vColor.a);
    vec4 col            = mix(vFogColor, texOrVertColor, vDepth);
    
    gl_FragColor = vec4( col.rgb, 1.0);
}