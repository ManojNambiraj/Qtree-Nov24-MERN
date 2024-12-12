// Callback Functions:

// function display(result){
//     console.log(result);
// }

// function sum(a, b, display){
//     let result = a + b

//     display(result);
// }

// sum(10, 5, display);

// let arr = ["apple", "banana", "grapes"]

// arr.map((item) => {
//     console.log(item);

// })

// const demo = () => {
//     console.log("hello");

// }

// setInterval(demo, 2000);

// Promise

async function demo(){
    let myPromise = new Promise(function (resolve, reject) {
      let x = 10;

      if (x == 10) {
        resolve("True");
      } else {
        reject("Something went wrong");
      }
    });

    let result = await myPromise
      .then((data) => {
        return data
      })
      .catch((err) => {
        return err
      });

      console.log(result);
}

demo()