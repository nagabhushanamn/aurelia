

var Rx = require('rxjs/Rx');


// // stream
// const observable = Rx.Observable.create((observer) => {
//     var n = 0;
//     let interval=setInterval(function () {
//         console.log('emitting new element into stream');
//         n++;
//         observer.next(n); // event...
//         if (n === 5){
//             observer.complete("Y r u here, go home");
//             clearInterval(interval);
//         }
//     }, 1000);
// });


// // All Numbers module

// observable.subscribe((element) => {
//     console.log('subscribing : ' + element);
// }, (error) => {
//     console.log('error callback : ' + error);
// }, (complete) => {
//     console.log('complete callback : ' + complete);
// });


// // Even Numbers

// // let evenNumbersStream = observable.filter(n => {
// //     if (n % 2 === 0) return n
// // })

// // evenNumbersStream.subscribe((element) => {
// //     console.log('subscribing even num: ' + element);
// // });

//---------------------------------


const input = $('#inp');

var obervable = Rx.Observable.fromEvent(input, 'keyup');

obervable
.debounceTime(2000)
.subscribe(() => {
    console.log('keyup....');
});