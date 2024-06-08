let mypromise = new promise((resolve, reject) {
    setTimeout() => {
        resolve("hello from the promis!");

    },2000
});

mypromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
