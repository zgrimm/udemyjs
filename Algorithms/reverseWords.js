function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  
  return reversedWordsArr.join(' ');
}
 
reverseWords('Coding JavaScript');

//*************************
//*************************
//*************************
//*************************
function reverseWords(string) {
  return string.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("123 abc xyz"));