function padLeft1(padding: number | string, input: string) {
    return " ".repeat(padding) + input;
}

function padLeft2(padding: number | string, input: string) {
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