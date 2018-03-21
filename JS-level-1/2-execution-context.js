

/*

    Execution-context/scope
    -------------------------

    memory/stack-frame with given args & locals 
    to execute instructions in seq.

    phases:

    phase-1 : context-creation / push

        => any variable declared with 'var' keyword any-where whin context,
           will get hoisted to top with default-value ( undefined )

    phase-2 : context-execution / pop

        => instructions will get execute in seq.

    --------------------------------------------------
    
    imp-notes:

    by default , 

    ==> every .js-runtime has 1 global-context / global-scope
    ==> global-context always executed by 'global-object'


    global-obj 
    -----------

        browser-envi  ==> 'window'
        Node.js       ==> 'process'

    
    --------------------------------------------------


    every function-invocation also creates new-context,
    which is child context of in-which context that function has declared.


    --------------------------------------------------

    best-practice : always declare variables at top ( global | function )


*/

// ---------------------------------------------------

// console.log(v);
// var v=12;

// ---------------------------------------------------


// var v=12;

// function f1(){
//     console.log(v);
//     var v=13;
// }

// f1();  // f1-context  <--- global-context

// ---------------------------------------------------

// Quiz:

var v=12;

function f1(){
    function f2(){
        console.log(v);
    }
    f2();
    var v=13;
} 
f1();


// ---------------------------------------------------