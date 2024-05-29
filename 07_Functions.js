function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}// this is a basic function and the curly braces is the scope of function

// sayMyName()
//here sayMyName is reference and sayMyName() is its execution



//this is a basic function =>
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



// Arguments and Parameters
// when we declare a function then data types in the function is called parameters like in the below function number1 and number2 is parameter but when we call the function then we pass the values at that time it is called arguments..



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}



// if we write anything below return it will not be executed
// we can only hold the values  of a function when we know the return type of the function
//in the below example addTwoNumber returns a number so we can hold it into a variable say result
const result = addTwoNumbers(3, 5)


function loginUserMessage(username = "sam"){
    //we can also give the if condition like username === undefined
    //there are some defined values which means false like undefined  ,""
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`//this is string interpolation
}
//in this function if we donot pass anything like loginUserMessage() then the output will be undefined just logged in  , it will not give null
// to avoid the condition that the user will not pass any arguments in the function we give some default values to it here username ="sam" is the default value

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//for a shopping cart in the cart section we do not know how many arguments will come so we have this method to add the values of a cart products
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
// here ... is called rest operator which means to keep all the arguments into an array then we can calculate its price by using loops in arrays



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)


handleObject({
    username: "sam",
    price: 399
})//here we can directly pass the object into the function


 // we can also pass array into the function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));