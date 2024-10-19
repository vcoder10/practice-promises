//q1 what will be order of colsole - p1 ke bad p2 kyun run ho rha h
//q2 my que - why 2 undefined output 
Promise.resolve(50)
  .then((data) => {
    console.log("1st promise",data);
  })
  .then((data) => {
    console.log("1st promise-then-1",data);
  })
  .then((data) => {
    console.log("1st promise-then-2",data);
  });

// Promise.resolve()
//   .then(() => {
//     console.log("3rd promise-1");
//   })
//   .then(() => {
//     console.log("3rd promise-2");
//   })
//   .then(() => {
//     console.log("3rd promise-3");
//   });
