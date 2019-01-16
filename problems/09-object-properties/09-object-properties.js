/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let car = {

    horsePower: 630,
    brand: 'Lamborghini',
    material: 'carbon'


};

function objectProperties(someObj) {

    let propValue;
    for(let propName in someObj) {
        propValue = someObj[propName]
    
        console.log(propName+ ': ' + propValue);
    }

}

objectProperties(car);