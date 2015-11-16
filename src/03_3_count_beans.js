export function countBeans(phrase) {
  var numberOfOccurence = 0;

  phrase.split('').forEach(function(letter) {
    if (letter === 'B') {
      numberOfOccurence += 1;
    }
  });

  return numberOfOccurence;
}
