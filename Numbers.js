//Unary plus is handy when you want to make sure you're working with a numeric value
const str='42'
const strToNum=+str
console.log(strToNum) // 42
console.log(typeof strToNum) // number
console.log(typeof str)


let getRich= true
console.log(!getRich) // true

/** for bitwise tilde(~) operator, it inverts the bits of a number. For example, 
 * ~5 will give you -6 because it 
 * flips all the bits of 5 (which is 00000101 in binary) to 11111010 
 * (which is -6 in two's complement representation).*/

let num = 5;
let invertedNum = ~num;
console.log(invertedNum); // Output: -6
/*The void keyword is a unary operator that evaluates an expression and returns undefined.*/
console.log(void 5); // Output: undefined

/*void is also commonly used in hyperlinks to prevent navigation
< a href="javascript:void(0)">click me</a>*/


//working with bitwise operators//
let a=5
let b=2
console.log(a&b) // 0
console.log(a|b) // 7
console.log(a^b) // 7
console.log(a<<b) // 20
console.log(a>>b) // 1


//Working with Conditional Logic and Math Methods//
let freecodecamp= true
if(freecodecamp) {
    console.log('I am learning JavaScript')
}
if(!freecodecamp) {
    console.log('I am not learning JavaScript')
}
if(null) {
    console.log('This will not be printed because null is falsy')
}


let score=94
if(score>=90) {
    console.log('You got an A')
}if(score<=80&&score>=70) {
    console.log('You got a B')
}if(score<=70&&score>=60) {
    console.log('You got a C')
}else if(score<=60) {
    console.log('You got a D')
}

//ternary operator
let temperature= 26
weather= temperature>25 ? 'It is hot outside' : 'It is cold outside'
console.log(weather) // It is hot outside


/* the ?? operator 
It returns the second value only if the first is null or undefined.*/

const Usersettings={
    theme: 'dark',
    notification: 'on',
    volume: '78'
}
if(Usersettings.volume>70){
    console.log('Long term high volumes will damage your ear')
}
else{
    console.log('nothing')
}


//the math function

const randomN=Math.random()
console.log(randomN)

const max=Math.max(1,4,5,7)
console.log(max)
const min=Math.min(2,8,0.4,3)
console.log(min)

const real=Math.round(6.8)
console.log(real)

//random number between 0 and 20
const NB0and20=Math.round(Math.random() *20)
console.log(NB0and20)

//Now between 2 numbers
let L=4
let M=10
const R=Math.round(Math.random() *(M-L))+L
console.log(R)


console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9

console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64