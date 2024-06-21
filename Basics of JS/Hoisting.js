//Hoisting in Javascript

// getName();
// console.log(x);
// console.log(getName);
// var x = 10;
// console.log(x);
// function getName(){
//     console.log("Namaste Javascript");
// }

//Hoisting is not possible in both of the cases
// Arrow Function
// var getName = () => {
//     console.log("Namaste Javascript");
// }

// another function
// var getName = function () {
//     console.log("Namaste Javascript");
// }


// functions in JS

// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }


//Scope in JS (Lexical environment)
// function a() {
//     var x;
//     x = 10;
//     b();
//     function b(){
//         x = 1;
//         var f;
//         c();
//         function c(){
//             console.log(x);
//             console.log(f);
//         }
//     }
// }
// a();
//console.log(x);


// Temporal dead zone of "let & const"
// console.log(x);
// // console.log(y);
// var x;
// let y;
// console.log(y);
// y = 10;
// console.log(y);
// const z = 10;  // const can only be intialize during declarations
// console.log(z);
// //y = 10; let is not allowed to change its value


// Shadowing and Block Scope in JavaScript
// //Example 1
// var a = 10;
// {
//     var a = 20; // var is function scoped, so it will shadow the outer scope
//     console.log(a); // 20
// }
// console.log(a); // 20

// //Example 2
// var a = 10;
// let b = 20;
// const c = 30;
// {
//     var a = 11;
//     let b = 21;
//     const c = 31;
//     console.log(a); // 11 Global Value
//     console.log(b);  // Value Stored in Block Scope
//     console.log(c);  // Value stored in Block Scope
// }
// console.log(a); // 11 Global Value
// console.log(b);  // Value Stored in Script
// console.log(c);  // Value Stored in Script

//Example 3
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//Example 4
// var a = 100;
// let c = 50;
// function x () {
//     let c = 30;
//     console.log(c); //30
//     //console.log(window.c); //50
//     console.log(a); // 100
// }
// x();
// console.log(a); //100
// console.log(c); //50

//Lexical scope works perfectly in Blocked Scope Environment
// const z = 10;
// {
//     const z = 20;
//     {
//         const z = 30;
//         console.log(z);
//     }
//     console.log(z);
// }
// console.log(z);


//Closures in JavaScript
//Example 1
// Closures also works erfectly with Variable functions.
// function X(){
//     var b = 109;
//     var a = function Y(){
//         console.log(b);
//     };
    
//   //  Y();
//   a();
// }
// X(); //7
// console.log(a); //Error: a is not defined

//Example 2
// function f1(){
//     var a = 10;
//     function f2(){
//         console.log(a);
//     }
//     return f2; // returning function f2
// }
// f1();
// var f3 = f1(); // f3 holds the lexical value(references) of function f2.
// console.log(f3);
// f3(); //10

//Example 3

// function X(){
//     var a = 900;
//     function Y(){
//         var b = 7;
//         function Z(){
//             console.log(a , b); // Holds reference value of both variables
//         }
//         b = 700;
//         a = 9;
//         Z();
//     }
//     Y();
// }
// X(); //900 7


// setTimeout closures in JS
// JavaScript waits for no one

//Example 1
// function X(){
//     setTimeout(function (){
//         console.log(1);
//     },1000);
// }
// X();

//Example 2
// function X(){
//     for(var i = 1; i<=5; i++){  // Var is a global scope datatype so it holds same reference for every i
//         setTimeout(function (){
//             console.log(i);
//         },i * 1000);
//     }
//     console.log("Namaste Doston")
// }
// X(); // Namaste Doston 6 6 6 6 6 

//Example 3
// Let's try it with "let"
// function Z(){
//     for(let i = 1; i<=5; i++){  // coz let have a blocked scope(new reference everytime i called)
//         setTimeout(function (){
//             console.log(i);
//         },i * 1000);
//     }
//     console.log("Namaste Doston")
// }
// Z(); 


// Example 4
// Let's Try it with "var" only
function X(){
    for(var i = 1; i<=5; i++){  // 
        function close(i){   // Now everytime i will be called it will point to new reference.
            setTimeout( ()=>{
                console.log(i);
            },i * 1000);
        }
        close(i);
    }
    console.log("Namaste Doston")
}
X()


//** JS Interview feat. Closures */
//Example 1

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner; // returning inner function
// }
// outer()(); // ()()== next two lines
// var x1 = outer();
// x1(); // 10