const numbers = [];

for (let i = 0; i < 5; i++) {
  let input = prompt(`Enter integer number ${i + 1}:`);
  let num = parseInt(input);

  // Validate input is a number
  if (isNaN(num)) {
    console.log("Invalid input, please enter a valid integer.");
    i--; // repeat this iteration
  } else {
    numbers.push(num);
  }
}

console.log("You entered these integers:", numbers);
