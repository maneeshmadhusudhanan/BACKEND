let promise =new Promise(function(resolve,reject){
    const x= "greeksforgreeks";
    const y= "greeksfor-greeks";
    if (x === y){
        resolve ();
    }else{
            reject();

        }
    }
);
// consol.log promiss
 promise.
 then(function(){

    console.log('sucess,you are geek');

 }).
 catch(function(){
    console.log('some error has occured');
 });