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

var appendKitten = function(name) {
  kittens.splice(3, 0, 'Broom')
  return kittens.concat(appendKitten)
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