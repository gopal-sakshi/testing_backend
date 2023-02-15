const callback = function() { console.log(`setTimeout callback context is ===>`, this); }

const ctx1 = { name: 'ctx1' };
const ctx2 = { name: 'ctx2' };

const func = function() {
  console.log('caller context is', this);
  setTimeout(callback);   
  // setTimeout(() => {
  //   callback()
  // }, 0);  
}

func.apply(ctx1);
func.apply(ctx2);