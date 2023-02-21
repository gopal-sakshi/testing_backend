function regular() {
    const arrow = (num1, num2) => { console.log(num1+num2); console.log(arguments); };
    arrow(4,7);
}
regular('A', 'B', 'arguments property inside arrowFn point to arguments of outerFn');