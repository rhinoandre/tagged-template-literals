var enki = 'Enki'
var language = 'javascript'
var version = 'ES2015'

console.log('SIMPLE USE OF TEMPLATE')
console.log(`The ${enki} courses teaches you a lot of ${language} including what are in the verion ${version}`)

console.log('\n\nTEST WITH LITERALS AND WITHOUT REST OPERATOR (...)')
function literalsOne (literals, var1, var2, var3) {
    console.log('literals: ', literals)
    console.log('variables: ', [var1, var2, var3].join(', '))
}

literalsOne `The ${enki} courses teaches you a lot of ${language} including what are in the verion ${version}`

console.log('\n\nTEST WITH LITERALS AND REST OPERATOR (...)')
function literalsWithRestOperator (literals, ...variables) {
    console.log('literals: ', literals)
    console.log('variables: ', variables.join(', '))
}

literalsWithRestOperator `The ${enki} courses teaches you a lot of ${language} including what are in the verion ${version}`
