export function reverseArray(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
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
