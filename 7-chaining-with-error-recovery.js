/**
 * In this task, we'll work with chained promises, including error recovery within the chain. 
 * You will simulate a series of asynchronous operations, where each operation depends on the previous one, 
 * but if one fails, you can handle the error and recover without stopping the entire chain.

Task: Create a function processDataWithRecovery that performs the following steps:

Step 1: Retrieve some initial data (simulate this with a promise that resolves after 1 second).
Step 2: Double the data retrieved in Step 1. If Step 1 fails, log the error and proceed with default data (e.g., default = 10).
Step 3: After doubling the data, check if it's even using checkEvenNumber.
Step 4: Log success if everything is correct, otherwise catch and handle any errors gracefully.

Instructions:
Create a function getData that returns a promise which resolves with some data (e.g., 5) after 1 second.
Chain a promise that doubles the data retrieved from getData. If getData fails, recover by using the default value of 10.
After doubling, use checkEvenNumber to check if the doubled number is even.
Ensure that the chain handles all potential errors and logs the result properly.
 */

const checkEvenNumber = require('./0-data-check-even0number')

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);  // Simulate resolving data (you can change this to reject to test error handling)
        }, 1000);
    });
}

getData()
    .then((data) => {
        return data * 2;
    })
    .catch((err) => {
        console.log('Error in getting data:', err);
        return 10 * 2;  // Recovery with default value
    })
    .then((doubledData) => {
        return checkEvenNumber(doubledData);
    })
    .then((result) => {
        console.log(result);  // Logs success if the number is even
    })
    .catch((err) => {
        console.log('Error in checking even number:', err);  // Handles rejection from checkEvenNumber
    });
