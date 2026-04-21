let person={
    name:"John",
    age:30,
    city:"New York"
};
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.city);
typeof
console.log(typeof(person));

let numbers=[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);

let mixedArray=[1,"Hello",true,[1,2,3],{name:"Alice",age:25}];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

console.log(numbers.length);

function greet(){
    console.log("Hello World");
}
greet();

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

let divide = function(a,b){
    return a/b;
};
console.log(divide(10,2));

let sayHi = () => console.log("Hi!");
sayHi();

let square = x =>x*x;
console.log(square(4));

const greetUser = (name) =>{
    console.log(`Hello,${name}!`);
}

let newarray = [1,2,3,4,5];
let squaredArray = newarray.map((num) => num*5);
console.log(squaredArray);

let evenNumber = [1,2,3,4,5];
let filteredEvenNumbers= evenNumber.
filter(num => num %2 ===0);
console.log(filteredEvenNumbers);