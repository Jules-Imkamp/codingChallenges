//prints all even numbers from 0 to N

const numberRange = 1000
//go through each number
for (let i = 0; i <= numberRange; i++) {
  //check if even, then log the number
  if (i%2 === 0) {
    console.log(i)
  }
}