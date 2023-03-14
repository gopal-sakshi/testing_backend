var cat = { name: 'pilli12', color: 'grey' };
function swap (feline) {
    feline.name = 'pilli17';
    feline.age = 13;
    feline = { name: 'pilli18'};
}
swap(cat);
console.log(cat);