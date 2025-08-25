// Document Object Model

// console.dir(document) in console will pull up document

// When using document.getElementById('content') case of element does matter

// document.getElementsByTagName('img') will provide an array of documents for each <img> on the page

// document.getElementsByTagName('p') will provide an array of documents for each <p> on the page

// document.getElementsByClassName('section-title') will provide an array of all elements with the class of section-title

// document.getElementsByClassName('section-title country') will return an array of all elements with both classes section-title & country

// document.querySelector('#submit) returns the first element with id of submit

// document.querySelector('h2') returns the first h2

// document.querySelector('.section-title') will return the first element with the class of section-title 

// document.querySelectorAll('input') returns a node list of all input elements

// document.querySelectorAll('body > hr') returns a node list of all hr elements that are a direct descendent of the body, meaning they are not nested in another element

// document.querySelectorAll(':not(p)') will return a node list containing everything that is not a p element

// // document.querySelectorAll('h2:nth-of-type(1)') will return a node list containing the first h2 element on the page

// ------------------DOM Manipulation------------------

// Create variable h1 = document.querySelector('h1');

// h1.innerText will return text in the selected h1

// h1.innerText = 'GO AWAY!' will reassign the text within the selected h1 to 'GO AWAY!' 

// Using innerText will return the text that is displayed on the screen while textContent will return all of the text inside the element including CSS and <script> tags

// document.querySelector('p').innerHTML will return all content, including HTML tags, contained within the first <p> tag

// Since we are unable to use h3.style.color to change all h3s at once we have to do it the following way

// const allH3s = document.querySelectorAll('h3');

// for (let i = 0; i < allH3s.length; i++) {
//     allH3s[i].style.color = 'pink'
// }

// const allH2s = document.getElementsByTagName('h2');

// for (let h2 of allH2s) {
//     h2.style.color = 'purple';
//     h2.style.fontSize = '80px';
// }

// const imgs = document.querySelectorAll('img');

// for (let img of imgs) {
//     img.style.width = '100px';
//     img.style.border = '2px solid green';
// }

