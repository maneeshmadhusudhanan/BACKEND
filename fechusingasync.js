
fetch('https://jsonplaceholder.typicode.com/todos/13')
.then(response => response.json())
.then(json => console.log(json))
.catch(error =>{
    console.log(error);
}).finally()




let json= new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve('Promise,resolved')},1000);
    });


//async funtion

async function asyncFuntion(){


    // wait until the promise

    let result = await promise;

    console.log(result);
    console.log('hello');



//calling the async funtion

asyncFuntion()};