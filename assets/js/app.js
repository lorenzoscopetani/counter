const container = document.querySelector('.container');
const themeBtn = document.querySelector('#theme-btn');
const counterContainer = document.querySelector('.counter-container');
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const resetContainer = document.querySelector('.reset-container');

let counterValue = localStorage.getItem('counter')
	? localStorage.getItem('counter')
	: 0;

addBtn.addEventListener('click', addNumber);
document.body.addEventListener('keydown', (e) => {
	if (e.keyCode == 13) {
		addNumber();
	}
});

// DARK MODE
let darkMode = localStorage.getItem('darkMode');

function enableDarkMode() {
	container.classList.add('dark');
	themeBtn.className = 'fas fa-moon';
	localStorage.setItem('darkMode', 'enabled');
}

function disabledDarkMode() {
	container.classList.remove('dark');
	themeBtn.className = 'fas fa-sun';
	localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
	enableDarkMode();
} else {
	disabledDarkMode();
}

themeBtn.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disabledDarkMode();
	}
});

// CREATE COUNTER CONTAINER
const counter = document.createElement('div');
counter.className = 'counter';
counter.innerHTML = counterValue;
counterContainer.appendChild(counter);

// CREATE BUTTONS CONTAINER
const btnDiv = document.createElement('div');
btnDiv.className = 'btn-container';
counterContainer.appendChild(btnDiv);

// CREATE PLUS BUTTON
const plusBtn = document.createElement('button');
plusBtn.innerHTML = '<i class="fas fa-plus" </i>';
plusBtn.className = 'btn plus-btn';
btnDiv.appendChild(plusBtn);
plusBtn.addEventListener('click', incrementCounter);

// CREATE MINUS BUTTON
const minusBtn = document.createElement('button');
minusBtn.innerHTML = '<i class="fas fa-minus" </i>';
minusBtn.className = 'btn minus-btn';
btnDiv.appendChild(minusBtn);
minusBtn.addEventListener('click', decrementCounter);

// RESET CONTAINER
container.appendChild(resetContainer);
const p = document.createElement('p');
p.innerHTML = 'Click here to reset the counter';
resetContainer.appendChild(p);

// CREATE RESET BUTTON
const resetBtn = document.createElement('button');
resetBtn.className = 'btn reset-btn';
resetBtn.innerHTML = 'Reset';
resetContainer.appendChild(resetBtn);
resetBtn.addEventListener('click', resetCounter);

// FUNCTION INCREMENT COUNTER
function incrementCounter() {
	counterValue++;
	counter.innerHTML = counterValue;
	saveInLocalStorage(counterValue);
}

// FUNCTION DECREMENT COUNTER
function decrementCounter() {
	counterValue--;
	counter.innerHTML = counterValue;
	saveInLocalStorage(counterValue);
}

// FUNCTION ADD NUMBER
function addNumber() {
	let num = input.value;
	if (num !== '') {
		counterValue = parseInt(num) + parseInt(counterValue);
		counterValue = String(counterValue);
		counter.innerHTML = counterValue;
		saveInLocalStorage(counterValue);
		input.value = '';
	}
}

// FUNCTION RESET COUNTER
function resetCounter() {
	counterValue = 0;
	counter.innerHTML = counterValue;
	saveInLocalStorage(counterValue);
}

function saveInLocalStorage(counterValue) {
	localStorage.setItem('counter', counterValue);
}
