// Class to handle the visitors
class Visitor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `${this.name} (Age: ${this.age})`;
    }
}

// export the visitor class
module.exports = Visitor;