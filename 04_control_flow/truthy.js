const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values(returns false when pass as it is)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values(returns true when assign as it is)
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// The ?? operator checks if the value on its left side is null or undefined. If it is, it returns the value on its right side (the default value). If the value on the left side is anything other than null or undefined, it returns that value.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20  //10 , nearer value is assigned
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")