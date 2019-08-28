// -----------------------------------
// Skyplane Vertex Shader
// -----------------------------------

uniform vec4 uFogColor;
uniform vec3 uParallax;

attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec2 aUv0;
attribute vec4 aColor;

varying vec4 vNormal;
varying vec4 vColor;
varying vec2 vUv0;
varying vec4 vFogColor;
varying vec3 vBendOffset;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

void main(void)     
{
    vec4 worldPos = matrix_model * vec4(aPosition, 1.0);  
    
    vBendOffset = uParallax;
    vUv0        = aUv0;
    vColor      = aColor;          
    vFogColor   = uFogColor;    
    gl_Position = matrix_viewProjection * worldPos;
}
