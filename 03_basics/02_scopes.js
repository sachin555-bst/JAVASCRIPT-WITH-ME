//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);  output : 300 , bocoz a is defined at global scope and printed outside local scope
// console.log(b);   //printed outside the scope of local scope
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);   //child can acess the parent varaible 
    }
    // console.log(website);    //parents cannot access the child varaible

     two()

}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



//addTwo(5)
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))