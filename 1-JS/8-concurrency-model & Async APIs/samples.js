


//#1
// function foo(b) {
//     var a = 10;
//     return a + b + 11;
//   }
  
//   function bar(x) {
//     var y = 3;
//     return foo(x * y);
//   }
  
//   console.log(bar(7)); //returns 42

//-------------------------------------------

// #2

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz()

//-------------------------------------------

// #3

// function foo(){
//     foo();
// }
// foo();



//-------------------------------------------

//#4
// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('long......');
//         i++
//     }
// }

// function shortRunning(){
//     console.log('short...');
// }

// longRunning();
// shortRunning()

//-------------------------------------------

// #5

/*

    <button class="veg">button-1</button>
    <button class="non-veg">button-2</button>


*/

// console.log('start.....');

// $.on('.veg','click',function vegHandler(e){
//     console.log('handling click event on .veg elements');
// });

// $.on('.non-veg','click',function nonVegHandler(e){
//     console.log('handling click event on .non-veg elements');
// });
// console.log('continue with other work...');

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('long......');
//         i++
//     }
// }
// longRunning();

//---------------------------------------------------------


// #6

console.log('start...');

// IO
setTimeout(function func1(){
    console.log('after timeout...');
},5000);
console.log('continue with other work...');

function longRunning(){
    var i=0;
    while(i<1000){
        console.log('long......');
        i++
    }
}
longRunning();
