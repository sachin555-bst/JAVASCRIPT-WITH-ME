//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [2,4,3,5,6,7]
for (const num of arr) {
   // console.log(num)
}

const greeting ="hello man"

for (const greet of greeting) {
   // console.log(`the char is :${greet}`)
}


//MAPS

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")

map.set('Fr', "France")
map.set('IN', "India")

//console.log(map)   //map() prints the unique key and values 

// for (const key of map) {
//     console.log(key)        gives an arrays of objects
// }

for (const [key,value] of map) {
 //   console.log(key, ':-',value)
}

const myObject = {    //myobject is not iterable
    game1: 'NFS',
    game2: 'Spiderman'
}  

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }