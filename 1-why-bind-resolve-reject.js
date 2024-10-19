debugger;
// class Counter {
//     constructor() {
//         this.count = 0;
//     }

//     increase() {
//         this.count++;
//         console.log("Count:", this.count);
//     }

//     startCounter() {
//         // Using setTimeout without binding 'this'
//         setTimeout(this.increase, 1000);  // Issue: 'this' is lost inside setTimeout
//     }
// }

// const myCounter = new Counter();
// myCounter.startCounter();  // After 1 second, we expect 'Count: 1', but...


class Counter {
    constructor() {
        this.count = 0;
    }

    increase() {
        this.count++;
        console.log("Count:", this.count);
    }

    startCounter() {
        // Bind 'this' to ensure correct context
        setTimeout(this.increase.bind(this), 1000);  // Now 'this' refers to the instance of Counter
    }
}

const myCounter = new Counter();
myCounter.startCounter();  // After 1 second, logs 'Count: 1'
