// condtions in JS

/*  Relational operators in JS
    <   less than

    >   greater than

    <=  less thank or equal to

    >=  greater than or equal to

    ==  is equal to (compares across data types)
        1 == "1"    (this would be True)

    === is equal to (does not compare across data types)
        1 === "1"    (this would be False)

    !   logical not

    ||  logical or

    &&  logical and
*/

let num1 = 1;
let num2 = 1;

// single alt decision - if statement
if(num1 == num2)
{
    console.log("num1 and num2 are equal")
}

let num3 = 3;
let num4 = 4;

// dual alt if/else statement
if(num3 == num4)
{
    console.log("num3 and num4 are equal")
}
else
{
    console.log("num3 and num4 are not equal")
}

let num5 = 5;
let num6 = 6;

// multi alt if/else if statement
if(num5 > num6)
{
    console.log("num5 is greater than num6")
}
else if(num6 > num5)
{
    console.log("num6 is greater than num5")
}
else
{
    console.log("num5 and num6 are equal")
}

// loops in JS
for (let i = 0; i < 10; i++)
{
    console.log(i); // display the current value of i inside of the console
}

// declare an array of cohort member names
students = ["Tim B", "Stacy C", "Dylan D", "Nolan S", "Sonu O"];

// use .length property to control the number of iterations
// loop display each student's name in the array to the console
for (let j = 0; j < students.length; j++)
{
    // display each student's name by referencing the index of the student index
    console.log(students[j]);
}