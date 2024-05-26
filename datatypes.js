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
