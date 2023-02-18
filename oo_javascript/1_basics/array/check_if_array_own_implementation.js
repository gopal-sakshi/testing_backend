// How to check if an variable is array or not... dont use isArray() method
function isArray23(value) {
    console.log(Object.prototype.toString.call(value));
    return Object.prototype.toString.call(value) === '[object Array]';
}

console.log(isArray23([1,2,3]));
console.log(isArray23({name:'GopAL'}));