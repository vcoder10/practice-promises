/**
 * Change the processNumbers function to be an async function.
Use await to wait for the results of checkEvenNumber calls.
Handle errors using try/catch within the async function.
 */

function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
}
async function processNumbers(num) {
  try {
    const result = await checkEvenNumber(num);
    const finalResult = await checkEvenNumber(num*2);
    console.log(finalResult)
  } catch (err) {
  
    console.log(err);
  }
}
processNumbers(10);
processNumbers(15);
