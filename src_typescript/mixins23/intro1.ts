interface Car1 {
    steering: number;
    tyre: number;
}
interface Car1 {
    exhaustOutlet: number;
}

const BMW: Car1 = {             // interface class extension & declaration merging 
                                    // interface class extension ===> extend multiple classes in TypeScript
                                    // declaration merging ====> merging two or more declarations with the same name
                                    // BMW ==> contains properties from both Car1 interfaces
    steering: 1,
    tyre: 4,
    exhaustOutlet: 2
};

interface Toyota extends Car1 {             // Toyota will contain 4 properties now
                                                // 1 (brand23)
                                                // 3 properties (steering, tyre, exhaustOutlet) now
    brand23: 'Toyota';                      // this is interface extending interfaces
}