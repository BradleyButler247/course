// function holler() {
//     console.log('Hey You!');
// }

// const whisper = function() {
//     console.log('psst I have a secret');
// }

// function add(x,y) {
//     return x + y;
// }

// function subtract(x,y) {
//     return x - y;
// }

// function multiply(x,y) {
//     return x * y;
// }

// function divide(x,y) {
//     return x / y;
// }

// function power(x,y) {
//     return x ** y;
// }

// const mathFuncs = [add, subtract, multiply, divide, power];

// // setTimeout(whisper, 4000);

// function doMath(a,b, mathFuncs){
//     return mathFuncs(a,b);
// };

// doMath(3,4, function(a,b) {
//     console.log(a ** b);
// });

// function doAllMath(a,b, mathFuncs) {
//     for (let func of mathFuncs)
//         console.log(func(a,b));
// };

// const colors = ['teal', 'cyan', 'peach', 'purple']

// colors.forEach(function(val) {
//     console.log(val.toUpperCase());
// });

// // Or you can call an existing function

// function yell(val) {
//     const caps = val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`)
// };

// colors.forEach(yell);

// const prices = [30.99, 19.99, 2.50, 99.00];

// let toal = 0;

// prices.forEach(function(price) {
//     total += price;
// });

// console.log(total);

// // Could also be written using for...of

// let total = 0;

// for (let price of prices) {
//     total += price;
// }

// console.log(total);

// // let arr = [4,5,6];

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++){
//     callback(arr[i], i, i, arr);
//     }
// }

// forEach(colors, function() {
//     console.log(color.toUpperCase(), 'at index of::', i);
// });

// // Or 

// colors.forEach(function(color, i) {
//     console.log(color.toUpperCase(), 'at index of::', i);
// });

// const numbers = [21,37,64,99,142];
// const negatives = numbers.map(function(num) {
//     return num * -1;
// });

// // Returns an array of the values after being passed through the function

// const todo = [
//     {
//         id: 1,
//         text: 'walk the dog',
//         priority: 'high'
//     },
//     {
//         id: 2,
//         text: 'walk the chickens',
//         priority: 'medium'
//     },
//     {
//         id: 3,
//         text: 'walk the cats',
//         priority: 'low'
//     },
//     {
//         id: 4,
//         text: 'put out the fire in my garage',
//         priority: 'very high'
//     }
// ];

// todos.map(function(todo) {
//     return todo.text;
// });





// const links = Array.from(document.querySelectorAll('a'));
// const urls = links.map(function(a) {
//     return a.href;
// });

// function myMap(arr, callback) {
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const val = callback(arr[i], i, arr);
//         mappedArray.push(val);
//     }
//     return mappedArray;
// }

// const priorityMap = myMap(todo, function(todo) {
//     return todo.priority;
// });

// const repeatedStrings = myMap(['a','b','c','d','e',], function(str, idx) {
//     str.repeat(idx);
// });





// const words = [
// 	'immunoelectrophoretically',
// 	'rotavator',
// 	'tsktsk',
// 	'psychophysicotherapeutics',
// 	'squirrelled',
// 	'crypt',
// 	'uncopyrightable',
// 	'cysts',
// 	'pseudopseudohypoparathyroidism',
// 	'unimaginatively'
// ];

// const longWords = words.filter(function(word) {
//     return word.length >= 20;
// });

// const ucWords = words.filter(function(w) {
//     return w[0] === 'u' || w[0] === 'c';
// });

// const containsVowel = function(word) {
//     for (let char of word) {
//         if (isVowel(char)) {
//             return true;
//         }
//         return false;
//     }
// };

// const isVowel = function(char) {
//     return 'aeiou'.indexOf(char) !== -1;
// };

// const hasVowels = words.filter(containsVowel);

// const noVowels = words.filter(function(word) {
//     return !containsVowel(word);
// });

// const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

// const checked = Array.from(allCheckboxes).filter(function(box){
//     return box.checked;
// });

// const completedItems = checked.map(function(checkbox) {
//     return checkbox.parentElement.innerText;
// });

// function extractCompletedTodos() {
//     const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

//     return Array.from(allCheckboxes)
//         .filter(function(box){
//             return box.checked
//         })
//         .map(function(checkbox) {
//             return checkbox.parentElement.innerText;
//         });
// }

// function myFilter(arr, callback) {
//     const filteredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             filteredArray.push(arr[i])
//         }
//     } 
//     return filteredArray;
// } 
// const shawties = myFilter(words, function(word) {
//     return word.length <= 10;
// });

// const everyOtherWord = myFilter(words, function(word, i) {
//     return i % 2 === 0;
// });


// words.some(function(word) {
//     return word.length > 25;
// })

// words.some(function(word) {
//     return word.indexOf('thyroid') !== -1;
// })

// words.every(function(w) {
//     return w.length >= 5;
// })

// function allStrings(arr) {
//     return arr.every(function(el) {
//         typeof el ==='string'
//     })
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(e) {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const allChecked = Array.from(checkboxes).every(function(checkbox) {
//         return checkbox.checked;
//     });
//     if (!allChecked) alert('PLEASE AGREE TO EVERYTHING!');
// });

// function mySome(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr(i), i, arr)) {
//             return true;
//         }
//     }
//     return false;
// }

// function myEvery(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr(i), i, arr)) {
//             return false;
//         }
//     }
//     return true;
// }

// const scores = [
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// 	55,
// 	59,
// 	69,
// 	73,
// 	73,
// 	75,
// 	79,
// 	83,
// 	88,
// 	91,
// 	93
// ];

// scores.find(function(score){
//     return score > 75;
// });

// // finds the first value that meets the criteria

// scores.find(function(score){
//     return score !== 0 && score % 2 === 0;
// });

// // filter acts as a find all while find finds the first

// const firstEven = scores.findIndex(function(score){
//     return score !== 0 && score % 2 === 0;
// });

// function partition(arr,pivot) {
//     const pivotIdx = arr.findIndex(function(el) {
//         return el > pivot;
//     })
//     const left = arr.slice(0,pivotIdx);    
//     const right = arr.slice(pivotIdx); 
//     return [left, right];   
// }

// function myFind(arr,callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i],i,arr) === true) return arr[i];
//     }
// }

// function myFindIndex(arr,callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i],i,arr) === true) return i;
//     }
//     return -1;
// }


const nums = [20,30,50,12,-2,45,99,19,22,85];

const words = ['hello','I','love','you'];

words.reduce(function(accum, nextWord) {
	return accum + nextWord;
})



const midtermScores = [70,88,93,94,64,62,56];
const finalScores = [92,93,76,77,78,59,61];
// const minScore = midtermScores.reduce(function(min,nextScore) {
// 	if (nextScore < min) {
// 		return nextScore;
// 	}
// 	return min;
// })


// Ternary operator 
// condition ? exprIfTrue : exprIfFalse

const minMidScore = midtermScores.reduce(function(min,nextScore) {
	return nextScore < min ? nextScore : min;
});

const maxScore = midtermScores.reduce(function(max,nextScore) {
	return nextScore > max ? nextScore : max;
});

const minFinScore = finalScores.reduce(function(min,nextScore) {
	return nextScore < min ? nextScore : min;
});

const minOverallScore = finalScores.reduce(function(min,nextScore) {
	return nextScore < min ? nextScore : min;
}, minMidScore);

// Compares both midterm scores and final scores

