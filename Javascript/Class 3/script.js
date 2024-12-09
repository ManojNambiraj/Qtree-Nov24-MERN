// Statements:

    // 1. Conditional stmts

        // i)   if

        // let age = 15

            // if(age > 18){
            //     console.log("Your eligible");
            // }

        // ii)  if else

            // let age = 22

            // if(age > 18){
            //     console.log("Your eligible");
            // }else{
            //     console.log("Your not eligible");
            // }

        // iii) if else if

            // let age = 18

            // if(age > 18){
            //     console.log("Your eligible");
            // }else if(age == 18){
            //     console.log("equal");
            // }else{
            //     console.log("Your not eligible")
            // }

        // iv)  switch cse

            // let day = "Tuesday"

            // switch(day){
            //     case "Monday":
            //         console.log("It's Monday");
            //         break;
            //     case "Tuesday":
            //         console.log("It's Tuesday");
            //         break;
            //     case "Wednesday":
            //         console.log("It's Wednesday");
            //         break;
            //     case 4:
            //         console.log("It's Thursday");
            //         break;
            //     case 5:
            //         console.log("It's Friday");
            //         break;
            //     case 6:
            //         console.log("It's Saturday");
            //         break;
            //     default:
            //         console.log("Happy weekend");
            //         break;
            // }

// 2. Looping stmts

    // i)   for loop

    // for(stmt1; stmt2; stmt4){
        // ......stmt3......
    // }

    // stmt1: start value
    // stmt2: checking conditions
    // stmt3: executable stmt
    // stmt4: increament/ decremental

        // for(let i = 10; i >= 1; i--){
        //     console.log(i);    
        // }

    // ii)  while loop

        // let i = 10;

        // while(i < 10){
        //     console.log(i);
        //     i++;
        // }

    // iii) do...while loop

        // let i = 10;

        // do{
        //     console.log(i);
        //     i++;
        // }while(i <= 10)

// Functions: 

// 1. Normal Function:

    // function fname(a, b){
    //     return a * b;
    // }

    // let result = fname(100, 5)

    // console.log(result);

// 2. Ananymous Function: (Unnamed function)

    // let demo = function(){
    //     console.log("It's ananymous");
    // }

    // demo()

// 3. Arrow function:

    // let arr = (a) => a * 2

    // console.log(arr(50));

// 4. IIFE Function:

// (Immediatly Invoked function expression)

    // (() => {
    //     console.log("It's IIFE");
    // })()