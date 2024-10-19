/**
 * Create a function delayedEvenCheck that takes a number and a delay time (in milliseconds). 
 * The function should return a promise that resolves or rejects after the specified delay, 
 * using checkEvenNumber to determine if the number is even.

Instructions:

Use setTimeout to create a delay.
Inside the timeout, call checkEvenNumber with the provided number.
Resolve or reject the promise based on the result after the delay.
 */
function delayedEvenCheck(num, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            checkEvenNumber(num)
                .then(result => {
                    resolve(result); // Resolve the promise with the result
                })
                .catch(err => {
                    reject(err); // Reject the promise with the error
                });
        }, delay);
    });
}

// Testing the function
delayedEvenCheck(19, 2000)
    .then(result => console.log(result))  // Should log: "failure" after 2 seconds
    .catch(err => console.log(err));

delayedEvenCheck(20, 2000)
    .then(result => console.log(result))  // Should log: "success" after 2 seconds
    .catch(err => console.log(err));
/**
 * my code
 * function checkEvenNumber (num){
    return new Promise((resolve, reject)=>{
        if(num%2==0){
            resolve("success")
        }
        else{
            reject('failure')
        }
    })
}
function delayedEvenCheck (num){
    setTimeout(()=>{
        checkEvenNumber(num)
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })

    },2000)
}
delayedEvenCheck(19)
delayedEvenCheck(20);
 */