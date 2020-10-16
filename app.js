// const math = slowMath
//   .add(6, 2)
//   .then((a) => {
//     console.log(a);
//     return slowMath.multiply(a, 2);
//   })

// slowMath.add(1,1)
// .then(a => {
//     console.log(a)
// })

//The line above is for the last step

//   .then((a) => {
//     console.log(a);
//     return slowMath.divide(a, 4);
//   })

//   .then((a) => {
//     console.log(a);
//     return slowMath.subtract(a, 3);
//   })

//   .then((a) => {
//     console.log(a);
//     return slowMath.add(a, 98);
//   })

//   .then((a) => {
//     console.log(a);
//     return slowMath.remainder(a, 2);
//   })

//   .then((a) => {
//     console.log(a);
//     return slowMath.multiply(a, 50);
//   })

//   .then((a) => {
//     console.log(a);
//     return slowMath.remainder(a, 40);
//   })

//   .then((a) => {
//     console.log(a);
//     return slowMath.add(a, 32);
//   })

//   .then((a) => {
//     console.log(a);
//     console.log(`The final result is ${a}!`);
//   });

//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//async function doMath() {
//   return Promise.resolve(a);
// }

async function doMath() {
  try {
    let math2 = await slowMath.add(6, 2);
    console.log(math2);
   
    // math2 = await slowMath.add(1, 1);
    // console.log(math2)
    // The line above is for the error!

    math2 = await slowMath.multiply(math2, 2);
    console.log(math2);

    math2 = await slowMath.divide(math2, 4);
    console.log(math2);

    math2 = await slowMath.subtract(math2, 3);
    console.log(math2);

    math2 = await slowMath.add(math2, 98);
    console.log(math2);

    math2 = await slowMath.remainder(math2, 2);
    console.log(math2);

    math2 = await slowMath.multiply(math2, 50);
    console.log(math2);

    math2 = await slowMath.remainder(math2, 40);
    console.log(math2);

    math2 = await slowMath.add(math2, 32);
    console.log(math2);

    console.log(`The Final result is ${math2}!`);
  } catch (error) {
    console.log(err);
  }
}
doMath();
