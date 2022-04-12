"use strict";

let storedNum = '';
let storedExpression = '';

calcLayout.onclick = function(event) {

  function storeNum(inputNum) {
    storedNum += inputNum;
    return(storedNum);
  }

  function storeExpression(intOrSym) {
    storedExpression += intOrSym;
    return(storedExpression);
  }

  function displayNum(anyInt) {
    calcDisplay.setAttribute('value', anyInt);
  }

  function removeDisplay() {
    calcDisplay.removeAttribute('value');
  }

  function calculate() {
    return Function(`'use strict'; return (${storedExpression})`)();
  }

  function clear() {
    removeDisplay();
    storedNum = '';
    storedExpression = '';
  }

  let button = event.target.closest('button');

  if (!button) return;

  if (Number.isInteger(parseInt(button.innerHTML)) || button.innerHTML == '.'){
    let inputNum = button.innerHTML;
    storeNum(inputNum);
    storeExpression(inputNum);
    displayNum(storedNum);
  }
  else if (button.innerHTML == 'C'){
    clear();
  }
  else {
    let operationSymbol = button.innerHTML;
    if(operationSymbol == '='){
      let result = calculate();
      displayNum(result);
    }
    else {
      storeExpression(operationSymbol);
      removeDisplay();
    }
    storedNum = '';
  }

};
