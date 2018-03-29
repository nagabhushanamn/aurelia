interface Wheel{
    rotate:()=>void
}

// dependency
class MRFWheel implements Wheel{
    rotate() {
        console.log('MRF wheel rotating....');
    }
}
class CEATWheel implements Wheel{
    rotate() {
        console.log('CEAT wheel rotating....');
    }
}
//dependent
class Car {
    move(wheel: Wheel) {
        wheel.rotate();
        console.log('car is moving...');
    }
}
let car = new Car();
car.move(new MRFWheel());
car.move(new CEATWheel());