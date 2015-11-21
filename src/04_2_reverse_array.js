export function reverseArray(array) {
  let newArray = [];
  array.forEach(function(value) {
    newArray.unshift(value);
  });
  return newArray;
}

export function reverseArrayInPlace(array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
