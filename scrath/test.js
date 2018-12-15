var Guy = /** @class */ (function () {
    function Guy(person) {
        this.person = person;
    }
    Guy.prototype.sayHi = function () {
        console.log('SayHi ' + this.person.firstName);
    };
    return Guy;
}());
var zachName = {
    firstName: "Zach",
    lastName: "Grimm"
};
var zach = new Guy(zachName);
zach.sayHi();
