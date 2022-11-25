// start and stop methods are namespaced under the vehicle object
    // they are not polluting the “global object”.
    // But the methods are still accessible from the outside because of references to the “vehicle” object.
const vehicle1 = {
    start: () => { console.log('start the vehicle') },  
    stop: () => { console.log('stop the vehicle') }
}

const vehicle2 = {}
vehicle.start = () => { console.log('start the vehicle') };
vehicle.stop = () => { console.log('stop the vehicle') };
/******************************************************************************************/


