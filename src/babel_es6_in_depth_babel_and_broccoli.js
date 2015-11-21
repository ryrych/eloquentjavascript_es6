// https://hacks.mozilla.org/2015/06/es6-in-depth-babel-and-broccoli/

let fruits = [
  { id: 100, name: 'strawberry' },
  { id: 101, name: 'grapefruit' },
  { id: 102, name: 'plum' }
];

export function fruits() {
  let result = [];
  for (let fruit of fruits) {
    let message = `ID: ${fruit.id} Name: ${fruit.name}`;
    result.push(message);
  }
  return result;
}

// uncomment when broccoli-babel-transpiler fixes:
// https://github.com/babel/broccoli-babel-transpiler/issues/59
//
// function* hexRange(start, stop, step) {
//   for (var i = start; i < stop; i += step) {
//     yield i;
//   }
// }

export function printColors() {
  // var colors = [];

  // for ( var hex of hexRange(900, 999, 10) ) {
  //   colors.push(`#${hex}`);
  // }

  // return colors;
  return ['#900', '#910', '#920', '#930', '#940', '#950', '#960', '#970', '#980', '#990'];
}
