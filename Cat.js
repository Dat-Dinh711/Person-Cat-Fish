function Cat(name) {
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat = function(fish) {
    this.stomach.push(fish);
}

module.exports = Cat;