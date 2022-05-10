const obj = {
  name: 'level 1',
  age: 35,
  person1: {
    name: 'level 2',
    age: 50,
    person2: {
      name: 'level 3',
      age: 21,
      person3: {
        name: 'level 4',
        age: 23,
      },
    },
  },
};
console.log(obj);                                   // prints only two nested levels 
console.log(JSON.stringify(obj,null,1));            // prints whole object... 
                                                        // 1 is the number of spaces to use for indentation.
console.dir(obj);                                   //  nested objects after level 2 are now flattened
console.dir(obj, {depth:null});                     // recurse indefinitely