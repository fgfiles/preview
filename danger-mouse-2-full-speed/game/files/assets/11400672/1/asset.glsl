// -----------------------------------
// Skyplane Fragment Shader
// -----------------------------------

uniform sampler2D uTextureMap;

varying vec4 vColor;
varying vec4 vNormal;
varying vec2 vUv0;
varying vec4 vFogColor;
varying vec3 vBendOffset;

void main(void)
{
	vec2  bendOffset = normalize(vBendOffset).xy;
	float mixValue   = 0.0;
	float offsetY    = clamp(0.5 + bendOffset.y, 0.0, 1.0);
	float margin     = 0.1;

	if(vUv0.y < offsetY + margin) 
	{
		mixValue = 1.0;
	} 
	else 
	{
		float v  = 1.0 - (vUv0.y - offsetY - margin);
		mixValue = clamp(v * v, 0.0, 1.0);
	}

	vec2 uv = vUv0;
	uv.x  += bendOffset.x * 0.5;
	uv.y  -= bendOffset.y * 0.5 + 0.25;

    vec3 tex = texture2D(uTextureMap, uv).rgb;    
    vec3 col = mix(tex, vFogColor.rgb, mixValue);    

	gl_FragColor = vec4(col, 1.0);    
}


