// A variable is a container for storing data
// A variable behaves as iff it was the value that it contains

// Two steps
// 1. Declaration (var, let, const)
// 2. Assignment  (= assignment operator)

let firstName = "John"; //strings
let age = 21; //numbers
let student = true; //booleans


console.log("Hello",firstName);
console.log("You are", age, "years old");
console.log("Erolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Your are " + age + " years old";
document.getElementById("p3").innerHTML = "Erolled: " + student;
