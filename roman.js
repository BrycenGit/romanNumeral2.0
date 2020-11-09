// console.log("roman broman")
// const number = 1000
// const valueArray = []
// const symbolArray = []

// function romanNumeral(number) {

// }
const numerals = ["I", "X", "C", "M"];

const numerals5 = ["V", "L", "D", "z"];

function parseNum(input) {
  const numbers = input.split("").reverse();
  const num = recursion(numbers, 0);
  return num.join("").reverse();
}

let out = ""

function single(num) {
  if( num > 5 ){
    out += numerals5[index]
    number = num - 5;
  } else if ( num === 4 ){
    out += numerals[index] + numerals5[index];
    number = num - 4;
  } else if ( num > 0 ){
    out += numerals[index]
    number = num - 1;
  }
  return single(number)
}

function recursion(numbers, index) {
  const number = numbers[index]
  if (number < 9) {
    single(number);
  } else {
    out += numerals[index] + numerals[index + 1];
  } 
  index++;
  recursion(numbers, Index)
}


// function numerals(input) {
  
//   const numerals = ["I", "X", "C", "M"];
//   const numerals5 = ["V", "L", "D", "Z"];
//   let numbers = input.split("").reverse();
//   let output = "";

//   for (let i = 0; i < numbers.length; i++) {
//     output = "";
//     let num = parseInt(numbers[i]);
//     if (num < 4) {
//       for (let e = 1; e <= num; e++) {
//         output = output + numerals[i];
//       }
//     } else if (num === 4) {
//       output = numerals[i] + numerals5[i];
//     } else if (num < 9) {
//       output = output + numerals5[i];
//       num = num - 5; 
//       for (let e = 1; e <= num; e++) {
//         output = output + numerals[i];
//       }
//     } else {
//       output = numerals[i] + numerals[i + 1];
//     }  
//     numbers[i] = output; 
//   }
//   numbers = numbers.reverse();
//   let result = numbers.join("");

//   return result;
// }