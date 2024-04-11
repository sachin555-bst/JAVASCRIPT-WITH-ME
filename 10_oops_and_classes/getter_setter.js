class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value; //set never returns
  }


  get password(){
    return `${this._password}bista`
  }

  set password(value){
    this._password= value
  }
}

const bista = new user("bista@mai.com", "abx");
console.log(bista.email);
console.log(bista.password)
