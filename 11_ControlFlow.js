// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");


// comparison operators
// <, >, <=, >=, ==, !=, ===, !==
// the condition must be true then only the code inside the if statement will be executed



// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}




// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}





const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// Nullish Coalescing Operator (??):
// The nullish coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.
// It is specifically designed to handle cases where you want to provide a default value only if the original value is null or undefined.

// const nullValue = null;
// const emptyText = "";
// const someNumber = 42;
// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;
// console.log(valA); // "default for A"
// console.log(valB); // "" (empty string is not null or undefined)
// console.log(valC); // 42



// Ternary Operator (? ... :):
// The ternary operator is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false.
// It has the form: condition ? expr1 : expr2.

// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // "Yes"


// Comparison:
// The nullish coalescing operator focuses on nullish values (null or undefined).
// The ternary operator is more general and can handle any condition.
// Use the nullish coalescing operator when you specifically want to handle nullish values.
// In summary, use the nullish coalescing operator when dealing with default values for nullish cases, and use the ternary operator for general conditional expressions. Both operators have their specific use cases! 