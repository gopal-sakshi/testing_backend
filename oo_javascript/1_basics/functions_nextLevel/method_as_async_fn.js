const world = {
    who: 'World',
    slowGreet() { return new Promise(resolve => { setTimeout(() => resolve(`Hello, ${this.who}!`), 2000); });}
};

world.slowGreet().then((successMsg) => { console.log(successMsg) });