// for Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray1 = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray1.length; index++) {
    const element = myArray1[index];
    //console.log(element);
    
}


// Break and Continue Statement

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}



//while and do while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr1 = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr1]}`);
    arr1 = arr1 + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps => map contains key value pairs ,Maps in javascript is ordered  contains only unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// here we are injecting values in  the Map

// console.log(map);

//map is not iteratable we can use for of loop here
// for in loop can not be used here
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// for of loop does not work on objects ,for iterating objects we use for in loop

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } // for in does not work on maps since it is not iteratable
// in for in loop we get only keys but in for of loop we get both key and value 

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// for each function has access to item , index and complete array 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



// this is very basic in database we get values in array containing objects so we have to know how to loop them 
//we can use forEach loop method for the same which is very common  
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);
// here forEach do not return any value it return undefined
// so we have another method which is called filter which is same as forEach but it returns a value it also take a callback function same as forEach method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )


// for doing the same thing with forEach loop we have to use some logic we have to use if else statement here
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map also takes a callback function it is similar to forEach 
const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums)


// we can also use chaining in the methods
const newNums1 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums1);

// Chaining methods like filter() and map() in JavaScript allows you to create powerful and concise transformations on arrays. Let’s explore how to chain these methods effectively:

// Chaining filter() and map():
// Both filter() and map() do not modify the original array. Instead, they return new arrays with transformed data.
// You can chain them together to build complex transformations in a single line of code.

// Example: Filtering and Mapping:
// Suppose we have an array of numbers, and we want to:
// Filter out even numbers.
// Square the remaining odd numbers.
// We can achieve this using method chaining:

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers
//   .filter(num => num % 2 !== 0) // Filter out even numbers
//   .map(num => num * num); // Square the remaining odd numbers
// console.log(result); // [1, 9, 25]


// Explanation:
// The filter() method keeps only the odd numbers (filtering out even numbers).
// The map() method squares each remaining odd number.

// Benefits of Chaining:
// Chaining methods like this keeps the code concise and readable.
// It avoids creating intermediate arrays, improving performance.
// Remember that method chaining is a powerful technique for working with arrays in JavaScript. You can chain other array methods as needed to create more complex transformations! 😊🚀😎😎😎😎😎😎😎



const myNums1 = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums1.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);