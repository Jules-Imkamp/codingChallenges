//checking if a number is divisible by ten
const number = 100;

const isDivisibleByTen = (num) => {
  if (num % 10 === 0) {
    return true;
 }else {
    return 'This number is not divisible by 10.'
  }
}
console.log(isDivisibleByTen(number))

