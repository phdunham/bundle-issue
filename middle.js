const getEdgeFunction = (edgeFunctionPath) => {
    if (edgeFunctionPath === 'edge1') {
        return require('./bundle.edge1.js')
    }
    if (edgeFunctionPath === 'edge2') {
        return require('./bundle.edge2.js')
    }
}
module.exports = getEdgeFunction
