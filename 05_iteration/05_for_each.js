const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  //no need to mention function name as in call back function
  //console.log(val);
});

coding.forEach((item) => {
  //arrow function
  //console.log(item)
});

//by function referece

function printme(item) {
  // console.log(item)
}

coding.forEach(printme);
coding.forEach((item, index, arr) => {
  //console.log(item,index,arr)
});

const mycoding = [    //arr objects
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
]

mycoding.forEach((i)=>{
    console.log(i.languageName);
})
