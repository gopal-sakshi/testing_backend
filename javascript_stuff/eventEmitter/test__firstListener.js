const TicketManager = require("./ticketManager");

const ticketManager = new TicketManager(10);

// The on() method is available to all event emitter objects
    // since TicketManager inherits from the EventEmitter class, this method is available on all of the TicketManager instance objects.
ticketManager.on('buy', () => {
    console.log('some one bought a ticket');
});
ticketManager.on('cancel', () => {
    console.log('someone cancelled a ticket');
})
ticketManager.buy('1@gmail.com', 10);
ticketManager.buy('2@gmail.com', 11);
ticketManager.cancel('1@gmail.com');
console.log(ticketManager.getAvailableTickets());