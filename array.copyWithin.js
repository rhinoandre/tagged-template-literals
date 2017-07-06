console.log('Array.copyWithin(target*, start, end)')
var array = ['a', 'b', 'c', 'd', 'e']

console.log('\nGiven Parameters: 2, 0, 2: ', array.copyWithin(2, 0, 2))
array = ['a', 'b', 'c', 'd', 'e']
console.log('Given Parameters: 2: ', array.copyWithin(2))
array = ['a', 'b', 'c', 'd', 'e']
console.log('Given Parameters: -2: ', array.copyWithin(-2))