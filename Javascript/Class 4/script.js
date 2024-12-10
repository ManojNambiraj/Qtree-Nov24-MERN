// Array:

// const stud_height = [159, 175, 162, 168, 162, 168, 152, 150]
//                    #0   #1   #2.........................

// console.log(stud_height.length);
// console.log(stud_height);
// console.log(stud_height[1]);

// stud_height[1] = 2000

// Iterations:

// for(let i = 0; i < stud_height.length; i++){
//     console.log(stud_height[i] * 2);
// }

// Array methods: (MRF)

// map

// let ans = stud_height.map((item) => {
//     return item * 2
// })

// console.log(ans);

// let ans = stud_height.forEach((item) => {
// console.log(item);
// })

// Filter

// let ans = stud_height.filter((item) => item % 2 != 0)

// console.log(ans);

// let fruits = ["apple", "banana", "orange", "grapes"]

// let ans = fruits.filter((item) => item === "orange")

// console.log(ans);

// Reduce

// const stud_height = [159, 175, 162, 168, 162, 168, 152, 150]

// let ans = stud_height.reduce((acc, curr) => acc + curr)

// console.log(ans/stud_height.length);

// for in
// let fruits = ["apple", "banana", "orange", "grapes", "kiwi"]

// for(let i in fruits){
//     console.log(fruits[i]);
// }

// for of

// for(let i of fruits){
//     console.log(i);
// }

// Objects:

// let student1 = {
//   name: "raj",
//   age: 25,
//   dept: "abc",
//   mobile: 9876543211,
//   college: "xyz",
//   favColor: ["black", "red"],
//   address: {
//     dNo: 2,
//     street: "Neru",
//     landmark: "watertank"
//   },
//   isPresent: function(){
//     return "Present"
//   }
// };

// console.log(student1);


// Destructuring: (Unpacking)

// Array Destructuring:

    // let fruits = ["apple", "banana", "orange", "grapes", "kiwi"]

    // const [red, yellow, orange, brown, pink] = fruits

    // console.log(brown);

// Object Destructuring:

// let obj = {
//     name: "raj",
//     age: 25,
//     college: "abc",
//     dept: "xyz",
//     mobile: 9876543211
// }

// const {name, age, college} = obj

// console.log(age)

// JSON

const data = [
    {
        name: "priya",
        age: 23
    },
    {
        name: "ravi",
        age: 22
    },
    {
        name: "sam",
        age: 20
    }
]

console.log(data);
