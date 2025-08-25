// Destructuring Objects:

// const teaOrder = {
//     variety: 'oolong',
//     teaName: 'winter sprout',
//     origin: 'taiwan',
//     price: 12.99,
//     hasCaffeine: true,
//     quantity: 3
// };

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

// rewritten as:

// const {price, quantity, teaName, ...others} = teaOrder;

// const {brewTemp = 175} = teaOrder;

// const {teaName: tea} = teaOrder;
// Instead of calling teaName like we had to previously this allows us to call tea to get the same information

// function checkout(tea) {
//     const {quantity, price} = tea;
// }


// Destructuring Arrays:

// const students = [
//     {name: 'Drake', gpa: 4.6},
//     {name: 'Henrietta', gpa: 4.4},
//     {name: 'Tung', gpa: 4.0},
//     {name: 'Harry', gpa: 3.8},
//     {name: 'Ant', gpa: 3.2},
// ];

// const [topStudent, secondBest,,fourth] = students;
// This will skip tung

// const [first, ...losers] = students;


// Destructuring Functions:

// const order = {
//     variety: 'green',
//     teaName: 'silver needle',
//     origin: 'taiwan',
//     price: 12.99,
//     hasCaffeine: true,
//     quantity: 4
// };

// function getTotal({quantity, price}) {
//     return quantity * price;
// }

// const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
// const swimMeetResults = ['Japan', 'France', 'Chile'];

// function awardMedals([gold, silver, bronze]) {
//     return {
//         gold, 
//         silver, 
//         bronze
//     }
// }


// Destructuring Swap:

// let delicious = 'mayo';
// let disgusting = 'whipped cream';

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

// or

// [delicious, disgusting] = [disgusting, delicious];



// Exercise:

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846



// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//     getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple'
//     getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
//     getUserData({}) // 'Your name is undefined and you like green'



// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi



// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // Raindrops on roses
//   console.log(whiskers); // whiskers on kittens
//   console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']



// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10, 30, 20]



// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
// // var a = obj.numbers.a;
// // var b = obj.numbers.b;

// const {
//     numbers: {
//         a,
//         b
//     }
// } = obj

// const {a,b} = obj.numbers



// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// [arr[0], arr[1]] = [arr[1], arr[0]];



// const raceResults = ([first, second, third, ...rest]) => {
//     return {
//         first,
//         second,
//         third,
//         rest
//     }
// } 