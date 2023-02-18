var output = (function(x) {
    delete x;
    return x;
})(0);
console.log(output);
