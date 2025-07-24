let name="Bipin"
let age=25;
let isStudent=true;
let hobbies=["reading", "coding", "gaming"];
let address={city:"Kathmandu", country:"Nepal"};

function displayInfo() {
    console.log("Name:" +name);
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is Student:", isStudent);
    console.table(hobbies);

}



displayInfo();

let a=10;
let b=10;
let sum=a+b;

console.log("Sum of a and b is:", sum);

let multiply =a*b;
console.log("Multiplication of a and b is:", multiply);


if(a > b) {
    console.log("a is greater than b");
}
else if(a < b)
{
    console.log("b is greater than a");
}
else {

    console.log("a equal to b");
}


//node tests/practiceJs/Variables.js