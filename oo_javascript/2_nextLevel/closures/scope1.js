function getName(name) {
    return function(age) {
        console.log(`${name} is ${age} years old today!`);
    }
}
const getBio = getName("Lawrence Eagles");
console.log(getBio);
getBio(6);