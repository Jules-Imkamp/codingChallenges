//Filters out Negative numbers from an array

const arr = [0, -3, 2, -6, 2, 4, -1, 4, 7]
let newArr = []
const negativeNumberFilter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(negativeNumberFilter(arr))