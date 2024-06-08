async  function fetchResourse(url){
    try{
        const response = await fetch(url);
        const result = await response.json();
       // console.log(result.main);

const tempCelcius= result.main.temp;
console.log("current temperature in celcius:",tempCelcius);


    } catch (error) {
        console.error(error)
        
    }finally{
        console.log("operation finished");
    }
}
fetchResourse("https://api.openweathermap.org/data/2.5/weather?lat=8.4833&lon=76.9167&appid=5a966932a9dee63ffc52d2de719eb83a")