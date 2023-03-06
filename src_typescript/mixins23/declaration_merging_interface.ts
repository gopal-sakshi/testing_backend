interface Car1 { steering: number; tyre: number; };
interface Car1 { exhaustOutlet: number; };                  // declaration merging 

const BMW: Car1 = { steering: 1, tyre: 4, exhaustOutlet: 2 };

interface Toyota extends Car1 { brand23: 'Toyota'; }            // interface extending interfaces