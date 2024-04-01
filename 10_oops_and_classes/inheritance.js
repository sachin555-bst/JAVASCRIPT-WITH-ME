class user {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, email, password) {
    super(username); //super is a shorcut key in inheritance instead of call function
    this.email = email;
    this.password = password;
  }

  addcourse() {
    console.log(`A new course is added by ${this.username}`);
  }
}

const bista = new Teacher("bista", "bista@mail.com", "123");
bista.addcourse();
bista.logme()   // bista can call the logme() from the super class

const chai = new user("chai")
chai.logme()
// chai.addcourse()   //error 