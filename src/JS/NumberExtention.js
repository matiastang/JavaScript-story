const { ModuleKind } = require("typescript")

Number.prototype.numberMathRound = function(len = 0) {
    let lenNumber = 10 ** len
    let result = Math.round(this*lenNumber)/lenNumber
    return result
}

Number.prototype.numberFloor = function(len = 0) {
    let lenNumber = 10 ** len
    let result = Math.floor(this*lenNumber)/lenNumber
    return result
}

Number.prototype.numberCeil = function(len = 0) {
    let lenNumber = 10 ** len
    let result = Math.ceil(this*lenNumber)/lenNumber
    return result
}

Number.prototype.numberInt = function(len = 0) {
    let lenNumber = 10 ** len
    let result = parseInt(this*lenNumber)/lenNumber
    return result
}

Number.prototype.numberToFixed = function(len = 0) {
    return this.toFixed(len)
}

Number.prototype.numberMatch = function(len = 0) {
    let regExp = RegExp(`^\d+(?=\.\d{0,${len}})?`)
    let one = this.toString().match(regExp)
    console.log(one)
    return Number(one)
}

module.exports = {

}