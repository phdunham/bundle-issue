const white = require('chalk').white

const inspect = require('util').inspect
const getEdgeFunction = require('./middle.js')
console.log('getEdgeFunction:', inspect(getEdgeFunction))
console.log('getEdgeFunction:', getEdgeFunction.toString())

const edgeFunction1 = getEdgeFunction('edge1')
console.log('edgeFunction1:', inspect(edgeFunction1))
console.log('edgeFunction1:', edgeFunction1.toString())

const edgeFunction2 = getEdgeFunction('edge2')
console.log('edgeFunction2:', inspect(edgeFunction2))
console.log('edgeFunction2:', edgeFunction2.toString())

console.log(white('Executing edgeFunction1...'))
edgeFunction1.bind(globalThis)()

console.log(white('Executing edgeFunction2...'))
edgeFunction2.bind(globalThis)()
console.log('Done')