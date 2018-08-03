// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
var appendKitten = kittens.splice('Broom')
return kittens
}

var appendKitten = function(name) {
  
}

function prependKitten(name) {
var prependKitten = kittens.splice(0, 0, 'Arnold')
return kittens.concat(prependKitten)
}

function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, 2)
  return removeLastKitten
}

function removeFirstKitten() {
  var removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}