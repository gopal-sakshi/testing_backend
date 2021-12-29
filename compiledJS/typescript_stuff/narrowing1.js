"use strict";
function padLeft1(padding, input) {
    return " ".repeat(padding) + input;
}
function padLeft2(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
/*
    hover over padding...
    Inside if block return ==> padding is of number data type
    Outside if block return ===> padding is of string data type
*/ 
