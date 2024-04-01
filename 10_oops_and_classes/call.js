function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //  setUsername(username) // this is not enough to call

  setUsername.call(this, username);
  (this.email = email), (this.password = password);
}

const bista = new createUser("bista", "bista@fb.com", "1123");
console.log(bista);
