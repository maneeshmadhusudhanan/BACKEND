//fetch(url, [option])










fetch('https://jsonplaceholder.typicode.com/todos/13')
.then(response => response.json())
.then(json => console.log(json))
.catch(error =>{
    console.log(error);
});