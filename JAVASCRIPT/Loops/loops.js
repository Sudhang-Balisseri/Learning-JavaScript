// *****************************************
// loops
// *****************************************

// for (let i=1; i<=5; i++)
// {
//     console.log(69);
// }

// ***********************************

// let i = 1;

// while(i<=69)
// {
//     console.log("i = ",i)
//     i++
// }

// ************************************

// let i = 1;

// do
// {
//     console.log("i = ",i)
//     i++
// }
// while(i<=69);

// *************************************

// let str = "javascript";
// let size = 0;

// for(let val of str)
// {
//     console.log("val =",val);
//     size++;
// }

// console.log("size of str = ", size);

// *************************************

// let student = {
//     name : "xyz",
//     age : 69,
//     marks : 69,
//     isPass : false,
// };

// for (let key in student)
// {
//     console.log("key = ",key, "value = ", student[key]);
// }


// ***************************************************************************************************

// some practice questions

// Q1

// for (let i=1; i<100; i++)
// {
//     if (i%2===0)
//     {
//         console.log(i)
//     }
// }

// *****************************

// Q2

let gameNum = 69;

let userNum = prompt("Guess the number: ");

while(userNum != gameNum)
{
    userNum = prompt("You entered the number wrong number.Guess again: ");
}

alert("You entered the right number")