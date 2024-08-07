// template for EventEmitter class
class EventEmitter23 {

    listeners = {};  // key-value pair

    // addListener() method  ---> takes eventName & callback function to be executed
    addListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return 'cbFn added as listener';
    }

    on(eventName, fn) {        
        return this.addListener(eventName, fn);
    }

    emit(eventName, ...args) {
        for (var cbFnItem of this.listeners[eventName]) {
            cbFnItem(null, ...args);    // this.listeners[eventName] ======> array of callback functions that we store...
                                        // whenever emit() is called, we trigger each callback function...
        }        
    }

    getListeners() { return this.listeners; }
    listenerCount(eventName) { let fns = this.listeners[eventName] || []; return fns.length; }

    /********************** yet to be implemented *************************/
    rawListeners(eventName) {}
    removeListener(eventName, fn) {}
    off(eventName, fn) {}    
    once(eventName, fn) {}    
}

module.exports = EventEmitter23;