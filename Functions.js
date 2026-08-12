function identity(){
    console.log("Addition")
}
identity()

function anyName(name){
    console.log(`Hello ${name}`)
}
anyName("Esino")
anyName("Mukete")

function Addition(A,B){
    console.log(`The addition is ${A+B}`)
}
let A=2345
let B=73268
Addition(A,B)

function Subtraction(num1,num2){
return num1+num2
}
console.log(Subtraction(34,78))

function greeting(name="Guest"){
    console.log(`Hello ${name}!`)
}
greeting()

//Arrow Functions
const greetings=name=> {
    console.log(`Hello there ${name}`)
}
greetings("Esino")

const greetin = () => {
  console.log("Hello");
};
greetin()

const greet = name => console.log("Hello, " + name + "!");
greet("Trap")

let H="Hello my Future self"

const Hyu=()=>{
    console.log(`Finally ${H}`)
}
Hyu()