// function makePerson(first,localStorage,age) {
//     return {
//         first: first,
//         last: last,
//         age: age, 
//         isAlive: true
//     };
// }

// can be rewritten as:

function makePerson(first,localStorage,age) {
    return {
        first, 
        last, 
        age,
        isAlive: true
    };
}

// const mathStuff = {
//     x: 200,
//     squared: function(x) {
//         return x ** 2
//     }
// }

const mathStuff = {
    x: 200,
    squared(x) {
        return x ** 2
    },
    doubled(x) {
        return x * 2
    }
}

// Do not use arrow functions in an object function

// const color = {
//     periwinkle: '9c88ff',
//     '9c88ff': 'periwinkle'
// }

function makeColor(name, hex) {
    return {
        [name]: hex,
        [hex]: name
    }
}

const mystery = {
    [6 + 7]: 'thirteen'
}