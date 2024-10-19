/**
Create a function checkEvenNumber that accepts a number as an argument.
Inside the function, return a promise:
If the number is even, resolve the promise with a success message.
If the number is odd, reject the promise with an error message.
Call checkEvenNumber with both an even and odd number to see both success and failure cases.
Use .then() to handle the resolved case and .catch() to handle the rejected case.
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
checkEvenNumber(10)
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})