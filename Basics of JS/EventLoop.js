// Event Loop
//Example 1
// Callback function stored in call back queue waiting for it's time
// Event Loop monitors closely callstack as it gets empty 
// and calls callback queue

// console.log("Start");

// setTimeout(function cbT () {
//     console.log("cb settimeout"); // CallBack queue
// }, 5000);

// console.log("End");

// Example 2
// DOM Api also goes to callback queue
// Eventloop sends to callstack according to its time of execution
// Eventloop sets the priority

// console.log("Start");

document.getElementById("clickMe").addEventListener("click", function cbF(){
    console.log("cbF Called"); // Callback function
});

// console.log("End");


//Example 3
// Concept of STARVATION and MICROTASK queue.
// In Priority 
// MICROTASK queue >> CALLBACK queue

console.log("Start");

setTimeout(function cbT () {
    console.log("cb settimeout"); // CallBack queue
}, 5000);

fetch("api.netflix.com").then(function cbF (){ // Promises goes in Microtask queue
    console.log("cbF Netflix");
});

//** Microtask queue has more priority than callback queue

//** STARVATION of Callback queue:- When Microtask queue has a task which 
// is time taking or re-generating itself then EVENT loop will wait until
// whole Microtask queue is empty then only Callback queue will goes inside
// Call Stack

console.log("End");