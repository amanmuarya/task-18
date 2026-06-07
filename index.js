// S- 1: Select the DOM elements
const greetingHeader = document.getElementById('greeting');
const nameInput = document.getElementById('name-input');

const greetBtn = document.getElementById('greet-btn');
const redBox = document.getElementById('box-red');

const blueBox = document.getElementById('box-blue');

const greenBox = document.getElementById('box-green');

const yellowBox = document.getElementById('box-yellow');

// S- 2: Implement the greeting functionality
// here is use if else conditon to check the user input is empty or not 
greetBtn.addEventListener('click', function () {
    const userName = nameInput.value.trim();
    if (userName !== "") {
        greetingHeader.textContent = `Hello, ${userName}, ji !`;
    } else {
        greetingHeader.textContent = "Hello";
    }
});
blueBox.addEventListener('click', function () {
    blueBox.style.backgroundColor = 'blue';
    blueBox.style.color = 'white';
});
// Step 3: Implement the color box functionality
redBox.addEventListener('click', function () {
    redBox.style.backgroundColor = 'red';
    redBox.style.color = 'white'; // Optional: makes text easier to read
});
yellowBox.addEventListener('click', function () {
    yellowBox.style.backgroundColor = 'yellow'; //  background color is yellow 
    yellowBox.style.color = 'black'; // Keep text dark for yellow
});
greenBox.addEventListener('click', function () {
    greenBox.style.backgroundColor = 'green';
    greenBox.style.color = 'white';
});