
// --------------------------
// antmat.vs
// --------------------------

uniform float uTimer;

void main(void) 
{
    vec4  worldPos = matrix_model * vec4(aPosition, 1.0);                 
    float depthVal = clamp(1.0 - (worldPos.z - 20.0) * 0.01, 0.0, 1.0);  
    
    depthVal = 2.0 * depthVal * depthVal;
    vColor   = vec4(depthVal + aColor.r * 2.0, depthVal + aColor.r * 2.0, depthVal + aColor.r * 2.0, aColor.b);
    vUv0     = aUv0;
    
    vec3 pos      = aPosition.xyz;
    vec4 finalPos = bendPropVertexToWorld(pos.xyz);
 
    finalPos.z += 3.0* mod(uTimer, 1.0)*aColor.g; 
    finalPos.z += -0.3*aColor.g*(1.0-aUv0.y)*mod(uTimer+aColor.g, 2.0);    

    gl_Position = matrix_viewProjection  * finalPos;
}
