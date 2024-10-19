/**
 * Task: Create a function checkMultipleNumbers that takes an array of numbers. 
 * It should use Promise.all to check if all numbers are even, using the checkEvenNumber function you already wrote.
 *  If all numbers are even, return an array of success messages. If any number is odd, it should reject.

Instructions:

Create a function checkMultipleNumbers that takes an array of numbers.
Inside the function, use Promise.all() to apply checkEvenNumber on each number.
If all numbers are even, resolve with an array of success messages.
If any number is odd, reject with an error message.
 */

function checkEvenNumber (num){
    return new Promise((resolve, reject)=>{
        if(num%2==0){
            resolve("success")
        }
        else{
            reject('failure')
        }
    })
}
function checkMultipleNumbers(numbers){
    const allNumberPromises= numbers.map((num)=>{
        return checkEvenNumber(num);
    })
    return Promise.race(allNumberPromises)
}

let numbers= [1,4,6,5];

checkMultipleNumbers(numbers)
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})