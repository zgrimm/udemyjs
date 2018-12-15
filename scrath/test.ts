interface Person {
	firstName: string;
	lastName: string;
}

class Guy {
	constructor(public person: Person) {

	}

	sayHi() {
		console.log('SayHi '  + this.person.firstName);
	}
}
let zachName = {
	firstName: "Zach",
	lastName: "Grimm"
};

let zach = new Guy(zachName);
zach.sayHi();