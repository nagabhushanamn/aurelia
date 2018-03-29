// dependency
var MRFWheel = /** @class */ (function () {
    function MRFWheel() {
    }
    MRFWheel.prototype.rotate = function () {
        console.log('MRF wheel rotating....');
    };
    return MRFWheel;
}());
var CEATWheel = /** @class */ (function () {
    function CEATWheel() {
    }
    CEATWheel.prototype.rotate = function () {
        console.log('CEAT wheel rotating....');
    };
    return CEATWheel;
}());
//dependent
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function (wheel) {
        wheel.rotate();
        console.log('car is moving...');
    };
    return Car;
}());
var car = new Car();
car.move(new MRFWheel());
car.move(new CEATWheel());
