// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {                         //creating object
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                //symbol making
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)           //accesing value of an key 
// console.log(JsUser["email"])       
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)            //muting the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());