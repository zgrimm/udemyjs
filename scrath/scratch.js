function myFunc() {
	this.count = this.count || 0;
	this.count++;
    return this.count;
}

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
console.log('global.count', global.count);