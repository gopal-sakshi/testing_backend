// deleting object properties

const x = {
    foo: 'boo',
    far: 'bar',
    faz: 'baz'
};

// we want to remove "foo" property
const { foo, ...everythingElse1 } = x;
console.log(everythingElse1);


const key = 'far';
// we want to remove "far" property
// const { [key]: value, ...everythingElse2} = x;
const { 'far': value, ...everythingElse2} = x;
console.log(everythingElse2); 

