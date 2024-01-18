const Visitor = require('./Visitor');
const Ticket = require('./Ticket');
const getPrice = require('../util/helper');
class ZooTicketingSystem {
    constructor() {
        this.visitors = [];
        this.tickets = [];
    }
    // Issuing Zoo Ticket 
    processEntrance(numberOfGuests, guestsData) {
        const visitors = [];

        for (let i = 0; i < numberOfGuests; i++) {
            const { name, age } = guestsData[i];
            const entrancePrice = getPrice(age);

            const visitor = new Visitor(name, age);
            visitors.push(visitor);

            // Display individual ticket details
            console.log(`Ticket for ${visitor}: ${entrancePrice === 0 ? "Free" : `INR ${entrancePrice}`}`);
        }

        const totalCharges = visitors.reduce((total, visitor) => {
            return total + getPrice(visitor.age);
        }, 0);

        const ticket = new Ticket(visitors, "Entrance", totalCharges);
        this.tickets.push(ticket);

        console.log("Total Entrance Charges:", totalCharges);
        console.log("******Entrance Ticket Issued******");

        return ticket;
    }

    // Validating Zoo Ticket
    validateTicket(ticket) {
        console.log("-------Validating Ticket-------");

        console.log("Guests Associated with the Ticket:");
        ticket.visitor.forEach(visitor => {
            console.log(`${visitor.name} (Age: ${visitor.age})`);
        });
        console.log("Validation Complete. Guests can enter the Zoo.");
    }
}

module.exports = ZooTicketingSystem;