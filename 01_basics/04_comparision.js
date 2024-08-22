console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); //== attempts to convert the types and compare operands that are of different types.
console.log(null >= 0); //Type Conversion: In JavaScript, when you compare values of different types using relational operators like >=, the engine first converts them to numbers.// null is converted to 0.
// 0 is already a number.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);  //=== compares both's value and type  while == checks only the value coz it converts 
