function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}
caesarCipher('Zoo Keeper', 2);


function casesarCipher(str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let characters = str.split("");
  let encodedLetters = [];
  for(let i = 0; i < characters.length; i++) {
    // dont change special chars
    if(alphabet.indexOf(characters[i].toLowerCase()) === -1) {
      encodedLetters.push(characters[i]);
    }
    else {
      //check if uppercase
      let isUpperCase = false;
      if(characters[i] !== characters[i].toLowerCase()) isUpperCase = true;
      //convert
      let convertedChar;
      let charsAlphabetPosition = alphabet.indexOf(characters[i].toLowerCase());
        //normal
      if(charsAlphabetPosition + num <= alphabet.length - 1) {
        convertedChar = alphabet[charsAlphabetPosition + num];
      } 
      //wrap-around
      else { 
        convertedChar = alphabet[(charsAlphabetPosition + num) - alphabet.length];
      }
      //add to encodedLetters
      if(isUpperCase) convertedChar = convertedChar.toUpperCase();
      encodedLetters.push(convertedChar);
    }
  }
  return encodedLetters.join('');
}

console.log(casesarCipher("Howdy Yall, I headrd tody is wednesday!", 2));
console.log(casesarCipher("AbCd,E!", 2));



//***********************8
//***********************8
//***********************8
//***********************8
function casesarCipher(str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let characters = str.split("");
  let encodedMsg = characters.map((character) => {
    // console.log('character', character);
    if(alphabet.indexOf(character.toLowerCase()) === -1) {
      return character;
    }
    let isUpperCase = false;
    if(character !== character.toLowerCase()) isUpperCase = true;
    let charsAlphabetPosition = alphabet.indexOf(character.toLowerCase());
    let convertedChar;
    if(charsAlphabetPosition + num <= alphabet.length - 1) {
      return isUpperCase ? alphabet[charsAlphabetPosition + num].toUpperCase() : alphabet[charsAlphabetPosition + num];
    } 
    else {
      return isUpperCase ? alphabet[(charsAlphabetPosition + num) - alphabet.length].toUpperCase() : alphabet[(charsAlphabetPosition + num) - alphabet.length] ;
    }
  });
  return encodedMsg.join('');;
}

console.log(casesarCipher("Howdy Yall, I headrd tody is wednesday!", 2));
console.log(casesarCipher("AbCd,E!", 2));