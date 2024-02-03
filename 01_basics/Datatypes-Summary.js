//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id)
console.log(anotherId)

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(myObj)

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//-------------stack(premitive ) and HEAP(non-primitive)

            
            //--STACK--

let myname= "Sachinbista"

let anothername = myname;

anothername = "bistasachin"

console.log(myname)    //name remains same
console.log(anothername)  //name remains the same


                 //--HEAP--

let userone ={

    email: "sachin@google.com"
}

let usertwo = userone
usertwo.email = "dfjf@google.com"

console.log(userone) //userone email got the usertwo mail 
console.log(usertwo)  // its means in heap the value are assigned by the reference 


