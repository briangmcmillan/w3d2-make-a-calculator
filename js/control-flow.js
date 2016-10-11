// whatsUp()
//
// var name = 'Brian'
// console.log(name)
// console.log('Whats\'s Up?')
//
// function whatsUp() {
//     var name = 'Christy'
//     function sayHello() {
//
//     }
//     console.log('What is up?')
// }

// Core Functions
// console.log()
// document.write()
// alert()



// var mph1 = 10;
// var hours1 = 5;
// var distance1 = mph1 * hours1;
//
// var mph2 = 80;
// var hours2 = 2;
// var distance2 = mph2 * hours2;
//
// var mph3 = 55;
// var hours3 = .75;
// var distance3 = mph3 * hours3;

//console.log(distance1, distance2, distance3);




// function distance(mph, hours) {
//     if (hours === undefined) {
//         hours = 10
// }
//
//     if (mph > 65) {
//         //console.log('Warning: Too Fast!')
//         return 'Warning: Too Fast! No way you will get distance from us.'
//     }
//
//     return mph * hours //end of function
//     //console.log('Nothing works after a return')
// }

// console.log(distance(66))



// var distanceTraveled = distance(55, 2)
// distanceTraveled = distanceTraveled + distance(80, 16)
// distanceTraveled = distanceTraveled + distance(25, .25)
//
// console.log(distanceTraveled)







var movie = 'Forest Gump'
// var year = 1995

if (movie ==='Forest Gump') {
    console.log('Life is like a box of chocolates.')
}
else if (movie === 'Groundhog Day') {
    console.log('Repeat')
}
else if (movie === 'Star Wars') {
    console.log('Luke, I am your father.')
}
else {
    console.log(movie + ' is awesome!')
}





// switch (movie) {
//     case 'Forest Gump':
//         console.log('Buba-gump Shrimp')
//         break;
//     case 'Groundhog Day':
//         console.log('Just put your little hand in mine.')
//         break;
//     case 'Star Wars':
//         console.log('Use the force!')
//         break;
//     default:
//         console.log(movie + ' is worth seeing!')
// }




// console.log(6 % 3)

// if (50 % 5 === 0) {
//     console.log('Yes it is divisable by five.')
// }




// var list = ['Sally', 'Tom', 'Joel', 'Kyle', 'Troy', 'Manny', 'Sam', 'Whitney', 'Jeff', 'Brian', 'Young Mi', 'Keith', 'Charlie']
//
// for (var i = 0; i < list.length; i ++) {
//     console.log(list[i])
// }






//
// for (var i = 0; i < 100; i++) {
//     console.log('<div id="Row' + i + '" class="row"><div class="col-sm-12"></div></div>')
// }
//
// var total = 0
//
// for (var i = 0; i < 300; i++) {
//     total -= i
//     // document.querySelector('.container').innerHTML += `<button class="btn btn-primary btn-lg">Button${i}</button>`
// }
// //console.log(total)
//
// function sayHello(greeting) {
//     return greeting
// }
// console.assert(sayHello('Hello') === 'Hello')
