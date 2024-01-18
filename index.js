const ZooTicketingSystem = require('./classes/ZooTicketingSystem');

const zooSystem = new ZooTicketingSystem();
const guestsData = [
    { name: "Guest 1", age: 25 },
    { name: "Guest 2", age: 10 },
    { name: "Guest 3", age: 65 }
];

// Process entrance and issue ticket
const entranceTicket = zooSystem.processEntrance(guestsData.length, guestsData);
zooSystem.validateTicket(entranceTicket);