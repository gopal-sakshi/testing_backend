// Maps ===> [key, value]  key can be any datatype - 

const fruits1 = new Map(
    [   ["apples", 500], ["bananas", 300], ["oranges", 200], ]
);


const fruits2 = new Map();
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);

console.log("size ===> ", fruits1.size, fruits2.size);
console.log("has ====> ", fruits1.has("apples"), fruits2.has("bananas"))

// it'll be value-key (not key-value)
fruits2.forEach((value, key) => {
    console.log("v-k ===> ", value, key)
});


console.log("keys ===> ", fruits2.keys());
console.log("values ===> ", fruits2.values());
console.log("entries ===> ", fruits2.entries());

