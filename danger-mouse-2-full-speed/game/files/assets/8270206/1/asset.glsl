// --------------------------
// Speed Lines
// --------------------------


attribute vec3 vertex_position;
attribute vec3 aNormal;
attribute vec2 aUv0;
attribute vec4 aColor;

varying vec4  vNormal;
varying vec4  vColor;
varying vec2  vUv0;
varying float vDepth;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

void main(void) 
{
    vColor   = aColor;
    vUv0     = aUv0;
    vec4 pos = vec4(vertex_position, 1.0);    
    
    gl_Position = matrix_viewProjection * matrix_model * pos;
}
