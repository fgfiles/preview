// ------------------------
// Portal Vertex Shader
// ------------------------

uniform float uTimer;
uniform float uTimer2;
uniform float uZOffset;

void main(void) 
{
    vec4  worldPos = matrix_model * vec4(aPosition, 1.0);                 
    float depthVal = clamp(1.0 - (worldPos.z - 20.0) * 0.01, 0.0, 1.0);  
    
    depthVal      = 2.0 * depthVal * depthVal;
    vColor        = vec4(depthVal + aColor.r * 2.0,depthVal + aColor.r * 2.0, depthVal + aColor.r * 2.0, aColor.a);
    vColor        = mix(aColor, vColor,aColor.a) ;
    float scaler  = aPosition.x * 0.1;
    vec3  pos     = aPosition;
       
    vec4 finalPos  = bendTrackVertexToWorld(pos.xyz);
    finalPos.y    += aColor.a * 0.5 * sin(scaler + 10.0 * uTimer); 
    vUv0           = vec2(aUv0.x * 1.0  +  finalPos.z*.005 , (aUv0.y + uZOffset)*0.2 + uTimer);
    vFogColor      = uFogColor;
    vDepth         = clamp(1.0 - (finalPos.z - 20.0) * 0.02, 0.0, 1.0); 
    
    gl_Position = matrix_viewProjection * finalPos;
}
