//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}// here let and const is block scoped but var is global socped so it will create a problem for programmers so we generally use  let 



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
} 
// one()

//In JavaScript, a closure is a powerful feature where an inner function has access to the variables and scope of its outer function, even after the outer function has finished executing.In this example, two() is a closure that is defined within one(). It has access to the variable name from one()'s scope, even though one() has finished execution when two() is called.

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //here we can access the value of the function  
// this is an example function declaration hoisting
function addone(num){
    return num + 1
}



addTwo(5) //here we can not access the value of the function because we hold the function into a variable
// this is an example of function expression hoisting
const addTwo = function(num){
    return num + 2
}
// here variables in javascript is so powerful that it can hold anything so these are some methods to create a function


// Function hoisting in JavaScript is a behavior where function declarations are moved to the top of their containing scope before code execution. This means you can call functions before they appear to be defined in the code. Here’s how it works:

// Function Declaration Hoisting:
// Function declarations are fully hoisted, meaning both the function’s name and body are available before the actual declaration in the code.


//hello(); // Outputs "Hello, world!"
// function hello() {
//     console.log("Hello, world!");
//   }
  
// Function Expression Hoisting:
// Function expressions are not hoisted in the same way. If a function is defined as part of an expression (including variables assigned to anonymous functions), only the variable declaration is hoisted, not the function assignment.


// hello(); // TypeError: hello is not a function
// var hello = function() {
//   console.log("Hello, world!");
// };
