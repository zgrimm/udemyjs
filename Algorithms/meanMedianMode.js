function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
 
function getMean(array) {
  var sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  var mean = sum / array.length;
  return mean;
}
 
function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;
  
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  
  return median;
}
 
function getMode(array) {
  var modeObj = {};
  
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
 
 
meanMedianMode([9,10,23,10,23,9]);


//****************8
//****************8
//****************8
//****************8

function meanMedianMode(arr) {
  let averages = {};
  averages.mean = getMean(arr);
  averages.median = getMedian(arr);
  averages.mode = getMode(arr);
  return averages
}

function getMean(arr) {
  return (arr.reduce((curr, sum) => {
    return curr + sum;
  }, 0) / arr.length);
}

function getMedian(arr) {
  arr.sort();
  if(arr.length % 2 === 0)  {
    let leftMedian = Math.floor(arr.length / 2) - 1;
    let rightMedian = Math.floor(arr.length / 2);
    return (leftMedian + rightMedian) / 2
  } else {
  return Math.floor(arr.length / 2)
  }
}

function getMode(arr) {
  let numberOccurences = {};
  arr.forEach((num) => {
    if(!numberOccurences[num]) numberOccurences[num] = 0;
    numberOccurences[num]++
  });
  let modes = [];
  for(let arrayVal in numberOccurences) {
    if(!modes.length) modes.push(arrayVal);
    else {
      if(numberOccurences[arrayVal] > numberOccurences[modes[0]]) modes = [arrayVal];
      else if(numberOccurences[arrayVal] === numberOccurences[modes[0]]) modes.push(arrayVal)
    }
  }
  return modes
}


console.log(meanMedianMode([1,1,1,1,3,4,3,5,6,7,8,4,6,7,5,9,9,9,9,8]))