// -----------------------------------
// Track Segment Shader
// -----------------------------------

uniform sampler2D uTextureMap;

varying vec4  vColor;
varying vec4  vNormal;
varying vec2  vUv0;
varying float vDepth;
varying vec4  vFogColor;

void main(void)
{
    vec3 tex = texture2D(uTextureMap, vUv0).rgb;  
    vec3 vrc = clamp(tex * vColor.rgb, 0.0, 1.0);  
    vec3 col = mix(vFogColor.rgb, vrc, vDepth);
    
    gl_FragColor = vec4(col.rgb, clamp(vColor.a * vDepth, 0.01, 1.0));
}

