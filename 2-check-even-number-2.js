/**
Extend your checkEvenNumber function to allow promise chaining. 
After checking if the number is even, chain another promise that doubles the number and resolves with the result.

Instructions:

Modify the current .then() block to chain another promise that doubles the number.
In the first .then(), log the result (whether it’s "success" or "failure").
In the next .then(), log the doubled number if the promise resolves.
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
let val=10;
checkEvenNumber(val)
.then((result)=>{
    console.log(result)
    return (val*2);
})
.then((doubled)=>{
    console.log(doubled)
})
.catch((err)=>{
    console.log(err)
})