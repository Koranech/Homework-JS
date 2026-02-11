function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity){
    this.model = model
    this.manufacturer = manufacturer
    this.yearOfManufacture = yearOfManufacture
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    }
    this.info = function (){
        console.log(`
        Модель - ${this.model}, 
        Виробник - ${this.manufacturer}, 
        Рік випуску - ${this.yearOfManufacture}, 
        Максимальна швидкість - ${this.maxSpeed} Км/год, 
        Об'єм двигуна - ${this.engineCapacity} л,
        `)}

    this.increaseMaxSpeed = function (speed) {
        let newSpeed = maxSpeed + speed
        console.log(newSpeed)
    }
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue
        console.log(newValue)
    }
    this.addDriver = function (driver){
        this.driver = driver;
        console.log(this)
    }
}

let car = new Car('Lamborghini Huracan', 'Automobili Lamborghini S.p.A.', '2020', 220, 5.2 )

car.info()

car.increaseMaxSpeed(20)
car.changeYear(2022)
car.addDriver('Anton')
console.log(car)

