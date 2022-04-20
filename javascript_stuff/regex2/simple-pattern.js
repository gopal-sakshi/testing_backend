var rgx1 = /abc/;
var l1 = 'Hi, abc do you know your abcs';
var l2 = 'The latest airplane designs evolved from slabcraft';
var l3 = 'Grab crab';
console.log(rgx1.test(l1));
console.log(rgx1.exec(l1));
console.log(rgx1.test(l3));
console.log(rgx1.exec(l3));

// test ----> returns boolean
// exec ----> returns index of the occurence