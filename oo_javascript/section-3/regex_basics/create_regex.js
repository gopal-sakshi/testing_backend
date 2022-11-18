/***********************************************************************

OPTION I 
const re = /ab+c/;
    this is generally used

OPTION II
const re = new RegExp('ab+c');
    Use the constructor function when you know the regular expression pattern will be changing, or
    you don't know the pattern and are getting it from another source, such as user input.
    MEANING = using constructor function provides runtime compilation of the regular expression
*************************************************************************/

var rgx22 = /ab+c/;                     // Using Option I
var rgx23 = new RegExp('ab+c')          // Using Option II