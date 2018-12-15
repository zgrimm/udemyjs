function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
 
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}
 
twoSum([1, 6, 4, 5, 3, 3], 7);


function twoSum(numArray, sum) {
  let pairs = [];
  for(let i = 0; i < numArray.length; i++) {
    for(let j = i; j < numArray.length; j++) {
      if(numArray[i] + numArray[j] === sum) pairs.push([numArray[i], numArray[j]])
    }
  }
  return pairs
}

console.log(twoSum([1,2,3,4,5,6,7,8,9], 10))
