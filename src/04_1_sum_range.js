export function sum(range) {
  return range.reduce((a, b) => a + b, 0);
}

export function range(start, end, step = 1) {
  var rangeArray = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}
