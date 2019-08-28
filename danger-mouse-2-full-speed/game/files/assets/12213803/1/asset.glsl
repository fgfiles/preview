// -----------------------------------
// Factory Segment Shader
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
    float desaturated = (vColor.r+vColor.g +vColor.b)/3.0;
    vec3 col = mix(vFogColor.rgb, tex * mix(vColor.rgb, vec3(desaturated,desaturated,desaturated), 0.5) + vec3(-0.15,0.15,0.0), vDepth) ;
    //vec3 col = mix(vFogColor.rgb, tex * vColor.rgb, vDepth) ;
    
    gl_FragColor = vec4(col.rgb, vColor.a);
}

