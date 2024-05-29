// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// here we use the semicolon explicitly because this function does not know when to stop so to stop them we have to use the semicolon 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It’s a powerful and versatile construct with several use cases. 
// Creating a Local Scope:
// IIFEs are commonly used to create a private scope for variables and functions.
// By wrapping code in an IIFE, you prevent variables from polluting the global scope.


// (function() {
//   // Local scope
//   var secret = 'I am hidden';
//   console.log(secret);
// })();
// // console.log(secret); // Throws an error (secret is not defined)


// Avoiding Global Namespace Pollution:
// In large applications, limiting the number of global variables is crucial.
// IIFEs allow you to encapsulate code and avoid conflicts with other libraries or scripts.

// (function() {
//   // Your module-specific code here
// })();
