// APPROACH I
import { sum,subtract } from './singleExport.js';
console.log(sum(1,2));
console.log(subtract(7,5));
// we have to add "package.json"        ----> where type=module
    // Otherwise -------> Cannot use import statement outside a module

/***************************************************************************************************/

// // APPROACH II
// import * as ganitham from './singleExport.js';
// console.log(ganitham.sum(1,2));
// console.log(ganitham.subtract(9,2));
/***************************************************************************************************/