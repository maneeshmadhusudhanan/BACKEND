let promise =new Promise((resolve,reject) => {
    const num = Math.random();
let a=5
if (num >=0.5){
        resolve (a);
    }else{
        reject("promiss failed");

        }
    }
);
// consol.log promiss
 promise.
 then(function(msg){

    console.log(msg);

 }).
 catch(function(ermsg){
    console.log(ermsg);
 })
 .finally(function(){

    console.log("the code executed is completed")
 })