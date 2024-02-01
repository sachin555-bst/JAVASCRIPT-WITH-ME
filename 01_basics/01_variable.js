const accountId = 144553 
let accountEmail = "sachin@google.com"
var accountPassword = "12345567"
accountCity = "maniaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sc@hc.com"
accountPassword = "34534534"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])