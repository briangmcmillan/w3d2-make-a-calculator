function FizzBuzz(n) {
    var fizzBuzz = '';
    for (var i = 1; i <=n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzz += 'fizzbuzz';
        }
        else if (i % 5 === 0) {
            fizzBuzz += 'buzz'
        }
        else if (i % 3 === 0) {
            fizzBuzz += 'fizz'
        }
        else {
            fizzBuzz += '.';
        }
    }
    return fizzBuzz
    // console.log(fizzBuzz)
}
// FizzBuzz(10)

console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
