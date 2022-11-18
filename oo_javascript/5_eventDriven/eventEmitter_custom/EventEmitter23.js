// template for EventEmitter class
class EventEmitter23 {

    listeners = {};  // key-value pair  
    // addListener() method  ---> takes eventName & callback function to be executed
    addListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
    }
    on(eventName, fn) {
        return this.addListener(eventName, fn);
    }    
    removeListener(eventName, fn) {}
    off(eventName, fn) {}    
    once(eventName, fn) {}    
    emit(eventName, ...args) { }    
    listenerCount(eventName) {
        let fns = this.listeners[eventName] || [];
        return fns.length;
    }    
    rawListeners(eventName) {}
}

module.exports = EventEmitter23;