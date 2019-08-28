// -----------------------------------
// SpeedLines Segment Shader
// -----------------------------------

uniform sampler2D uFXTextureMap;
uniform float     uSLTimer;
uniform float     uAlphaStrength;
varying vec4      vColor;
varying vec4      vNormal;
varying vec2      vUv0;

void main(void)
{
    float phase0    = uSLTimer;
	float phase1    = phase0 + 0.5;
	float TexAAlpha = (phase0) - floor(phase0);
	float TexBAlpha = (phase1) - floor(phase1);
    float flowLerp  = (abs(0.5 - uSLTimer) / 0.5);

    vec2 uv2     = vec2(1,1) - vUv0;
    vec2 scaler1 = (vUv0 - vec2(0.5, 0.5)) * (1.0 - TexAAlpha) + vec2(0.5, 0.5);
    vec2 scaler2 = (uv2 - vec2(0.5, 0.5)) * (1.0 - TexBAlpha) + vec2(0.5, 0.5);
    vec4 tex     = texture2D(uFXTextureMap, scaler1);       
    vec4 tex2    = texture2D(uFXTextureMap, scaler2);       
    vec4 col     = mix(tex , tex2, flowLerp);

    gl_FragColor = vec4(col.r, col.g, col.b, uAlphaStrength * col.a);
}   

