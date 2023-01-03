const decoratorA = (someBooleanFlag: boolean) => {
    return (target: Function) => {
    }
}

@decoratorA(true)
class Person { }