// -----------------------------------
// Track Vertex Shader
// -----------------------------------

uniform vec3 uOrigin;            // this is where the player is located
uniform vec3 uForward;           // this is the the direction the the player is facing

uniform vec3 uP0;
uniform vec3 uP1;
uniform vec3 uP2;
uniform vec3 uP3;

uniform vec4 uFogColor;

attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aUv0;
attribute vec4 aColor;

varying vec4  vNormal;
varying vec4  vColor;
varying vec2  vUv0;
varying float vDepth;
varying vec4  vFogColor;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

vec3 calcCatmullRom(float t)
{
    vec3 p0 = uP0;
    vec3 p1 = uP1;    
    vec3 p2 = uP2;
    vec3 p3 = uP3;
        
    vec3 a = 2.0 * p1;
    vec3 b = p2 - p0;
    vec3 c = 2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3;
    vec3 d = -p0 + 3.0 * p1 - 3.0 * p2 + p3;
    
    vec3 pos = 0.5 * (a + (b * t) + (c * t * t) + (d * t * t * t));

    return pos;
}

vec3 calcOffset(vec3 fwd, vec3 ctrl)
{    
    vec3 proj_CtrlFwd = dot(ctrl, fwd) * fwd;
    vec3 offset       = proj_CtrlFwd - ctrl;
    
    return offset;
}

vec4 bendTrackVertexToWorld(vec3 p)
{ 
    vec4 worldPos = matrix_model * vec4(p, 1.0);   
    vec4 pos      = worldPos;    

    if(worldPos.z > 8.0) // only do bending if we are in front of car (8.0 = 0.5 * DM2.SEGMENT_SCALE)
    {      
        vec3  fwd      = normalize(uForward);                          
        float normZ    = (p.z + 50.0) / 100.0; 
        vec3  ctrl     = calcCatmullRom(normZ);                
        vec3  offset   = calcOffset(fwd, ctrl - uOrigin);

        pos.x += offset.x;
        pos.y += offset.y;  
    }
           
    return pos;
}

void main(void)     
{
    vUv0   = aUv0;
    vColor = aColor;    

    vec4 worldPos = bendTrackVertexToWorld(aPosition);         
    vFogColor     = uFogColor;
    vDepth        = clamp(1.0 - (worldPos.z - 20.0) * 0.01, 0.0, 1.0);    
    gl_Position   = matrix_viewProjection * worldPos;
}
