
///let mydate = new Date()
// console.log(mydate) // output : 2024-02-05T16:23:33.817Z
// console.log(mydate.toDateString()); // output : Mon Feb 05 2024
// console.log(mydate.toLocaleString()); // output :   5/2/2024, 9:55:00 pm
// console.log(typeof mydate)          // output  : object

let mycreateddate = new Date(2023, 0, 23,5, 3)
//console.log(mycreateddate.toLocaleString())  // output  :23/1/2023, 5:03:00 am


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //javascript takes months couting from 0
console.log(newDate.getDay()+1);

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

}
)