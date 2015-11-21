// https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

var result = [];

var isCBA = function(count) {
  return count <= 2;
}

var appendString = function(string) {
  result.push(string);
}

var knock = function() {
  appendString('puk');
}

var shout = function() {
  appendString('CBA! Jest pan aresztowany!');
}

var getResult = function() {
  return result.join(', ');
}

var resetResult = function() {
  result = [];
}

export function countdown(count) {
  var CBAVisit = isCBA(count);
  resetResult();

  while (count --> 0) knock();
  if (CBAVisit) {
    shout();
  }

  return getResult();
}
