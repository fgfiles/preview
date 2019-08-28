
// ------------------------
// Laser Fragment Shader
// ------------------------

varying vec4 vColor;
varying vec4 vNormal;
varying vec2 vUv0;
varying float vDepth;
varying vec4 vFogColor;
uniform float uTimer;
uniform sampler2D uDiffuseMap;

void main(void)
{
    vec4 tex = texture2D(uDiffuseMap, vUv0 + vec2( 0.0,uTimer)) ;
    gl_FragColor = vec4((1.0 - vColor.a) * vec3(1.0, 1.0, 0.0) + tex.rgb * vColor.rgb, 1.0);
}   

