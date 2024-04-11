const user = {
  _email: "sachin@mail.com",
  _password: "bista",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const bista = Object.create(user);
console.log(bista.email);
