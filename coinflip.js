function flipCoin(callback) {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // If the random number is less than 0.5, consider it heads, otherwise tails
    const result = randomNumber < 0.5 ? 'heads' : 'tails'; //ternery,conditional  operator

    // Call the callback function with the result
    callback(result);
}

// Example usage:
flipCoin(result => {
    console.log(`The result of the coin flip is: ${result}`);
});