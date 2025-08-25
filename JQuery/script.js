// JQuery is a JS library for:
//      Manipulating the DOM
//      Adding event listeners
//      Animating elements
//      Making HTTP requests (AJAX)

// $('h1') will select all h1s but will return them to you 
// as a jQuery object rather than a node list like 
// document.querySelectorAll('h1') would

// $('h1').get() will return an array of all h1s

// $('h1').get(0) will return the first h1 as a regular    
// object

// get/set patterm
//      instead of .getAttribute(attrName) or .setAttribute
//      (attrName) we can now use .attr(attrName) or .attr
//      (attrName, newValue)

// We can clear all inputs on a page using $('input').val
// ('')

// We can also acquire css info using jQuery
//      For example $('a').css('color') will give us the 
//      rgb value for all links on the page

// We can also set css attributres
//      const bigTeal = { color: 'teal', fontSize: 40px}
//      $('a').css(bigTeal);

// $('h1').addClass('highLight') will add our highLight 
// class to all h1 elements

// $('h1').removeClass('highLight') will remove the 
// highLight class from all h1 elements

// $('h1').toggleClass('highLight') will toggle the 
// highLight class on all h1 elements

// const $specialLI = $('li').eq(3) will select the fourth 
// li on the page

// $specialLI.next() will select the following sibbling li

// $specialLI.prev() will select the previous sibling li
// $specialLI.parent() will give the parent element to the 
// li elements

// $('ul').children() will give all children of all ul 
// elements on the page

// $('ul').find('a') will search through all elements 
// under the ul until finding all anchor tags, so in this 
// case it will search under the ul then under all li 
// elements until finding the anchor tags



// We can append elements much easier with jQuery
//      $('ul).append(<li>I AM NEW!!!</li>) will append to 
//      all ul elements

//      Can prepend the same way just use prepend instead 
//      of append

//      $('<h1>') will create a new h1 element

//      $('<h1>HELLO!</h1>').css('color', 'orange').
//      appendTo('p') will append this h1 with declared 
//      css to all paragraphs on the page



// $('img).click(function() {
//      alert('HELLO')
// })
// This will add an event listener to all imgs

// $('img).on('mouseenter', function() {
//      $(this).css('10px solid purple')
// })

// $('img).on('click', function() {
//      $(this).remove();
// })



// $('add-input').on('click', function() {
//      $('form').append('<input type="text"/>');
// })

// $('input').on('focus', function() {
//     $(this).val('BAMBOOZLED')
// })
// This will only work on inputs that exist when the page 
// loads so any additional inputs added will not be 
// effected

// If we write it like this it will effect newly formed 
// inputs
// $('form').on('focus', 'input', function() {
//     $(this).val('BAMBOOZLED')
// })



// Instead of 

// $('img').on('click', function() {
//      $(this).remove();
// })

// we can make it look a little more exciting with 

// $('img').on('click', function() {
//      $(this).fadeOut();
// })

// This actually sets the display to none rather than 
// removing it 

// $('img').on('click', function() {
//      $(this).fadeOut(function() {
//          $(this).remove();
//      });
// })

// This will fade out the image then remove it
// $('img').on('click', function() {
//     $(this).animate({
//         opacity: 0,
//         width: '0px',
//     }, 3000, function() {
//         $(this).remove();
//         })
// })

