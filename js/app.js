


// 1. Print Greeting
function printGreeting(name){
    return `=> Hello there, ${name}!`;
  }
  // console.log(printGreeting("Slimer"));
  
// 2. Reverse Word Order
function reverseWordOrder(word){
  let splitStr = [];// stores reversed split string

  let revWord = word.split(" ");// split where a space is found

  // backwards for loop to push in each split piece from back to front
  for(let i= revWord.length-1; i >= 0; i--){
    splitStr.push(revWord[i]);
  }

  let outputStr = splitStr.join(" ");// rejoin at the spaces

  return outputStr;
}

// console.log(reverseWordOrder("Ishmael me Call"));

// console.log(reverseWordOrder("I use Lâncome on my comb"));

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

  // console.log(calculate(4, 3, "sub"));// 1
  // console.log(calculate(4, 3, "exp"));// 64


// 4. Pandigital Numbers
// A number of length n is *1-to-n pandigital* if it makes use of all the digits 1 to n exactly once.

// - The number `15234` is *1-to-n pandigital* because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
// - The number `333` is **not** *1-to-n pandigital*.
// - The number `0` is **not** *1-to-n pandigital*.
// - The number `987654321` is *1-to-n pandigital*.

// Write a function that checks if a number is *1-to-n pandigital*.
// is the length of the string === to the largest number
// && are any numbers repeated
function isPandigital(str){
  let newStr = str.toString();// turns numbers into strings to be analyzed
  let largestNum = 0; // stores largest number to compare to size of string
  let repeats = 0;// stores if number is repeated


  // take in newStr and for loop through and compare 
  for(let i=0; i < newStr.length; i++){
    if(largestNum < newStr[i]){
      largestNum = newStr[i];
    }
  }
  console.log(largestNum);
  for(let i=0; i < newStr.length; i++){//  count how many times number is repeated in string
    if(newStr[i] === newStr[i-1]){ // if num1 == num-1 ++
      repeats++;
    }
  }
  console.log(repeats);
  console.log(newStr.length);

  if(newStr.length == largestNum && repeats === 0){
    return "Is Pandigital";
  }else {
    return "Is Not Pandigital";
  }
}

console.log(isPandigital(15234));


// 5. Print Greeting 2.0
const userInput = prompt("What is your name?");
function printGreeting2(name){
  return alert(`Hello there, ${name}! ...2`);
}
console.log(printGreeting2(userInput));


// 6. Functions + Loops



// 7. Modify it to make any size grid



// 8. Variable Number of Arguments
