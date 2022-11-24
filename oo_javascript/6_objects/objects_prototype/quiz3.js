let parent = { foo: 'foo' };
let child = { };

Object.setPrototypeOf(child, parent);
console.log(child.foo); // 'foo'
child.foo = 'bar';
console.log(child.foo); // 'bar'
console.log(parent.foo); // 'foo'
delete child.foo;
console.log(child.foo); // 'foo'
parent.foo = 'baz';
console.log(child.foo); // 'baz'