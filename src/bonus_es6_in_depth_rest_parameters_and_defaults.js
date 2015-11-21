// https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-default

// export function containsAll(haystack) {
//   for (var i = 1; i < arguments.length; i++) {
//     var needle = arguments[i];
//     if (haystack.indexOf(needle) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

export function containsAll(haystack, ...needles) {
  for (var needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

export function animalSentence(animals2='tigers', animals3='bears') {
  return `Lions and ${animals2} and ${animals3}! Oh my!`;
}

export function animalSentenceFancy(animals2='tigers', animals3 = (animals2 === 'bears') ? 'sealions' : 'bears') {
  return `Lions and ${animals2} and ${animals3}! Oh my!`;
}
