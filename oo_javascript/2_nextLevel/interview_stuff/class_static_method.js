class Tiger {
    static lifeExpectancy = 20;                 // all "Tiger objects" will share the same property
}

let peddaPuli1 = new Tiger();
peddaPuli1.lifeExpectancy = 343;
console.log(peddaPuli1.lifeExpectancy, Object.getPrototypeOf(peddaPuli1).lifeExpectancy);
console.log(Tiger.lifeExpectancy);