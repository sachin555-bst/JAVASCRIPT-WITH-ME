const descripter = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(descripter);
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI)


const bista ={
    name : 'sachin',
    price :300,
    isAvailable : true,

    callhim: function(){
        console.log("nahi call huwa")
    }
}
console.log(Object.getOwnPropertyDescriptor(bista,"name"));

Object.defineProperty(bista,'name',{
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(bista,"name"));

for (let [key, value] of Object.entries(bista)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}