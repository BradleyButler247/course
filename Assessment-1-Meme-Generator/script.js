// Upload image using URL
let btn = document.getElementById('create');

btn.addEventListener('click', function() {
// Create div for img
    let div = document.createElement('div');
    div.classList.add('meme')
    finished.prepend(div);

// Create div & display img from given URL
    let url = document.getElementById('url').value;
    let img = document.createElement('img');
    img.src = url;
    div.append(img);

// Add remove button to each image
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove')
    div.append(removeBtn);

// Create div and add text for image
    let topDiv = document.createElement('div');
    let bottomDiv = document.createElement('div');
    let topText = document.getElementById("top").value;
    let bottomText = document.getElementById("bottom").value;
    topDiv.classList.add('top-text');
    bottomDiv.classList.add('bottom-text');
    topDiv.append(topText);
    bottomDiv.append(bottomText);
    div.append(topDiv);
    div.append(bottomDiv);


// Clear text fields
    document.getElementById("top").value = "";
    document.getElementById("bottom").value = "";
    document.getElementById("url").value = "";
});

// Give function to remove button
document.addEventListener('click', removeMeme);

function removeMeme(event) {
    if (event.target.className === 'remove') {
        event.target.parentElement.remove();
    }
}



