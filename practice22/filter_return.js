var filter23 = [
      {
        key: "testing1",
        state: true,        
      },
      {
        key: "testing2",
        state: true,  
      },
      {
        key: "testing3",
        state: true,  
      },
      {
        key: "testing4",
        state: true,  
      },
      {
        key: "testing5",
        state: false,  
      }
]

var blah = function somefunc(key) {
    const feature = filter23.filter((feature) => {
        return feature.key === key;
    });
    console.log(feature);
    return 'hello doctor' ;
}
console.log(blah('testing5'));


