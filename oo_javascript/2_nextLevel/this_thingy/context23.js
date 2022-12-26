const callback = function() {
    // console.log(`setTimeout callback context is ===> ${this}`);
    console.log(`setTimeout callback context is ===>`, this);
    // value of this in the callback of setTimeout() might differ depending on when setTimeout() is called
}

const ctx1 = { name: 'ctx1' };
const ctx2 = { name: 'ctx2' };

const func = function() {
  console.log('caller context is', this);
  setTimeout(callback);
}

func.apply(ctx1);
func.apply(ctx2);