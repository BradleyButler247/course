// function greet() {
//     console.log('Hi');
// }

// function diss() {
//     console.log('You are the worst :(');
// }

// let funcs = [greet, diss];

// const myFunc = function add(x,y){
//     return x + y;
// }

// function giveBirth() {
//     console.log('GIVING BIRTH!!!!')
//     return function cry() {
//         return 'WAAAAAAAHHHHH'
//     }
// }

// function makeMulitplyFunc(num) {
//     return function multi(x) {
//         return num * x;
//     }
// }

// const quad = makeMulitplyFunc(4);
// const double = makeMulitplyFunc(2);

// setTimeout - executes code after a specific amount of time

// greet();
// setTimeout(diss, 3000); 
// 3000 = 3 seconds
// setTimeout(function(){
//     diss;
//     diss;
//     diss;
// }, 1000);
// this creates an anonymous function which are unable to be called other than this occurence so it's most useful for functions you will only use once
// greet();

// setInterval - calls code at specified interval
// setInterval(diss, 2000);
// will call diss every 2 seconds

// loupe.com is a useful tool to see what code is doing

// setTimeout(function() {
//     console.log('MEOW');
//     console.log('WOOF');
//     console.log('OINK');
// }, 3000);

// function doTwice(func) {
//     func();
//     func();
// }

// function countDown(num) {
//     let counter = setInterval(function() {
//         if (num > 0) {
//             console.log(num);
//             num--;
//         }
//         if (num === 0) {
//             console.log('DONE!');
//             num--;
//         }
//     }, 1000)
// }

function randomGame() {
    let x = 0;
    let random = setInterval(function() {
        let ranVal = Math.random();
        if (ranVal <= 0.75) {
            x++;
        }
        else {
            console.log(x);
            clearInterval(random);
        }
    }, 1000)
}