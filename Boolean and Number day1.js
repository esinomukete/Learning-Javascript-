//Compound Assignment Operators in JavaScript
//operation on a variable followed by storing the result in that same variable

let x=3
x+=2
console.log(x)
x-=3
console.log(x)
x*=24
console.log(x)
x/=2
console.log(x)


let G=24
G%=4
console.log(G)
let Y=3
Y%=2
console.log(Y)
G**=2
console.log(G)


//Boolean

let areYouPrime= true
console.log(areYouPrime)

let validAid= true
if(validAid){
    console.log("You are eligible to apply for aid")
}else {
    console.log("You are not eligible to apply for aid")
}

console.log(5=="5")
//This differs from the strict equality operator
console.log(5 === '5'); // false

let Hannah=25
let Mobia=24
console.log(Hannah!=Mobia)
console.log(5 === '5'); // false
//You can use the Boolean() function to check the truthiness of a value
const truthyOrFalsy = true;

console.log(Boolean(truthyOrFalsy));

/**Falsy values are values that evaluate to false in a boolean context. Examples of falsy values are:

"" (empty string)
0
false
null
undefined
NaN **/




