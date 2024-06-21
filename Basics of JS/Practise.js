function x(){
    for(var i=1; i<=5; i++){
        function count(i){
            setTimeout(()=>{
                console.log(i);
            }, 1000);
        }
       count(i);
    }
console.log("hello");
}
x(); 