function analyzeArray(array) {
    object = {
        average: array.reduce((a, b) => a + b, 0) / array.length,
        min: array.sort()[0],
        max: array.sort()[array.length-1],
        length: array.length,
    }
    return object
}



module.exports = analyzeArray