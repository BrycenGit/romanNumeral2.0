const symbolArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const valueArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const array = [];

function roman(number, counter) {
  if (number > 4000) {
    return "number too large";
  } else if (counter < valueArray.length) {
    if (number / valueArray[counter] >= 1) {
      const amount = Math.floor(number / valueArray[counter])
      const newNumber = number % valueArray[counter]
      array.push(`${symbolArray[counter].repeat(amount)}`)
      roman(newNumber, counter + 1);
    } else {
      roman(number, counter + 1)
    }
  } 
  return array.join('')
}
// 4 = IV 7 = VII 1243 = MCCXLIII
console.log(roman(4001, 0))

