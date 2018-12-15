function myFunc() {
	this.count = this.count || 0;
	this.count++;
    return this.count;
}

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
console.log('global.count', global.count);

function myFunc() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}
 
console.log(myFunc());
 
const instanceOne = myFunc();
const instanceTwo = myFunc();
 
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());