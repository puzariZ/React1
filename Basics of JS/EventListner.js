//Closure demo with Event Listner
//Example 1
// let count = 0;
// document.getElementById("clickMe")
// .addEventListener("click", function XYZ(){
//     console.log("Button Clicked", ++count);
// });

//Example 2
function attachEventListners(){
    let count = 0;
document.getElementById("clickMe")
.addEventListener("click", function XYZ(){
    console.log("Button Clicked", ++count);
});
}
attachEventListners();