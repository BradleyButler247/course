function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('Invalid income!')
    }
    if (income > 30000) {
        return income * 0.25;
    } else {
        return income * 0.15;
    }
}
  
console.log(calculateTaxes(500));

function removeDupes(values) {
    const arr = [...new Set(values)];
    if (typeof values === 'string')
        return arr.join('');
    return arr;
}

function remove(arr, val) {
    return arr.filter((el) => {
        return el !== val
    })
}

let usernames = [];
let input = document.getElementById('username');

function submitForm() {
    usernames.push(input.value);
}


// Unit tests
    // Simple & cheap
    // Work well with pure functions that do not have side effects
    // Example: verify single function returns an expected value based on an argument

// Integration tests
    // More complex and costly to maintain
    // Used to test impure functions with side effects
    // Example: verify the dependencie between functions are working together to produce an expected value


function impureAppend(arr, val) {
    arr.push(val);
}
    
function pureAppend(arr, val) {
    return [...arr, val];
}