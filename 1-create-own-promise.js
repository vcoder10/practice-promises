class MyPromise {
  constructor(executor) {
    // Initial state
    this.state = "pending"; // "pending", "fulfilled", or "rejected"
    this.value = undefined; // Stores the resolved value or error
    this.thenCallbacks = []; // Queue of success handlers (for then)
    this.catchCallbacks = []; // Queue of error handlers (for catch)

    // Bind resolve and reject so they can be used in the executor
    const resolve = this.resolve.bind(this);
    const reject = this.reject.bind(this);

    try {
      // Immediately execute the executor function, passing resolve and reject
      executor(resolve, reject);
    } catch (error) {
      // If an error occurs, reject the promise
      this.reject(error);
    }
  }
  // created my own basic resolve and reject
//   resolve(value){
//     console.log(value)
//   }
//   reject(err){
//     console.log(err)
//   }

  // Method to move the promise from 'pending' to 'fulfilled'
  resolve(value) {
    // Only resolve if the state is still pending
    if (this.state !== "pending") return;

    // Update the state and value
    this.state = "fulfilled";
    this.value = value;

    // Execute all .then() handlers asynchronously
    // setTimeout(() => {
      this.thenCallbacks.forEach((callback) => callback(this.value));
    // }, 0);
  }

  // Method to move the promise from 'pending' to 'rejected'
  reject(error) {
    // Only reject if the state is still pending
    if (this.state !== "pending") return;

    // Update the state and value
    this.state = "rejected";
    this.value = error;

    // Execute all .catch() handlers asynchronously
    setTimeout(() => {
      this.catchCallbacks.forEach((callback) => callback(this.value));
    }, 0);
  }

  // Custom .then() method
  then(onFulfilled) {
    // Add the callback to the queue
    if (this.state === "fulfilled") {
    //   setTimeout(() => {
        onFulfilled(this.value); // Execute immediately if already fulfilled
    //   }, 0);
    } else if (this.state === "pending") {
      this.thenCallbacks.push(onFulfilled); // Store for later execution
    }

    // Return "this" so .then() is chainable
    return this;
  }

  // Custom .catch() method

  catch(onRejected) {
    // Add the callback to the queue
    if (this.state === "rejected") {
      setTimeout(() => {
        onRejected(this.value); // Execute immediately if already rejected
      }, 0);
    } else if (this.state === "pending") {
      this.catchCallbacks.push(onRejected); // Store for later execution
    }

    // Return "this" so .catch() is chainable
    return this;
  }

}

// const p1= new MyPromise((resolve, reject)=>{
//     // do some asyn task

//     let fulfilled=false;
//     if(fulfilled){
//         resolve('get the data')
//     }
//     else{
//         reject('there is error')
//     }

// });
// console.log(p1)
// console.log(typeof Promise)
module.exports= MyPromise;






/**
 * ek ye bhi then ka code mila jo sahi lag rha h
 * then(onFulfilled) {
        // Create a new promise to return
        const newPromise = new MyPromise((resolve, reject) => {
            // Push the callback to the thenCallbacks array
            this.thenCallbacks.push((value) => {
                try {
                    const returnValue = onFulfilled(value);
                    // Check if returnValue is a promise
                    if (returnValue instanceof MyPromise) {
                        returnValue.then(resolve, reject); // Link new promise to returnValue
                    } else {
                        resolve(returnValue); // Resolve with non-promise value
                    }
                } catch (error) {
                    reject(error); // Catch any errors and reject the promise
                }
            });
        });
        return newPromise; // Return the new promise
    }
 */

    
// const p1= new Promise((resolve, reject)=>{
//     console.log("Befor resolve")
//     resolve('Success!!!')
//     console.log("After resolve")

// })

// p1.then((data)=>{
//     console.log("Handled value: ", data)
// }) 




