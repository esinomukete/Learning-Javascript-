let g="Hello";
console.log(g[4])

console.log(g[g.length-1])

let fair="Mukete"
let r=fair[0]+fair[5]
console.log(r)

let name="Esino\nMukete\nFuh\nMoto"
console.log(name)

let free
free="\"she said, \"Hello\""
console.log(free)
let quote="It\'s been a pleasure working with you!."
console.log(quote)

const name1="Esino"
const name2=`Mukete ${name1}`
console.log(name2)

let n="Esino"
let a="19"
let b=`Hello my name is ${n} and I am ${a}. Nice to meet you`
console.log(b)
// template literals 
console.log(`Hello My name is Esino 
I from Cameroon
I am learning Javascript`)

//Another feature of template literals is that they allow you to embed JavaScript expressions directly within the string
let v="BMW"
let G=600 
let H="horsepower"
let price=4400
k=`If the price of a ${v} was based on the ${H}, then I am certain that it will cost
around \$${G*price}`
console.log(k)
//The indexOf() method takes two arguments: the first is the substring you want to find within the larger string, and the second is an option starting position for the search.
let R=k.indexOf("certain")
console.log(R)
//Where to begin the search 
R=k.indexOf("cost",3)
console.log(R)


