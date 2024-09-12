
const Mission1 = (arr) => {
    return arr.filter(n => n % 2 == 0)
}

const Mission2 = (str) => {
    const wordLength = 4
    return str.split(" ").filter(str => str.length == wordLength).length
}

const Mission3 = (matrix) => {
    return matrix.flat()
}

const Mission5 = (keysArr, valuesArr) => {
    const shortArrLength = keysArr.length < valuesArr.length ? keysArr.length : valuesArr.length
    const newObg = {}
    for (let i = 0; i < shortArrLength; i++) {
        newObg[keysArr[i]] = valuesArr[i]
    }
    return newObg    
}


module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission5
}
