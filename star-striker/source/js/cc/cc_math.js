/**
 * Created by jonathan.kernick on 12/04/2017.
 */

// and exstention of native javascript math
// Pi - 180 degs
Math.hPI = 3.14159265359 * 0.5;
// Tau - 360 degs
Math.TAU = 6.28318530718;
// Golden Ratio
Math.PHI = 1.61803398875;

Math.sineLerp = function (value) {
    return (-Math.sin(value * Math.PI) + 1) * 0.5;
};

Math.value = function (start, end, position) {
    return (position - start) / (end - start);
};

//interplates between two values using a value
Math.lerp = function (start, end, value) {
    return (end - start) * value + start;
};

//interpliates between three values quadraticly
Math.quad = function (start, control, end, value) {
    var subA, subB;
    subA = Math.lerp(start, control, value);
    subB = Math.lerp(control, end, value);

    return Math.lerp(subA, subB, value);
};

//interpliates between three values cublicly
Math.cubic = function (start, controlA, controlB, end, value) {
    var subA, subB, subC;
    subA = Math.lerp(start, controlA, value);
    subB = Math.lerp(controlA, controlB, value);
    subC = Math.lerp(controlB, end, value);

    subA = Math.lerp(subA, subB, value);
    subB = Math.lerp(subB, subC, value);

    return Math.lerp(subA, subB, value);
};

Math.clamp = function (min, max, value) {
    return Math.max(min, Math.min(value, max));
};

Math.modo = function (value, length) {
    return ((value % length) + length) % length;
};

Math.cot = function(theta){
    return (Math.tan(theta))?(1/Math.tan(theta)):0;
};