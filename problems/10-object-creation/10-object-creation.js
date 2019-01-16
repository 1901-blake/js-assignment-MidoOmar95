/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let car = {

    horsePower: 630,
    brand: 'Lamborghini',
    material: 'carbon'


};

// console.log(car);
// console.log(`the bike material is: ${car.material}`);
// console.log(`the number of horsepower is ${car["horsePower"]}`);
// car.height = 24;
// console.log(`car height: ${car.height}`);

function Car(horsePower, brand, material) {

    this.horsePower = horsePower;
    this.brand = brand;
    this.material = material;

    this.ride = () => {
        console.log('You rode the car!')
    }

};

// let myCar = new Car(600,'Ferrari','carbon fiber');
// let otherCar = new Car(570,'McLaren','steel');
// console.log(myCar);
// console.log('otherCar: ', otherCar);
// myCar.ride();


class Car2 {
    constructor(horsePower, brand, material) {

        this.horsePower = horsePower;
        this.brand = brand;
        this.material = material;
  
    }
    ride(){
        console.log('You rode the car.');
    }
}


// let myCar2 = new Car2 (3,7,'carbon');
// console.log(myCar2);
// myCar2.ride();