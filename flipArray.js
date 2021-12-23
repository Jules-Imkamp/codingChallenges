// declare an array to get flipped
const newArr = ['first', 'second', 'third', 'forth', 'fifth'];


// declare a function to flip array
const flipArray = (arr) => {
   // declare a arr to build flipped array
   const flippedArr = []
   for (let i = arr.length-1; i >= 0; i--) {
     flippedArr.push(arr[i])   
   } return flippedArr
 }
 console.log(flipArray(newArr))

 // the easy way to do it 
 console.log(newArr.reverse())