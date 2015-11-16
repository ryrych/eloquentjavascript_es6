export function countBeans(phrase) {
  return countChar(phrase, 'B');
}

export function countChar(phrase, letter) {
  var numberOfOccurence = 0;

  phrase.split('').forEach(function(l) {
    if (l === letter) {
      numberOfOccurence += 1;
    }
  });

  return numberOfOccurence;
}
