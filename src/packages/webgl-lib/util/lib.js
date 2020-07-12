export function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }
  
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

export function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }
  
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

export function copyArray(ary) {
  let res = [];
  for(let i = 0; i < ary.length; i++) {
    res.push(ary[i]);
  }
  return res;
}

export function uid(n) {
  n = (!n || n < 20) ? Math.abs(n) : n;
  let letter = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  let letterLen = letter.length;
  let res = "";
  for(let i = 0; i < n; i++) {
    let pickLetterIndex = parseInt(Math.random() * letterLen);
    res += letter[pickLetterIndex];
  }
  return res;
}
