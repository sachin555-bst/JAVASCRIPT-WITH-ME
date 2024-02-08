//const myname = new Object();  //singleton

const myname2 = {};

// console.log(myname)   //empty object ={}
// console.log(myname2)  //empty object ={}

myname2.id = 232;
myname2.email = "Sachin@gmail.com";
myname2.name = "bista";
// console.log(myname2)


//objects inside objects

const mydetails = {
  email: "Sachinbista@mail.com",
  fullname: {
    username: {
      firstname: "sachin",
      lastname: "bista"
    }
  }
}

//console.log(mydetails.fullname.username.lastname)

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)

// +++++++--spread operator--+++
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

//arrays objects

const arr =[

  {
    email:"Safdfds",
    id :"dfds22"
  },
  {
    email:"Safdfds",
    id :"dfds22"
  },
  {
    email:"Safdfds",
    id :"dfds22"
  },
  {
    email:"Safdfds",
    id :"dfds22"
  },
  {
    email:"Safdfds",
    id :"dfds22"
  },
]
const ans = arr[1].email
//console.log(ans)

 console.log(myname2)
 console.log(Object.keys(myname2))  //very imp method
 console.log(Object.values(myname2))
 console.log(Object.entries(myname2))
 console.log(myname2.hasOwnProperty('email'))
