export function countBeans(phrase) {
  return countChar(phrase, 'B');
}

export function countChar(phrase, letter) {
  return phrase.split('').filter(l => l === letter).length;
}
