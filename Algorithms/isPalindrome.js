function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}
 
isPalindrome("Madam, I'm Adam");


//********************
//********************
//********************

function isPalindrome(text) {
  let letters = text.toLowerCase().split(' ').join('').split('')
  .filter((char) => {
    let specialChars = [',', '.', "'", '"', "/", "?", "\\"];
    return specialChars.indexOf(char) === -1
  });
 
  if(letters.length < 2) {
    return true;
  }
  if(letters[0] !== letters[letters.length - 1]) {
    return false;
  } 

  return isPalindrome(letters.slice(1, letters.length - 1).join(''))
}


console.log(isPalindrome("i am a racecar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("Taco cat"));
console.log(isPalindrome("Taco, cat"));