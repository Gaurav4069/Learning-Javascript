"use strict" //to treate all js code as newer version
// there are various data types such as number , bigint,string, boolean, object , null , undefined, symbol
// typeof null is object and type of undefined is undefined

console.log(typeof null) //object
console.log(typeof undefined)  //undefined


// conversions
// there is no strict conversion in javascript
// "33" =>33
// null => 0
// undefined =>NaN
// "33ab"=>NaN
// conversion example
let number ="33"
let valueInNumber = Number(number)
console.log( typeof valueInNumber) //here type is number 

let number1 ="33ab"
let valueInNumber1 = Number(number1)
console.log( typeof valueInNumber1)
console.log(valueInNumber1) //here type is number but value of valueInNumber1 is NaN

// Boolean Conversion
// 1=>true
// 0=>false
// ""=>false
// "Gaurav"=>true

// important conversions
console.log("1" +2 +2) //here string comes first so it will treat others as string and result will be 122
console.log(1+2+"2")  // here number comes first so it will consider the first two as number and add it then it will concatenate them as in case of string so result will be 32

// null >= 0 true
// null > 0 false
// null = 0 false
// the result is like this because comparison and equality check works differently  , comparisons convert null to a number 

// we use === for strict check it checks the values as well as the data type



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



// Memory
// there are two type of memory one is stack and another is heap
// all the primitive data types are assigned stack memory whereas all the non primitive data types are assigned heap memory
// whenever stack memory is assigned so we always get a copy of the data whereas when heap memory is assinged we get the reference of the data