#ifdef GL_ES
precision highp float;
#endif

vec4 red() {
    return vec4(1, 0, 0, 1);
}

vec4 blue() {
    return vec4(0, 0, 1, 1);
}

vec4 green() {
    return vec4(0, 1, 0, 1);
}

void main() {
    gl_FragColor = green();
}
