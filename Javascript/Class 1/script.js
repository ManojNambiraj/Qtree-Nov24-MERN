// alert("hello");

// JS Old version ---> ES5
// Javascript     ---> ES6   -> Ecma Script

// Datatypes:

    // "hello"        --> String
    // 100            --> number
    // true or false  --> Boolean
    // null           --> Object
    // undefined

    // console.log(typeof x);

// Variables: --> Containers

    // Age = 10

    // console.log(Age);

    // company_employee_user_name = "raj"

    // companyEmployeeUserName = "ravi"

    // console.log(companyemployeeusername);

// Hoisting --> Variable Declaration

// var    --> ES5

    // var x = 10;    // Dev 1  --> line 2

    // var x = 500;   // Dev 2  --> line 703

    // console.log(x);

// let

    // let x

    // x = 10;

    // console.log(x);

    // x = 100

    // console.log(x);

// const

    // const x = 99

    // console.log(x);

// Scoping:  --> block

    // 1) Global Scope
    // 2) Local Scope

    // {
    //     const x = 10;

    //     console.log("inside:", x);
    // }

    // console.log("outside:", x);

    {
        {
            let x = 50
            {
                {
                    {

                        console.log(x);
                        
                        {
                            console.log(x);
                            
                        }
                    }
                }
            }
        }
    }

    console.log(x);
    