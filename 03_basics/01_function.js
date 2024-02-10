
function helloworld(){
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
}
//helloworld()

function addtwonum(num1,num2){

//     console.log(num1+num2)
 }
addtwonum(2,3)


 function addtwonum(num1,num2){

     let result = num1+num2
     return result
 }
// console.log(addtwonum(2,3))

function addtwonum(num1,num2){ //parameters

    return num1+num2   //after "return" no any code wil exectue
}

const result = addtwonum(2,3)  //arguments
//console.log("result:", result)


function loginusermessage(username="Sac"){  
 if(username===undefined){
    console.log("please enter a username")
    return
 }

 return `${username} just logged in`
}

//console.log(loginusermessage("sachin"))



//functios with objects and arrays

function calcuate(val1,val2,...num1){

    return num1
}
// console.log(calcuate(200,300,400,500,2000))

const user ={
    username :"sachin",
    age:23
}

function userobject(anyobject){
   // console.log(`username is ${anyobject.username} and age is ${anyobject.age}` )
}
 //userobject(user)

 //or

 userobject({
    username:"sac",
    age :
    24

 })


 //arrays

 const myarry = [12,13,14,25]

 function returnthirdvalue (getarray){

    return getarray[2]
 }

 //console.log(returnthirdvalue(myarry))

 console.log(returnthirdvalue([14,13,16,167]))