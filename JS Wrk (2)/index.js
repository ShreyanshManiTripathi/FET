const display = document.querySelector('#main-display');

const one = document.querySelector('#one');
const two = document.querySelector('#two');

const three = document.querySelector('#three');
const four = document.querySelector('#four');

const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');

const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const dot = document.querySelector('#dot');
const backspace = document.querySelector('#backspace');

const scientific = document.querySelector('#sci');
const isInt = (n) => Number(n) === n && n % 1 === 0;
const clear = document.querySelector('#clear');
const isFloat = (n) => Number(n) === n && n % 1 !== 0;

const addCommas = (val) => parseFloat(val).toLocaleString(undefined,{maximumFractionDigits: 20});

const putValInDisplay = (val) => {
  const currText = display.innerText.replace(/,/g,'');

  if((currText.indexOf('.') > -1 && val === '.') || currText.length == 11){
    return;
  }

  display.innerText = val === '.' 
                    ? currText + val 
                    : addCommas(currText + val);
}

dot.onclick = (e) => {
  putValInDisplay('.')
}
one.onclick = (e) => {
  putValInDisplay(1);
};

two.onclick = (e) => {
  putValInDisplay(2);
};

three.onclick = (e) => {
  putValInDisplay(3);
};

four.onclick = (e) => {
  putValInDisplay(4);
};

five.onclick = (e) => {
  putValInDisplay(5);
};

six.onclick = (e) => {
  putValInDisplay(6);
};

seven.onclick = (e) => {
  putValInDisplay(7);
};

eight.onclick = (e) => {
  putValInDisplay(8);
};

nine.onclick = (e) => {
  putValInDisplay(9);
};

zero.onclick = (e) => {
  const currText = display.innerText;
  display.innerText += parseInt(currText) ? 0 : ''
};

backspace.onclick = (e) => {

    const currText = display.innerText.replace(/,/g,'');
  display.innerText = addCommas(currText.slice(0, currText.length - 1) || 0);
};


// This function clear all the values
clear.onclick =(e)=> {
clearScreen();
}
function clearScreen() {
 document.getElementById("clear").value = "";
}

sci.onclick=(e)=>{


}

 addNumber = (e) => {
    if(this.reset) this.clear();
    
    this.number = e.target.textContent;
    if(this.result.value === '0') this.result.value = this.number;
    else if(this.newNumber) this.result.value = this.number;
    else this.result.value += this.number;
    this.newNumber = false;
  }

clear




// This function evaluates the expression and return result
function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
}