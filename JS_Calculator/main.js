// Buttons 
const buttons =  document.querySelectorAll('.btn');
const screen  = document.querySelector('.screen');
const equal = document.querySelector('.btn-eq');
const clear = document.querySelector('.btn-cl');
const negative = document.querySelector('.btn-neg');
const del = document.querySelector('.btn-del');
const sqrt = document.querySelector('.btn-sqrt');
const inverse = document.querySelector('.btn-inv');
const percent = document.querySelector('.btn-perc')
const memoryPls = document.querySelector('.pls');
const memorySub = document.querySelector('.sub');
const memoryRC = document.querySelector('.mrc');
const memoryDisplay = document.querySelector('.memory');
const inMemory = document.createTextNode('M');

// Number to be stored in Memory
let memory = ''

// fresh screen on refresh
screen.value = '0'

// adding listening events to each number button
for (let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		if (screen.value === 'Error'|| screen.value === 'undefined'
			|| screen.value === '0') {
		screen.value = '';
		}
		let input = buttons[i].getAttribute('value');
		screen.value += input
	})
};

// totals the screen value
equal.addEventListener('click', function(){
	try {
		let val = eval(screen.value);
		if (val === undefined) {
			screen.value = ''
		} else { 
			screen.value = val;
		}
	}
	catch (err) {
		screen.value = 'Error'
	}
});

// divides 1 by any positive integer greater than 0
inverse.addEventListener('click', function(){
	try {
		let val = eval(screen.value);
		if (val === undefined) {
			screen.value = ''
		} else { 
			screen.value = 1/val;
		}
	}
	catch (err) {
		screen.value = 'Error'
	}
});

// divides any number by 100 as a percent
percent.addEventListener('click', function(){
	try {
		let val = eval(screen.value);
		if (val === undefined) {
			screen.value = ''
		} else { 
			screen.value = val/100;
		}
	}
	catch (err) {
		screen.value = 'Error'
	}
});

// Squareroot button
sqrt.addEventListener('click', function(){
	try {
		let val = eval(screen.value);
		if (val === undefined) {
			screen.value = ''
		} else { 
			screen.value = Math.sqrt(val);
		}
	}
	catch (err) {
		screen.value = 'Error'
	}
});

// Complete Clear of inputs
clear.addEventListener('click', function(){
	screen.value = '0';
});

// Deletes one character at atime
del.addEventListener('click', function(){
	if (screen.value === 'Error'|| screen.value === 'undefined') {
		screen.value = '0';
	} else {
	screen.value = screen.value.slice(0,-1);
	}
	if (screen.value === '') {
		screen.value = '0'
	}
});

// makes first number negative
// if already negative, it becomes positive
negative.addEventListener('click', function(){
	if (screen.value[0] === '-'){
		screen.value = screen.value.substr(1);
	} else if (screen.value === '0'){
		screen.value = '-'
	} else {
		screen.value = '-'+screen.value;
	}
});

// Memory functions

// Adds rendered screen value to memory
memoryPls.addEventListener('click', function(){
	try {
		current = eval(screen.value).toString()
		if (current === '' || current === 'Error'
			|| current === 'undefined'){
		} else {
			memory = current;
			memoryDisplay.appendChild(inMemory)
		}
	} catch (err) {}
});

// adds the negative of the screen value
// if negative, it becomes positive
memorySub.addEventListener('click', function(){
	try {
	current = eval(screen.value).toString()
	if (current === '' || current === 'Error'
		|| current === 'undefined'){
		//pass
	} else if (current[0] === '-'){
		memory = current.substr(1);
		memoryDisplay.appendChild(inMemory)
	} else {
		memory = '-'+current;
		memoryDisplay.appendChild(inMemory)
	}
	} catch (err){}

});

// Memory Recall and Clear
// if the screen value is identical to memory
// it will clear memory
memoryRC.addEventListener('click', function(){
	if (memory === ''){
		//pass
	} else if (screen.value === 'Error'|| screen.value === 'undefined') {
		screen.value = '0';
	} else {
		if (screen.value === memory) {
			memory = ''
			memoryDisplay.removeChild(inMemory)
		} else {
			if (screen.value === '0'){
				screen.value = memory
			} else {
				screen.value += memory;
			}
		}
	}
});