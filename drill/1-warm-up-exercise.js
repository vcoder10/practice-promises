/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

function solve(){
    console.log("Program Started")
    console.log("Program in progress...")

    return new Promise ((resolve, reject)=>{
        console.log("promise pending")
        setTimeout(()=>{
            resolve('Program complete')


        },3000)

    })
}
solve()
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(`Error in program ${err}`)
})
