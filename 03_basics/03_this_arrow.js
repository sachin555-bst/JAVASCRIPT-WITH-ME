const user ={
    username :"sachin",
    price :"555",

    welcomemessage: function(){
        console.log(`${this.username} ,welcome to website`)
    }
    
}

// user.welcomemessage()
// user.username = "Sac"
// user.welcomemessage()

// console.log(this)  //output : {}



// function root(){
//     let username ="sachin"

//     console.log(this)  //all the values...global 
// }
// root()

function root(){
    let username ="sachin"
  //  console.log(this.username)  //undefined
}
root()

const root1= function(){
    let username ="sachibn"
    console.log(this.username)  //this doesnot work inside the function
    
}
root1()

//ARROW function

const chai =  () => {
    let username = "hitesh"
    console.log(this);      //undefined
}


// chai()

// const addTwo = (num1, num2) => {   //curly brackets means use return
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   //impicit arrow

// const addTwo = (num1, num2) => ( num1 + num2 )   //after arrow if small braket means no return

const addTwo = (num1, num2) => ({username: "hitesh"})  


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()