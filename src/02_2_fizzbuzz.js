var divisibleBy3 = function(number) {
  return number % 3 === 0;
};

var divisibleBy5 = function(number) {
  return number % 5 === 0;
};

export function fizzbuzz(max = 100) {
  var result = [];

  for (let count = 1; count <= max; count++) {
    let output = '';

    if (divisibleBy3(count)) {
      output += 'Fizz';
    }

    if (divisibleBy5(count)) {
      output += 'Buzz';
    }

    result.push(output || count);
  }

  return result;
}
