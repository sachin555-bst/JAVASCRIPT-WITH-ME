const user = {
  //object creation
  username: "Sachin",
  logincount: 9,
  signedIn: true,

  getuserdetails: function () {
    // console.log("got user details");
    // console.log(`username:${this.username}`);
    console.log(this);
  },
};
console.log(user.getuserdetails());
console.log(user.username);
console.log(this); //{} output

function user1(username, logincount, isloggedin) {
  //constructor
  this.username = username;
  this.logincount = logincount;
  this.isloggedin = isloggedin;

  this.greeting = function () {
    console.log(`welcome:${this.username}`);
  };
  // return this   //default
}

const userone = new user1("sachin", 11, true); //the use of "new" instance is very imp for every new object
const usertwo = new user1("bista", 13, false);
console.log(usertwo);
console.log(userone.constructor);
