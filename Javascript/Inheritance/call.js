function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username); // must use .call(), holds reference
  this.email = email;
  this.password = password;
}

const user = new createUser("zain1", "zain@g.com", "123");
console.log(user);
