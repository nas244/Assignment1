precision mediump float;

uniform ivec2 viewport;
uniform float rotation;

attribute vec3 position;
uniform vec3 color;

varying vec3 fragColor;

const vec3 offset = vec3(0., 0., -3.);
const float f = 1.0 / tan(radians(45.0) / 2.0);
const float angle = 0.;

mat4 rotX(float angle)
{
    angle = radians(angle);
    return mat4(1, 0., 0., 0.,
                0., cos(angle), sin(angle), 0.,
                0., -sin(angle), cos(angle), 0.,
                0., 0., 0., 1.);
}

mat4 rotY(float angle)
{
    angle = radians(angle);
    return mat4(cos(angle), 0., -sin(angle), 0.,
                0., 1., 0., 0.,
                sin(angle), 0., cos(angle), 0.,
                0., 0., 0., 1.);
}

mat4 rotZ(float angle)
{
    angle = radians(angle);
    return mat4(cos(angle), sin(angle), 0., 0.,
                -sin(angle), cos(angle), 0., 0.,
                0., 0., 1., 0.,
                0., 0., 0., 1.);
}

mat4 trans(vec3 dir)
{
    return mat4(1., 0., 0., 0.,
                0., 1., 0., 0.,
                0., 0., 1, 0.,
                vec4(dir, 1.));
}

mat4 proj()
{
    // Create the projection matrix; remember, GL matrices column order
    float aspect = float(viewport.x) / float(viewport.y);
    float far = 100.0, near = 0.1;
    
    return mat4(f / aspect,     0.,                               0.,      0.,
                         0.,     f,                               0.,      0.,
                         0.,     0.,     (far + near) / (near - far),     -1.,
                         0.,     0., 2.0 * far * near / (near - far),      0.);
}

void main(void)
{
    mat4 modelviewMat = trans(offset) * rotY(angle);
    gl_Position = proj() * modelviewMat * vec4(position, 1.0);
    fragColor = color;
}
