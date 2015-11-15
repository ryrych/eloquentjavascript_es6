var compileModules = require('broccoli-babel-transpiler');
var pickFiles      = require('broccoli-funnel');
var concat         = require('broccoli-concat');
var mergeTrees     = require('broccoli-merge-trees');
var path           = require('path');

var examples = pickFiles('src', {
  srcDir: '/',
  include: ['**/*.js'],
  destDir: '/examples'
});

var tests = pickFiles('test', {
  srcDir: '/',
  include: ['**/*.js'],
  destDir: '/tests'
});

var compiledExamples  = compileModules(examples, {
  browserPolyfill: true,
  modules: 'umd',
  moduleIds: true
});

var compiledTests  = compileModules(tests, {
  browserPolyfill: true,
  modules: 'umd',
  moduleIds: true
});

// Concatenate all the JS files into a single file
var examplesConcat = concat(compiledExamples, {
  inputFiles: ['**/*.js'],
  outputFile: '/examples.js'
});

var testsConcat = concat(compiledTests, {
  inputFiles: ['**/*.js'],
  outputFile: '/tests.js'
});

var cpToTest = function(absPath) {
  var dir = path.dirname(absPath);
  var filename = path.basename(absPath);
  return pickFiles(dir, {
    srcDir: '/',
    files: [filename],
    destDir: '/tests'
  });
}

var testIndex = cpToTest('test/index.html');
var loader = cpToTest('node_modules/loader.js/loader.js');

// Grab all our trees and
// export them as a single and final tree
module.exports = mergeTrees([
  compiledExamples,
  compiledTests,
  testIndex,
  examplesConcat,
  testsConcat,
  loader
]);
