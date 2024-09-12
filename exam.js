
const Mission1 = (arr) => {
    return arr.filter(n => n % 2 == 0)
}

const Mission2 = (str) => {
    const wordLength = 4
    let count = 0
    const strArr = str.split(" ").filter(str => str.length == wordLength)
    return strArr.length
}


