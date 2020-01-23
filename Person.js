function Person(name) {
    this.name = name;
    this.stomach = [];
}

Person.prototype.eat = function(cat) {
    this.stomach.push(cat);
}

module.exports = Person;