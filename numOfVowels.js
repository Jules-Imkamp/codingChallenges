//counts the number of vowels in a string

let newString = 'This program will count the total number of vowels in this string!'

const numOfVowels = (string) => {
  let counter = 0;
  string.toLowerCase().split('')
  
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        counter += 1;
        break;
      case 'e':
        counter += 1;
        break;
      case 'i':
        counter += 1;
        break;
      case 'o':
        counter += 1;
        break;
      case 'u':
        counter += 1;
        break;
      default: 
        break;
    }
  }return counter
}

console.log(numOfVowels(newString))