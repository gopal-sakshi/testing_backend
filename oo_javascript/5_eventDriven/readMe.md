# callback vs promise

`callback`
- const cbImplementation = function(err, lines) { };                                // callback implementation
- const readFileAsArray23 = function (inputFile, cbReference) {                     // readFileAsArray23 implementation
                                cbReference(null, lines)                                // cbReference will get the data... error (null) as 1st parameter
                            }                                                                                        
- readFileAsArray23('filename.txt', cbImplementation);                      // calling/invoking a function (whose name is readFileAsArray23)


We pass <filename.txt> & <cbImplementation> as a parameter to another function readFileAsArray23()
    2 parameters =========> string, function

`promise`
- const readFileAsArray23 = function (inputFile) { return Promise }     // readFileAsArray23 implementation
                                                                            // it returns a promise
- readFileAsArray23('filename.txt');                                    // calling/invoking a function (whose name is readFileAsArray23)
                                                                            // with only 1 parameter... callbackFn as parameter is not passed
                                                                            // we have to call .then()
---------------------------------------------------------------------------------------------------------------------- 

created a custom Event Emitter

eventEmitter will have these methods
    on('eventName', cb)             // adds the eventName to listenersArray & stores the `callbackFn function`
                                        // here cb ===> just a reference to cbImplementation23 (which will be executed/carriedOut)
    emit('eventName', args)         // invokes all the `callbackFns` stored for that particular eventName in listenersArray

mainCode will have these functionalities
    eE.on('eventName', cbImplementation23)                // when 'eventName' happens ----> execute/perform/carryOut <cbImplementation23>
    eE.wrapperEvent() { this.emit('eventName') }        // emit 'eventName' ---> so that associated callbacks gets executed
----------------------------------------------------------------------------------------------------------------------