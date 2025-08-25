// Arrow functions

    // Better syntax for writing function expressions
        // For example:
            // const add = function(x, y) {
            //     return x + y;
            // };

            // Can be written as:

            // const add = (x, y) => {
            //     return x + y;
            // };

            // [2,3,6,78,99,104,23].reduce(function(max, curNum) {
            //     return Math.max(max, curNum);
            // })

            // [2,3,6,78,99,104,23].reduce(max, curNum) => {
            //     return Math.max(max, curNum);
            // }

            // Can be saved as a variable but the function itself cannot be named

            // If function has just one perameter we can do the following

            // [1,2,3,4,5].forEach((n) => {
            //     console.log(n * 10);
            // });

            // can be rewritten as:

            // [1,2,3,4,5].forEach(n => {
            //     console.log(n * 10);
            // });

            // Arrow function with no parameters:

            // const greet = () => {
            //     console.log('HELLO')
            // };

            // Arrow functions have an implicite return if you leave off curly braces

            // let nums = [1,2,3];
            // let arrSquared = nums.map(n => n ** 2);

            // [1,2,3,4,5,6].filter((num) => num % 2 === 0);

            // This will return all even numbers

            // const doubles = (n) => num * 2

            // This will return doubled num

            // Only works for single expressions

            // [1,2,3,4,5,6,7,8].map((n) => {
            //     if (n % 2 === 0) {
            //         return 'even'
            //     }
            //     return 'odd'
            // })

            // since we have an if statement and it is on multiple lines we cannot use implicite return but we can use implicit return if we write the statement using a ternary operator

            // [1,2,3,4,5,6,7,8].map((n) => n % 2 === 0 ? 'even' : 'odd');

            // const dailyRainTotals = [[1.2,0.35,2.2], 
            //                         [1.7,0.6,0.1], 
            //                         [2.5,0.9,1.5]];

            // If we want to return an array with the sum of each sub array

            // dailyRainTotals.map((hourlyRainTotals) => {
            //     return hourlyRainTotals.reduce((sum, inchesOfRain) => {
            //         return sum + inchesOfRain;
            //     })
            // })

            // Rewritten as:

            // dailyRainTotals.map((hourlyRainTotals) => 
            // hourlyRainTotals.reduce((sum, inchesOfRain) => {sum + inchesOfRain}
            // ));

            // If you want to use an implicit return it needs to take up one line or be wrapped in parentheses 

            // Don't use arrow functions with "this" command

            // babel will take modern js and turn it into browser complatable code




// Rest-Spread

// rest (...)
    // rest operator is the same as the spread operator, it depends on the context they're in

    // when ... appears in a function it is a rest operator

    // it is the last parameter defined in a function and will evaluate to an array of all additional arguments passed in

    // function sum(...nums) {
    //     nums.reduce((sum,n) => sum + n);
    // }

    // this will convert the nums provided when the function is call into an array then reduce it into the sum

    // const sumAll = (...vals) => {
    //     if (!vals.length) return undefined;
    //     return values.reduce((sum,n) => sum + n);
    // };

    // const makeFamily = (parent1,parent2, ...kids) => ({
    //     parents: [parent1,parent2],
    //     children: kids.length ? kids : 'None yet'
    // });

    // const filterByType = (type, ...vals) => {
    //     return vals.filter(v => typeof v === type);
    // }




// spread(...)
    // spreads out arrays, strings or objects into individual elements

    // const nums = [4,5,88,123,0.92,34];

    // if we want to use the Math.max function we cannot input an array, we need to input each number as an individual argument

    // Math.max(nums) ---does NOT work---
    // Math.max(4,5,88,123,0.92,34) ---does work---
    // Math.max(...nums) ---this will also work---

    // const filterByType = (type, ...vals) => {
    //     return vals.filter(v => typeof v === type);
    // }

    // const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined];

    // filterByType('string', things) ---does NOT work---

    // filterByType('string', ...things) ---does work---

    // spread wil also spread the characters of a string

    // const palette = ['lavendar berry', 'sunflower yellow', 'orchid orange'];

    // const paletteCopy = palette; 
    
    // creating a copy like this will not work because manipulating either palette or palette copy will effect the other array as well

    // const paletteCopy = palette.slice();

    // const paletteCopy = [...palette];

    // this will behave the same as slice which creates a true copy that will not change the original when manipulated

    // const paletteCopy = ['sky blue', ...palette, 'grass green'];

    // This creates a copy, and adds the new values to the copy

    // const tea = {
    //     type: 'oolong',
    //     name: 'winter sprout',
    //     origin: 'taiwan'
    // };

    // const teaTin = { ...tea, price: '$29.99'};

    // This will create a copy of the tea object and add a new key-value pair

    // Can spread an array into an object which uses the array index as the key

    // shoppingCart = [
    //     {
    //         name: 'honey orchid',
    //         quantity: 2,
    //         price: 13.50
    //     },
    //     {
    //         name: 'african solstice',
    //         quantity: 4,
    //         price: 25.99
    //     }
    // ];

    // Cannot use spread to copy this object, it only works on shallow objects

