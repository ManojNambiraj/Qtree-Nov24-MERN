/* 

    Operators:

        1) Arithmetic op

            (+, -, *, /, %, **, ++, --)

        2) Assignment op

            (=, +=, -=, *=, /=, %=, **=)

        3) Comparision op

            (==, ===, !=, !==, >, >=, <, <=, ?)

        4) Logical op

            (&&, ||, !)

        5) Bitwise op

            (&, |, ~, ^, <<, >>)

        6) Ternary op
        7) Type op


*/

// 1) Arithmetic op (+, -, *, /, %, **, ++, --)

        // let a = 5
        // let result

        // // result = a + 2
        // // result = a - 2
        // // result = a * 2
        // // result = a / 2
        // // result = a % 2
        // // result = a ** 2
        // // result = ++a 
        // // result = --a 

        // console.log(result);

// 2) Assignment op (=, +=, -=, *=, /=, %=, **=)

        // let a = 5
        // let b = 8

        // // a += b   // a = a + 3
        // // a -= b   // a = a - 3
        // // a *= b   // a = a * 3
        // // a /= b   // a = a / 3
        // // a %= b   // a = a % 3
        // a **= b   // a = a ** 3

        // console.log(a);

// 3) Comparision op (==, ===, !=, !==, >, >=, <, <=, ?)
    //   (Boolean --> true or false)

        // let age = 18
        // let result

        // // // result = (age == 18)
        // // // result = (age === 18)
        // // // result = (age != 18)
        // // // result = (age !== 18)
        // // // result = (age > 18)
        // // // result = (age >= 18)
        // // result = (age <= 18)
        // result = (age <= 18) ? "Your Eligible" : "Not Eligible"

        // console.log(result)

// 4) Logical op (&&, ||, !)

    // &&

    //   (True)  && (True)   --> True
    //   (True)  && (False)  --> False
    //   (False) && (True)   --> False
    //   (False) && (False)  --> False

        // let a = 10
        // let result

        // result = (a != 10) && (a >= 10)

        // console.log(result);


    // ||

    //   (True)  || (True)   --> True
    //   (True)  || (False)  --> True
    //   (False) || (True)   --> True
    //   (False) || (False)  --> False

        // let a = 10
        // let result

        // result = (a != 10) || (a > 10)

        // console.log(result);

    // !

    //   (True)  ----> False
    //   (False) ----> True

        // let a = 10
        // let result

        // result = (a != 10) || (a > 10)

        // console.log(!result);

// 5) Bitwise op (&, |, ~, ^, <<, >>)

// &

    //   (1) & (1)  --> 1
    //   (1) & (0)  --> 0
    //   (0) & (1)  --> 0
    //   (0) & (0)  --> 0

        // let a = 5
        // let b = 7
        // let result

        // result = a & b

        // console.log(result);

        // // Implementation

        // // a --> (5)  --> 0101
        // // b --> (7)  --> 0111
        // //    &   --------------
        // //                0101   --> 5

// |

    //   (1) | (1)  --> 1
    //   (1) | (0)  --> 1
    //   (0) | (1)  --> 1
    //   (0) | (0)  --> 0

        // let a = 5
        // let b = 3
        // let result

        // result = a | b

        // console.log(result);

        // // Implementation

        // // a --> (5)  --> 0101
        // // b --> (3)  --> 0011
        // //    &   --------------
        // //                0111  --> 7

// ~

    //    (5) -> -6

        // let a = 5
        // let result

        // result = ~a

        // console.log(result);

// ^

    //   (1) & (1)  --> 0
    //   (1) & (0)  --> 1
    //   (0) & (1)  --> 1
    //   (0) & (0)  --> 0

        // let a = 5
        // let b = 7
        // let result

        // result = a ^ b

        // console.log(result);

        // // Implementation

        // // a --> (5)  --> 0101
        // // b --> (7)  --> 0111
        // //    &   --------------
        // //                0010   --> 2

// <<

    // let a = 3
    // let result

    // result = a << 2

    // console.log(result);

    // // Implementation

    // // a --> (3) --> 00000011
    // // (1)---------> 00000110
    // // (2)---------> 00001100  --> 12

// >>

    // let a = 49
    // let result

    // result = a >> 2

    // console.log(result);

    // // Implementation

    // // a --> (3) --> 00110001
    // // (1)---------> 00011000
    // // (2)---------> 00001100  --> 12
