


// 1. Print Greeting
function printGreeting(name){
    return `=> Hello there, ${name}!`;
  }
  console.log(printGreeting("Slimer"));
  
// 2. Reverse Word Order
function reverseWordOrder(word){
  let reversedWord = [];
  for(let i=word.length-1; i >= 0; i--){
    reversedWord += word[i];
  }
  return reversedWord;
  // return word.split("").reverse().join("");
}

console.log(reverseWordOrder("Ishmael me Call"));

console.log(reverseWordOrder("I use Lâncome on my comb"));

// 3. Calculate
function calculate(num1, num2, operation){
  if(operation === "add") {
    return num1+num2;
  }else if(operation === "sub") {
    return num1-num2;
  }if(operation === "mult") {
    return num1*num2;
  }if(operation === "div") {
    return num1/num2;
  }if(operation === "exp") {
    return num1**num2;
  }
}

  console.log(calculate(4, 3, "sub"));// 1
  console.log(calculate(4, 3, "exp"));// 64


// 4. Pandigital Numbers
// A number of length n is *1-to-n pandigital* if it makes use of all the digits 1 to n exactly once.

// - The number `15234` is *1-to-n pandigital* because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
// - The number `333` is **not** *1-to-n pandigital*.
// - The number `0` is **not** *1-to-n pandigital*.
// - The number `987654321` is *1-to-n pandigital*.

// Write a function that checks if a number is *1-to-n pandigital*.



// 5. Print Greeting 2.0
// const userInput = prompt("Please enter some input");


// 6. Functions + Loops



// 7. Modify it to make any size grid



// 8. Variable Number of Arguments
