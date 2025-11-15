let string = "";
let memory = 0; // Memory storage
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } 

    else if (value === 'C') {
      string = "";
      input.value = "";
    } 

    else if (value === 'M+') {
      if (string !== "") memory += parseFloat(eval(string));
      string = "";
      input.value = "";
    } 

    else if (value === 'M-') {
      if (string !== "") memory -= parseFloat(eval(string));
      string = "";
      input.value = "";
    } 

    else if (value === 'MC') {
      memory = 0;
      input.value = "";
    } 

    else {
      string += value;
      input.value = string;
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    string += key;
    input.value = string;
  } 
  else if (key === "Enter") {
    try {
      string = eval(string);
      input.value = string;
    } catch {
      input.value = "Error";
      string = "";
    }
  } 
  else if (key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } 
  else if (key.toLowerCase() === 'c') {
    string = "";
    input.value = "";
  }
});
