let mixedObject = {

    name : "Alice ",
    age : 25,
    address : {
        street : "723 blecker street",
        city : "New York",
        country : "USA",

    },

    hobbies : ["reading","Travelling" , ()=>{console.log("Coding")}],
    greet : ()=>{
        console.log("Hello JAVA !!")
    }
}


mixedObject.hobbies.forEach(item => {
  if (typeof item === "function") {
    item();
  }
});

mixedObject.greet()

