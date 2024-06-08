function asyn(name,mul){
    console.log("Hi, My name is" +name);
    setTimeout(mul, 2000);
}

function mul(){
    let a=5,b=10;
    let c=a*b;
    console.log(c);
}
asyn("Maneesh",mul);