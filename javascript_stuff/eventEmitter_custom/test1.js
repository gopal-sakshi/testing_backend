const EventEmitter23 = require("./EventEmitter23");

class CustomEventEmitter extends EventEmitter23 {

    constructor() {
        super();
    }

    buyTicket(name, price) {
        console.log('ticket brought by ', name);
        this.emit('buyTkt', name, price);
    }
    
}
/*************************************** MAIN CODE ***********************************************************/
const custEE = new CustomEventEmitter();

custEE.on('buyTkt', () => {
    console.log('buyTkt listener added');
});

custEE.buyTicket('gopal', 23);

