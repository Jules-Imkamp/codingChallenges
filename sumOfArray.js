// Reads an array of numbers and takes the sum

// declare a array full of numbers to sum
const numberArr = [1, 4, -2, 6, 5, -5, 2, 6, 5, 3, 4]
// create function to loop through an array
const sumOfArray = (arr) => {
  // declare a sum variable to modify
  let sum = 0;
  // loop through the array 
  for (let i = 0; i<arr.length; i++) {
    // add the position in the array to sum
    sum += arr[i];
    }return `The sum of the array is ${sum}`
  }
//call the function and log it
console.log(sumOfArray(numberArr))