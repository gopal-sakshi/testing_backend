// Outer function() with single inner function()

function hypotenuseLength(base, height) {
    function square(side) {
        return side * side;
    }
    return Math.sqrt(square(base) + square(height));
}

const result = hypotenuseLength(3,4);
console.log(result);

