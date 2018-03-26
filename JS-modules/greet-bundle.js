(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

let nagGreet=require('nag-march-greet');
nagGreet.greet('en');
nagGreet.greet('es');

//------------------------------------------------------------------
},{"nag-march-greet":4}],2:[function(require,module,exports){

// var myApp = myApp || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };

//     myApp.mod2 = o; // export

// })();


//-----------------------------------------------------

// AMD spec

// define('pack1/mod2', [], function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     return o; // public
// });

//-------------------------------------------------------------

// commonJS spec

console.log('-greet/en.js-');

var message="Hello";
function greet(){
    console.log(message);
}

module.exports=greet;

//-------------------------------------------------------------
},{}],3:[function(require,module,exports){

// var myApp = myApp || {};

// (function () {

//     let private=123;
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };

//     myApp.mod3 = o; // export

// })();


//-----------------------------------------------------

// AMD spec

// define('pack1/mod3', [], function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     return o; // public
// });


//-------------------------------------------------------------

// commonJS spec

console.log('-greet/es.js-');

var message="Ola";
function greet(){
    console.log(message);
}
module.exports=greet;

//-------------------------------------------------------------
},{}],4:[function(require,module,exports){

// var myApp = myApp || {};

// (function () {

//     myApp.mod2.doWork();
//     myApp.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };

//     myApp.mod1 = o; // export

// })();

//-----------------------------------------------------

// AMD spec

// define('pack1/mod1', ['pack1/mod2', 'pack1/mod3'], function (m2, m3) {
//     var private = 123;
//     m2.doWork();
//     m3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     return o; // public
// });

//-------------------------------------------------------------------------

// commonJS spec

console.log('-greet/index.js-');

var en = require('./en');
var es = require('./es');

function greet(lang) {
    if (lang === 'en') {
        en();return;
    }
    if (lang === 'es') {
        es();return;
    }
    console.log('provide lang input for customized greetings');
}

module.exports = {
    greet
};
},{"./en":2,"./es":3}]},{},[1]);
