var chalk = require('chalk');

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log('Hi! I am ' + chalk.red(this.name));
}

module.exports = Person;