// console.log("This is JS6.js file.");

// function greet(num){
// function greet(nm, greetText){
function greet(nm, greetText="How are you?"){
    // console.log( nam +", good morning.");
    console.log( nm +", good morning. "+ greetText);
}
let greetText = "Greeting of the day."
let nam = "Rumana";
let nam1 = "Ruma";
let nam2 = "Ruman";
let nam3 = "Romana";
// console.log(nam + "is a quick leraner");

// greet(nam);
// greet(nam1);
// greet(nam2);
// greet(nam3);

// greet(nam, greetText);
// greet(nam1, greetText);
// greet(nam2, greetText);
// greet(nam3, greetText);

greet(nam, greetText);
greet(nam1, greetText);
greet(nam2, greetText);
greet(nam3 );

function sum(a , b, c){
    d= a+b+c;
    return d;
}
let result= sum(1,2,3)
console.log(result);