//Removes all spaces from a string

const string = 'This program will remove the spaces from this string'
let removedSpacesString = ''

const spaceRemover = (string) => {
 removedSpacesString = string.split(' ').join('');
 console.log(removedSpacesString)
      }
  


spaceRemover(string)