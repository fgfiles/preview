
// --------------------------
// antmat.fs
// --------------------------


varying vec2 vUv0;
varying vec4 vColor;

uniform sampler2D uDiffuseMap;
uniform sampler2D uSwirlMap;

uniform float uTimerTex;

void main(void)
{
    vec4 color1 = texture2D(uDiffuseMap, vUv0  + vec2(  0.2*uTimerTex , 0.2*uTimerTex));
    vec4 color2 = 2.0*texture2D(uSwirlMap, vUv0*vec2(1.0,0.5) +  1.0*vec2(  0.0 , 1.0*uTimerTex) );
    vec4 color  = mix(color1, color2, vColor.a);
    color.rg -= 0.25*(1.0-vUv0.y) ;
    gl_FragColor = color*vec4(vColor.rgb,1) ;
}