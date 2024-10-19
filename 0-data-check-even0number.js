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

module.exports= checkEvenNumber;