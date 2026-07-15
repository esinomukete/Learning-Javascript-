//charCodeAt let's you get the ASCII code number for a character or symbol
let letter="A"
console.log(letter.charCodeAt(0))

let symbol="!"
console.log(symbol.charCodeAt(0))
// froomCharCode let's you get the corresponding Character or symbol from the corresponding ASCII number given
let discover= String.fromCharCode(65)
console.log(discover)
// includes() is a keyword used to look for a particular word in a sentence 
let search="I'm just getting started"
let result=search.includes("getting")
console.log(result)

let text = "Hello, JavaScript world!"
let results = text.includes("JavaScript", 7)

console.log(result); // true

//slime(n,m) is used to extract some portion of string 
let message="Witwicky is for the decepticon"
let wewant=message.slice(9,-5)
console.log(wewant)

//When you use a negative number, it counts backward from the end of the string:
message="I want to check something"
wewant=message.slice(-5)
console.log(wewant)

//How Can You Change the Casing for a String
let up="esino mukete fuh moto"
let big=up.toUpperCase()
console.log(big)

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // "i am learning javascript!"

let phrase = "JavaScript is Fun!";
console.log(phrase.toLowerCase());

let jk="  What are you  "
let k=jk.trim()
console.log(k)
k=jk.trimStart(k)
console.log(k)
k=jk.trimEnd()
console.log(k)

//string.replace(searchValue, newValue);
let original="I am the worst"
let neww=original.replace("worst","best")
console.log(neww)

original="I love Decepticons"
neww=original.replace("Decepticons","Autobots")
console.log(neww)

/* Whether you're generating repeated patterns or simply duplicating text, the repeat() method provides a simple and effective way to achieve this*/
neww=original.repeat(2)
console.log(neww)