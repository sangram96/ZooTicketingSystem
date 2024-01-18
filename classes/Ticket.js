// class to handle ticket
class Ticket {
    constructor(visitor, price) {
        this.visitor = visitor;
        this.price = price;
    }

    toString() {
        return `Ticket for ${this.visitor}: INR ${this.price}`;
    }
}

// exports the ticket class
module.exports = Ticket;