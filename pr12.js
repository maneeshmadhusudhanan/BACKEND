let promise =new Promise(function(resolve,reject){
    const a= 5;
    const b= 14;
    let c=a+b;

    if (c >=15){
        resolve ();
    }else{
            reject();

        }
    }
);
// consol.log promiss
 promise.
 then(function(){

    console.log('greaterthan:');

 }).
 catch(function(){
    console.log('lessthan:');
 });