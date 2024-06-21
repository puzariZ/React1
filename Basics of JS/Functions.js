// 1** Function Statement/ Function Declaration
// A();  // Hoisting allowed
// function A(){
//     console.log("A called");
// }
//A();

// 2** Function Expression
//c(); // error c is not a function (Hoisting not allowed)
// var c = function B(){
//     console.log("B called");
// }
// c();

// 3** Anonymous Fucntion
// Anonymous functions are used in a place where functions are used as values.
// function () {

// }

// 4** Named Function expression
// var d = function xyz(){
//     console.log("d called");
// }
// d();

// 5** Difference between Parameters and Arguments?
// function E(param1, param2){ // Parameters given
//     console.log(param1, param2);
// }
// E("Hello", "World"); // Arguments 

// 6** First Class Functions/ First Class Citizens
// A function can be passed as an argument to another function. (Higher Order Function)
// Example 1
// var f = function F(param1){
//     console.log(param1);
// }
// f(function(){}); // Anonymous Function

//Example 2
// var g = function G(param2){
//     console.log(param2);
// }
// function xyz(){};
// g(xyz);

// Example 3
// var h = function H(param3){
//     return function xyZ(){

//     }
// }
// console.log(h());

// 7** Callback Functions
// A function that is passed as an argument to another function, to be executed later. (Higher Order Function)
// Can be called sometime later it the code.
//Example 1

// function X(y){
// }
// X(function y(){
//     console.log("Callback Function"); // Callback Function

// });

//Example 2
function Callback(){
    setTimeout(function(){
        console.log("Callback Function"); // Callback Function
    }, 5000);
}
function X(y){
    console.log("Kuch Bhi", y);
}
X(function y(){
  //  console.log("Callback Function"); // Callback Function

});
Callback(); // Callback Function after 5 sec