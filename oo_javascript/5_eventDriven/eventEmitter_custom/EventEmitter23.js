// template for EventEmitter class
class EventEmitter23 {

    listeners = {};  // key-value pair

    // addListener() method  ---> takes eventName & callback function to be executed
    addListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        console.log(this.listeners);
    }

    on(eventName, fn) {
        console.log('on ==> ', eventName);
        return this.addListener(eventName, fn);
    }

    removeListener(eventName, fn) {}
    off(eventName, fn) {}    
    once(eventName, fn) {}    
    emit(eventName, ...args) { 
        console.log('this is emitted ===> ', eventName);
        console.log(this.listeners[eventName][0]);
        this.listeners[eventName][0]();
    }
    listenerCount(eventName) {
        let fns = this.listeners[eventName] || [];
        return fns.length;
    }    
    rawListeners(eventName) {}

    getListeners() {
        console.log(this.listeners);
    }
}

module.exports = EventEmitter23;