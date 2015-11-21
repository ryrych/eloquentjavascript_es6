export function renderTriangle(count = 8, sign = '#') {
  var result = '';
  var line = sign;
  while (line.length < count) {
    result += line + '\n';
    line += sign;
  }
  return result;
}
