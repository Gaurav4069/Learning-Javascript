const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// in browser window is the global object but in the node environment and empty object is the global object

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// In JavaScript, the this keyword is a reference to the context in which the current code is executing. It behaves differently depending on where it is used:

// Global Context:
// When used in the global context, outside of any function, this refers to the global object.
// In a browser, the global object is window, so this would refer to window.

// Function Context:
// Inside a regular function, the value of this depends on how the function is called.
// If the function is called as a method of an object, this refers to that object.
// If the function is called as a standalone function, this refers to the global object (non-strict mode) or undefined (strict mode).

// Constructor Context:
// In a constructor function, this refers to the newly created object instance when the constructor is called with new.

// Class Context:
// Inside a class method, this refers to the instance of the class.

// Arrow Functions:
// Arrow functions do not have their own this context; instead, they inherit this from the parent scope at the time they are defined.

// Event Handlers:
// In event handlers, this refers to the element that received the event.

// Manual Context Assignment:
// You can manually set the context of this using methods like .bind(), .call(), and .apply()





// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
//here we do not have to use return keyword since it is a one line statement

// const addTwo = (num1, num2) => ( num1 + num2 )
// if we wrap the code into the brackets then we do have to use the return keyword 
// if we use curly braces then we have to use return keyword 

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()