class user{            //class user

    constructor(username,email,password){
        this.username= username;
        this.email= email;
    this.password= password
    }

    encryptPassword(){            //method
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const bista = new user("bista","bista@gag.com","1234")
console.log(bista.encryptPassword());
console.log(bista.changeusername());


//BEHIND THE SCENE

function user(username,email,password){
    this.username= username;
    this.email= email;
this.password= password
}

user.prototype.encryptPassword= function(){
    return `${this.password}abc`
}

user.prototype.changeusername= function(){
    return `${this.username.toUpperCase()}`
}

const sachin = new user("sachin","sachin@mail.com","12345")
console.log(sachin.encryptPassword())
console.log(sachin.changeusername())