// -----------------------------------
// Prop Fragment Shader
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
    vec3 col = mix(vFogColor.rgb, tex * vColor.rgb, vDepth);

    // feed into our frag colour
    gl_FragColor = vec4(col.rgb, clamp(vColor.a * vDepth, 0.01, 1.0));
}   

