function multipleby6(num){

    return num*6
}

multipleby6.power =2    //function can act like an object
console.log(multipleby6(6))
console.log(multipleby6.power)
console.log(multipleby6.prototype)  //output :{}
 

function createuser(username,score){
    this.username=username,
    this.score= score
}

createuser.prototype.increment=function(){  //acessing the function using prototype
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const sachin = new createuser("SAchinh",23)   //new is very imp
const bista = new createuser("bista",122)

sachin.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/