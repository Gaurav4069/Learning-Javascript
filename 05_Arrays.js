// Javascript Arrays are resizable and can contain a mix of different datatypes
// Javascript Arrays copy operations create a shallow copy
// shallow copy of an object is a copy whoes properties share the same reference point as those of the source object from which the copy was made . it means it  takes memory in heap and it is a non primitive data type
// deep copy  of an object is a copy whoes properties do not share the same reference point as those of the source object from which the copy was made
// so we use push and pop methods in array in javascript 
// similar to push and pop we have shift and unshift methods in array 
// unshift adds a value at the start of the array whereas shift removes the first element of the array 

// array
// way of declaring the array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);



// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
//join method converts arrays into string


// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);//after slice the original array remains same


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//after splice original array gets manipulated the whole portion which is spliced is removed from the original array
console.log(myn2);


// for joining or addding two arrays we have two methods first is using concat which return a new array adding the two arrays and other method is using spread operator
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// this is concat method
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // ... it is called spread operator

// console.log(all_new_heros); 




const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // here we are flating the array all the arrays will be converted into a single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // it checks whether it is an array or not
console.log(Array.from("Hitesh")) // it converts hitesh into an array
console.log(Array.from({name: "hitesh"})) // interesting here we have to tell whether we have to make array from the key or value so it will return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// this of method will convert all the arguments into an array so the expected output will be [100,200,300]
