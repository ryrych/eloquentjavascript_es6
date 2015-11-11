const size          = 8;
const whiteField    = '□';
const blackField    = '■';
const lineSeparator = '\n';
var output          = '';

var isOdd = function(number) {
  return number % 2 === 0;
};

export function renderChess() {
  for (let y = 1; y <= size; y++) {
    for (let x = 1; x <= size; x++) {
      if (isOdd(x + y)) {
        output += whiteField;
      } else {
        output += blackField;
      }
    }
    output += lineSeparator;
  }
  return output;
}
