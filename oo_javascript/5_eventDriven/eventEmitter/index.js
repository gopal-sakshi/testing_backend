const TicketManager = require('./__ticketManager');
const EmailService = require('./__emailService');
const DatabaseService = require('./__dbService');

const ticketManager = new TicketManager(3);                    // total 11 tickets available
const emailService = new EmailService();
const databaseService = new DatabaseService();


ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});

// always best practice to listen for errors.... if you dont listen to errors, nodeJs program crashes when it encounters an error
    // now it will simply throw the error message
ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});

ticketManager.buy("test1@email.com", 10);
ticketManager.buy("test2@email.com", 10);
ticketManager.buy("test3@email.com", 10);
ticketManager.buy("test4@email.com", 10);
