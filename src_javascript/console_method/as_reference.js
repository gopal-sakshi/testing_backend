/*
    Console.log() is passed as reference to the object
    - so the value in the Console changes as the object changes. To avoid that you can:
*/

var A = [2, 1, 4, 7, 9, 3];
var C = A;
/*
    EXPLANATION:
    a) variables 'A' & 'C' ---------> two variables created in stack memory
    b) [2, 1, ...]       ----------------> array created in heap memory
    c) Both, 'A' & 'C'  -----------> point to the same location in heap memory
    d) Process
        line1:  JS engine creates a variable 'A' in stack memory
        line1:  JS engine creates a array object in heap memory... and makes 'A' point to this heap memory
        line2:  JS engine creates a variable 'C' in stack memory... this 'C' also points to the same heap memory

*/
console.log(C);         // Prints ---->         [2,1,4,7,9,3]
A.sort();               // the array in the heap memory which 'A' points to ----> it is SORTED
console.log(C);         // Prints ----->        [1,2,3,4,7,9]