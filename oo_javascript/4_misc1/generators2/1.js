const genFn1 = function* (resume) {
    console.log("before");
    console.log(yield setTimeout(() => resume("hello"), 3000));
    console.log(yield setTimeout(() => resume("world"), 1000));
    console.log("after");
};
var iter;
const cb44 = msg => iter.next(msg);
function run(gen) {
    iter = gen(cb44);
    iter.next();
};

run(genFn1);