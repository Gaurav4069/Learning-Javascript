//objects can be declared in two ways one is like literal and other is like constructor
// if we make an object with constructor it will always be singleton but if we make it using literal it will never be a singleton object
// we can not define keys in the array but here we can define keys and value related to it
// here keys are in string format

// singleton
// Object.create  this is  a constructor method

// object literals

const mySym = Symbol("key1")//declaring the symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // this is an object

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) //this is an only way to access the full name key we can not access it using . operator
// console.log(JsUser[mySym]) // this is the syntax of using the symbol
JsUser.email = "hitesh@chatgpt.com" // here we can directly change the value of the object
// Object.freeze(JsUser)  // if we use freeze method  then we can not change the values of object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());// here we are executing the function
console.log(JsUser.greeting); // here we are getting the reference of the function we are not executing the function here

// objects using constructor 
// const tinderUser = new Object() // this will also create an empty object
const tinderUser = {} // this is also an empty object so both are same but here it is not a singleton object

// here we are adding the values into the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
} // this is the example of nesting

// console.log(regularUser.fullname.userfullname.firstname);



//here we have 3 methods to join the objects 
// 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//first method same problem as array
// const obj3 = Object.assign({}, obj1, obj2, obj4) // second method its syntax is assingn(target,source ) so in this line of code {} this is a target and all the other objects are source

const obj3 = {...obj1, ...obj2} // this  is the third method we can simply use spread operator here
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// this is an array of objects so we use loops here
users[1].email // this is the way of accessing the objects inside the array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// this will return an array of keys
// console.log(Object.values(tinderUser)); // this will return an array of values
// console.log(Object.entries(tinderUser));// here each key values is kept in an array so it return array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // by using this method we are checking whether the object tinderUser has this property or not

// we can destructure both arrays and objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // here we are destructuring the course and also giving a short name/new name to courseInstructor

// console.log(courseInstructor);
console.log(instructor);



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// this is a json data . json data is nothing but it is an object without name