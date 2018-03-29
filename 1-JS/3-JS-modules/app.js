// console.log('-app.js-');

// var myApp = myApp || {};
// myApp.mod1.doWork();


//--------------------------------------------------------------------------

// AMD 

// require(null, ['pack1/mod1'], function (m1) {
//     m1.doWork();
// });

//--------------------------------------------------------------------------

// commonJS

// console.log('-app.js-');

// let mod1 = require('./greet');
// mod1.greet();
// mod1.greet('en');
// mod1.greet('es');

//------------------------------------------------------------------

// commonJs

// let nagGreet=require('nag-march-greet');
// nagGreet.greet('en');
// nagGreet.greet('es');

//------------------------------------------------------------------

// ES modules

// import {itemName,itemPrice} from './hotel/menu';
// console.log(itemName);
// console.log(itemPrice);

// import {itemName as name,itemPrice as price} from './hotel/menu';
// console.log(name);
// console.log(price);

// import * as item from './hotel/menu';
// console.log(item.itemName);
// console.log(item.itemPrice);

// import {item} from './hotel/menu';
// // item=null;  // error ==> immutable reference

// item.price=300;


import MainCompoenent,{A,B} from './hotel/menu'