// https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/

// forEach(), reduce(), map() ========> these are all higher order functions
// functions that perform operations on other functions.


// custom higher order function

const str23 = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function map23(array23, fn) {
    const newArray = [];
    for (let i = 0; i < array23.length; i++) { newArray.push(fn(array23[i])); }
    console.log(newArray);
    return newArray;
}
const lenArray = map23(str23, function (item) { return item.length; });