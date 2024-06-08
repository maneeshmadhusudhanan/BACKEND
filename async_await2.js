let promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve('Promise,resolved')},7000);
    });
    


//async funtion

async function asyncFuntion(){


    // wait until the promise

    let result = await promise;

    console.log(result);
    console.log('hello');

}

//calling the async funtion

asyncFuntion();