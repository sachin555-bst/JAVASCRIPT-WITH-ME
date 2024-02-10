
//destructing is accesed by using {}
const newobj ={

    name:"sachin",
    id :"dfd22",
    mail :"dfkfd@gmail.com"
}

// console.log(newobj.mail)  //old method

const {mail}= newobj    //destructing method 
//console.log(mail)
const {mail :m} = newobj
//console.log(m)


