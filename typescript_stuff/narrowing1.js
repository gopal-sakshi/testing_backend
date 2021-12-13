function padLeft1(padding, input) {
    return " ".repeat(padding) + input;
}
function padLeft2(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
