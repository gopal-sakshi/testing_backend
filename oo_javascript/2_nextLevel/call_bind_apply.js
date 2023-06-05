/*

function23.bind(obj11)();
    so, everywhere inside function23 ===> 'this' refers to obj11

obj11.method12.bind(obj12)();
    so, everywhere inside method12 ====> 'this' refers to obj12 and NOT obj11
    eventhough, it was obj11 that invoked method12

*/