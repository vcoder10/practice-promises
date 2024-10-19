const MyPromise = require('./1-create-own-promise')
const myPromise = new MyPromise((resolve, reject) => {
    console.log("Promise executor started");

    // Simulating async operation
    setTimeout(() => {
        const success = true;  // Try changing this to false to see rejection behavior

        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

myPromise
    .then(result => {
        console.log(result);  // This will run if the promise resolves
    })
    .catch(error => {
        console.error(error);  // This will run if the promise rejects
    });

console.log("Promise created");
