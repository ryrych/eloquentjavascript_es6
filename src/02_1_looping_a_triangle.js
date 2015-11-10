export function renderTriangle(count = 8, sign = '#') {
  var result = '';

  for (let line = sign; line.length < count; line += sign) {
    result += line + "\n";
  }

  return result;
}
