//Start Add Function//
function add (x, y) {
    var answer = x + y
    return answer
}
// console.log(add(6,9))
//End Add Function//

//Start Subract Function//
function subtract (x, y) {
    var answer = x - y
    return answer
}
// console.log(subtract(6,3))
//End Subtract Function//

//Start Divide Function//
function divide (x, y) {
    var answer = x / y
    return answer
}
// console.log(divide(6,3))
//End Divide Function//

//Start Multiple Function//
function multiply (x, y) {
    var answer = x * y
    return answer
}
// console.log(multiply(6,3))
//End Multiple Function//

//Start Modular Function//
function modular (x, y) {
    var answer = x % y
    return answer
}
// console.log(modular(47,1))
//End Modular Function//

//Start Increment Function//
// function Increment (x, ++) {
//     var answer = x++
//     return answer
// }
// console.log(Increment(5))
//End Increment Function//

//Start Decrement Function//
// function Decrement (x, x--) {
//     var answer = x
//     return answer
// }
// console.log(Decrement(47,1))
//End Decrement Function//

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
answer = modular(answer, 1)
console.assert(answer === 0)


// Add Button Start//
document.getElementById('addButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = add(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
//Add Button End//

//Subtract Button Start//
document.getElementById('subtractButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = subtract(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
//Subtract Button End//

//Multiply Button Start//
document.getElementById('multiplyButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = multiply(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
//Multiply Button End//

//Divide Button Start//
document.getElementById('divideButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = divide(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
// Divide Button End//

//Modular Button Start//
document.getElementById('modularButton').addEventListener('click', function() {
    var firstValue = Number(document.getElementById('firstValue').value)
    var secondValue = Number(document.getElementById('secondValue').value)

    var answer = modular(firstValue, secondValue)

    document.getElementById('firstValue').value = answer
})
//Modular Button End//
