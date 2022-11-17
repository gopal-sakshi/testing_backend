const makeBurger = () => {
    const beef = getBeef();
    const patty = cookBeef(beef);
    const buns = getBuns();
    const burger = putBeefBetweenBuns(buns, beef);
    return burger;
};

const burger = makeBurger();
console.log(burger);

function getBeef() { return '2 kg beef' }
function cookBeef(beef) { return 'boiled'+ beef }
function getBuns() { return '2 buns ' }
function putBeefBetweenBuns(buns, beef) { return beef + ' put in between ' + buns }


/*
    This is synchronous... this works...
    but lets say, getBeef() ----> is async
*/