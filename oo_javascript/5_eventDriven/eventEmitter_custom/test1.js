const { finished } = require("stream");
const EventEmitter23 = require("./EventEmitter23");

class CustomEventEmitter extends EventEmitter23 {

    constructor() {
        super();
    }

    buyTicket(movieName, details) {
        this.emit('buyTkt', {movieName, ...details});
    }

    cancelTicket(movieName, details) {
        this.emit('cancelTkt', {movieName, ...details});
    }
    
}
/*************************************** MAIN CODE ***********************************************************/
const custEE = new CustomEventEmitter();

custEE.on('buyTkt', (err, data) => {
    console.log('buyTkt cb ===> ', data);    
});

custEE.on('cancelTkt', (err, data) => {
    console.log('cancelTkt cb ===> ', data);    
});

custEE.on('advceBooking', (err, data) => {
    console.log('advance Booking cb ===> ', data);    
});

custEE.buyTicket('baahubali', { purchasedBy: 'GopAL', paymentDone: true, cost: 100, paymentMode: 'cash' });
custEE.cancelTicket('aacharya', { purchasedBy: 'Priya', paymentDone: true, cost: 300, paymentMode: 'online' });
var listenersList = custEE.getListeners();
console.log(listenersList);
/*************************************************************************************************************/


// Why callbacks
    // even though buyTicket (or) cancelTicket ===> take lot of time (db processing & stuff)
    // we will stop the work there itself at 64% and resume with next tasks...
    // we can proceed sequentially with next tasks... accept new incoming requests (or) other processing stuff
    // when the buyTicket task is completely finished... it will trigger the callback (finishing the 36% pending work remaining)
    // in our example, all those arent used... we need to employ promises, http/axios calls stuff