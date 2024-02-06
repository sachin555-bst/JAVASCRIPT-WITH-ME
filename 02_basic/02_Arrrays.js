 const marvel_heros = ["dr.strange","ironman","spiderman"]
 const dc_heroes = ["superman","batman","flash"]

//  marvel_heros.push(dc_heroes)
//  console.log(marvel_heros)   // this is a bad practice to merge two arrays as it add arrays inside arrays


// const all_heroes = marvel_heros.concat(dc_heroes)   //this is easy to add two arrays to create a new array
// console.log(all_heroes)

// +++++++++++++++--spread--++++++++++
const all_heroes = [...marvel_heros,...dc_heroes]  // this will contact any number of arrays to give new array
// console.log(all_heroes) 

const new_Array = [1,2,4,[5,6,7],8,[9,10,[11,12]]]
const new_Array2 =  new_Array.flat(Infinity)  // Returns a new array with all sub-array elements concatenated into it 
// console.log(new_Array2)

console.log(Array.isArray("saxhin"))
console.log(Array.from("Sachin"))  //converts the given string/object into array
console.log(Array.from({name:"Sachin"})) //output : []  coz we need to specify which (key/value ) need to convert into array

const num1 = 100
const num2 = 200
const num3= 300
console.log(Array.of(num1,num2,num3))  //create a new array 