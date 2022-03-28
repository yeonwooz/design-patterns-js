const storage = {
  Lambo1: {
    model: 'Lamborghini_Aventador_LP_700-4',
    year: 2022,
    miles: 100000
  }
}

class Car {
  constructor(targetCar) {
    this.model = storage[targetCar].model
    this.year = storage[targetCar].year
    this.miles = storage[targetCar].miles
  }

  toString() {
    return `${this.model}/${this.year}/${this.miles}`
  }
}

export { Car }