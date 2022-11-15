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

var res1 = filter23.filter((feature) => {
  return feature.key === 'testing5';
});

console.log(res1);