class Car{
   constructor (model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity){
       this.model = model
       this.manufacturer = manufacturer
       this.yearOfManufacture = yearOfManufacture
       this.maxSpeed = maxSpeed
       this.engineCapacity = engineCapacity
    }

    drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    }
    info = function (){
        console.log(`
        Модель - ${this.model}, 
        Виробник - ${this.manufacturer}, 
        Рік випуску - ${this.yearOfManufacture}, 
        Максимальна швидкість - ${this.maxSpeed} Км/год, 
        Об'єм двигуна - ${this.engineCapacity} л,
        `)}

    increaseMaxSpeed = function (speed) {
        let newSpeed = this.maxSpeed + speed
        console.log(newSpeed)
    }
    changeYear = function (newValue) {
        this.yearOfManufacture = newValue
        console.log(newValue)
    }
    addDriver = function (driver){
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

