// ------------------------
// Fire Fragment Shader
// ------------------------

varying vec4 vColor;
varying vec4 vNormal;
varying vec2 vUv0;
varying float vDepth;
varying vec4 vFogColor;

void main(void)
{
    gl_FragColor = vec4(vColor.rgb, vColor.a);
}   

