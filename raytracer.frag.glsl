precision mediump float;
varying vec3 fragColor;
uniform bool outline;
void main() {
  if(!outline)
  {
    gl_FragColor = vec4(fragColor,1.);
  }
  else
  {
    gl_FragColor = vec4(vec3(0.), 1.);
  }
}
