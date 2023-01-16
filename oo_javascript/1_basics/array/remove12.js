var items = ["gopal", "priya", "sahasra", "sakshi"];
delete items[2];
console.log(items);
console.log(items.length);

// The delete operator actually does not remove the index from the array. It just makes it null.