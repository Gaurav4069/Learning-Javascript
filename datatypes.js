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