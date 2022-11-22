function multiply12(a) {
  return "hello" + 'a';
}

const addNum23 = (a) => () => {
  const res = multiply12(a);
  return res;
}
console.log( addNum23(5)     );
console.log( addNum23(5)()   );

