function* generator(i) {
    yield i;
    yield i + 10;
    yield "gopal";
    return "end anta babai"
}

const gen = generator(10);
console.log(gen.next());                    // expected output: 10
console.log(gen.next());                    // expected output: 20
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
