


var myFunctions = [];



//----------------------------------------

function getF(i) {
    var newF = function () {
        console.log(i);
    }
    return newF;
}

for (var i = 0; i < 2; i++) {
    myFunctions.push(getF(i));
}
//----------------------------------------

myFunctions[0]();
myFunctions[1]();