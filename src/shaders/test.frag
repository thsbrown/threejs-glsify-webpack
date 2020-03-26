#pragma glslify:

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#define PI 3.14159265359

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 uv, float pct){
  return  smoothstep( pct-0.02, pct, uv.y) - smoothstep( pct, pct+0.02, uv.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy/u_resolution;
  float amplitude = 4.0+sin(u_time);
  float ySin = sin(uv.x*PI*2.0+u_time)/amplitude+abs(sin(uv.x));

  float blackAndWhiteColor = step(ySin,uv.y);
  float upperColor = abs(sin(u_time));
  gl_FragColor = vec4(blackAndWhiteColor * vec3(0.654, 0.964, 0.964),1.0);
}

