const thenable23 = {
    then: function(callback) {
      setTimeout(() => callback(2), 100);
    }
};
  
const thenable24 = {
    then(onFulfilled, onRejected) {
        onFulfilled(44);
    },
};

(async () => { await thenable23 } )();
(async () => { console.log(await thenable24) } )();