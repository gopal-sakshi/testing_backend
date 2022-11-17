function add(x, y) {
    return x + y;
}
let result = add(10,20);
console.log(result); // 30
console.log(result.target);

let obj = new add(10,20);
console.log(obj);
console.log(obj.target);
