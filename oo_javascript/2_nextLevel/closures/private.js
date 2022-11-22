function Car(manufacturer, model, year, color) {
    return {
        toString22() {
            return `${manufacturer} ${model} (${year}, ${color})`
        }
    }
}

const car = new Car('Aston Martin', 'V8 Vantage', '2012', 'Quantum Silver')
console.log(car.toString22())