/**
 * Combining Promises with Promise.allSettled
Task: Create a function checkMultipleNumbersWithDelay that takes an array of numbers and a delay time. 
This function should check each number for evenness after the specified delay, 
and use Promise.allSettled to wait for all checks to complete. 
Finally, return an array of results that includes both resolved and rejected promises.

Instructions:

Use delayedEvenCheck to check each number in the input array after the specified delay.
Use Promise.allSettled to wait for all promises to either resolve or reject.
Return an array of results that contains objects with the status ("fulfilled" or "rejected") and value or reason.
 */
let numbers = [2, 4, 6, 8];
function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
}
function delayedEvenCheck(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      checkEvenNumber(num)
        .then((result) => {
          resolve(result); // Resolve the promise with the result
        })
        .catch((err) => {
          reject(err); // Reject the promise with the error
        });
    }, delay);
  });
}
function checkMultipleNumbersWithDelay(numbers, delay) {
  let allPromises = numbers.map((num) => {
    return delayedEvenCheck(num, delay);
  });
  return Promise.allSettled(allPromises); // Use allSettled here instead of all
}

// Test the function
checkMultipleNumbersWithDelay(numbers, 2000).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(`Success: ${result.value}`);
    } else {
      console.log(`Failure: ${result.reason}`);
    }
  });
});

checkMultipleNumbersWithDelay([3, 4, 7], 2000).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(`Success: ${result.value}`);
    } else {
      console.log(`Failure: ${result.reason}`);
    }
  });
});
