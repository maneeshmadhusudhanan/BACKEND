function greetAsync(name,callback){
    console.log("hello,"+name+"!");
    setTimeout(callback,1000);//schedule call execution
    console.log("i came before call back ")
}

function sayGoodbye(){
    console.log("goodbye");

}
greetAsync("bob",sayGoodbye);//asyncronus call,