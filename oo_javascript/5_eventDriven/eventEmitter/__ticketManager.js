const EventEmitter = require("events");

class TicketManager extends EventEmitter {

    constructor(totalTickets) {
        super();        // Even though we declared that TicketManager is a child class of EventEmitter
                            // we still need to call super() to get access to the methods and properties of EventEmitter
        this.totalTickets = totalTickets;
                        // we create a totalTickets property on this object
    
    }

    buy(email, price) {
        console.log('buy triggered');
        if(this.totalTickets > 0) {
            this.totalTickets = this.totalTickets - 1;
            this.emit('buyEventeyyyy', email, price, Date.now());
        } else {
            this.emit("error", new Error("There are no more tickets left to purchase"));
        }
        
    }
    cancel(email) {
        this.totalTickets = this.totalTickets + 1;
        this.emit('cancel', email);
    }
    getAvailableTickets() {
        return this.totalTickets;
    }
}

module.exports = TicketManager;
