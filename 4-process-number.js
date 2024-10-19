/**
 * Now, let's explore handling a sequence of asynchronous operations where one promise depends on the result of another. 
 * This will help you practice promise chaining with dependencies between tasks.

Task: Create a function processNumbers that accepts a number, checks if it's even using checkEvenNumber, 
and if it's even, doubles the number and then checks again if the doubled number is even. 
If the doubled number is even, resolve it, otherwise reject it.

Instructions:

Inside processNumbers, first use checkEvenNumber to check if the number is even.
If the number is even, double it and then check the doubled number using checkEvenNumber again.
Return the final result or rejection after checking the doubled number.
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
function processNumbers(num){
    checkEvenNumber(num)
    .then(()=>{
        return checkEvenNumber(num*2);
    })
    .then((finalResult)=>{
        console.log(finalResult)
    })
    .catch((err)=>{
        console.log(err)
    })


}
processNumbers(10)