// Maps

// const myMap = new Map()
// myMap.set(7,'seven');

// map does not turn the 7 into a string it is treated as a number

// myMap.get(key) will get the  value associated with key

// const add = (x,y) => x + y;
// const mult = (x,y) => x * y;

// const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// const bandData = [
//     [3, '3 Doors Down'],
//     ['three', 'Three Dog Night'],
//     ['nine', 'Nine Inch Nails'],
//     ['four', 'The Four Seasons'],
//     [41, 'Sum 41']
// ];

// const bandMap = new Map(bandData);

// bandMap.set(182, 'Blink-182') will add the key and value to the map

// bandMap.delete(key) will delete key and value associated to the key

// bandMap.clear() will delete all data in the map

// bandMap.keys() will interate of the keys in a map

// [...bandMap.keys()] will create an array of all key values in a map

// bandMap.forEach((val, key) => {
//     console.log(key + ' => ' + val);
// })

// for (let [key, value] of bandMap) {
//     console.log(key, ' = ', value);
// }

// Sets

// const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

// bannedHashTags.add('bestlife');

// bannedHashTags.has(value) will return a boolean of whether or not the value is found

// function filterHashTags(tags) {
//     const bannedHashTags = new Set([
//         'nofilter', 
//         'justsaying', 
//         'winning', 
//         'yolo'
//     ]);
//     return tags.filter((tags) => !bannedHashTags.has(tag));
// }

// const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];

// filterHashTags(susansTags) will return all tags not found in bannedHashTags

// const ages = [45,42,21,23,24,98,2,4,4,12,3,12,45];
// newSet(ages);

// this will return the ages with not duplicates

// [...new Set(ages)] this will return an array of ages with no duplicates

new Set([1,1,2,2,3,4]); 
// {1, 2, 3, 4}

[...new Set("referee")].join("") 
// 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 
// {[1,2,3] => true, [1,2,3] => false}

const hasDuplicate = (arr) => {
    let set = [...new Set(arr)]
    if (arr.length === set.length) {
        return false;
    } else {
        return true;
    }
}

const vowel = (letter) => {
    return 'aeiou'.includes(letter);
}

const vowelCount = (str) => {
    const vowelMap = new Map();
    for(let char of str) {
      let lowerChar = char.toLowerCase()
      if(vowel(lowerChar)){
        if(vowelMap.has(lowerChar)) {
          vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
        } else {
          vowelMap.set(lowerChar, 1);
        }
      }
    }
    return vowelMap;
  }