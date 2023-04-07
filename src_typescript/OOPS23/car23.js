class Car {
    model;
    color;
    isElectric;

    constructor(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }

    drive() {
        const engineStarted = this.startEngine();
        // some method to drive after starting the engine
    }

    startEngine() {
        // some method to start the engine
        return true;
    }
}