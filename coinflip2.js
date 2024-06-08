function flip(coinflip){
    console.log("")
    setTimeout(coinflip,5000);

}
function coinflip(){
    let coin=Math.random()
    if(coin<0.5){
        console.log("HEAD")
    
    }else{
        console.log("TAIL")
    }
}flip(coinflip)
