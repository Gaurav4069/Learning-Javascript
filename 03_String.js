const name = "Gaurav"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //  ` ` this symbol is known as backticks

// we can also declare string by using the new keyword
const gameName = new String("Gaurav-singh")
// one way to access the prototype is __proto__

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString); //it gives answer Gaur  i.e. first four digits

const anotherString = gameName.slice(0, 4) //we can also give negative values also
console.log(anotherString);

const newStringOne = "   Gaurav    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it trims the spaces from front and back

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // it replaces %20 with - in the above url

console.log(url.includes('sundar')) // it checks whether the url contain sundar or not so it gives false 

console.log(gameName.split('-')); // it splits the string on the basis of -