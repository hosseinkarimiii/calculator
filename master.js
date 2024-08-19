"use strict";
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function ClearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Check if the input contains 'Math.' but not the closing parenthesis
    const openParentheses = (display.value.match(/\(/g) || []).length;
    const closeParentheses = (display.value.match(/\)/g) || []).length;
    
    // Automatically add missing closing parentheses
    if (openParentheses > closeParentheses) {
      display.value += ')'.repeat(openParentheses - closeParentheses);
    }
    
    // Evaluate the expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
