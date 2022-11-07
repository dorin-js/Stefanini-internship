/* *********************** JavaScript Fundamentals *********************** */


// -------- Hello world --------
alert("I'm javascript");

// -------- Variables --------
// 1.
let admin;
let name;
namee = "John";
admin = namee;
alert(admin);

// 2.
let ourPlanetName = "Earth";
let currentVisitorName = "John";

// 3.
const BIRTHDAY = "18.04.1982"; // YES (alias for hard-coded value)
const AGE = someCode(BIRTHDAY); // NO (becuase it is not known prior to the execution)


// -------- Data types --------
// What is the output?
let name2 = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name2}`); // hello Ilya

// -------- Interaction: alert, prompt, confirm --------

// Create a web-page that asks for a name and outputs it.
let userName = prompt("What is your name?", "");
alert(userName);


// -------- Basic operators, maths --------

// 1. What are the final values of all variables a, b, c and d after the code below?
let a = 1,
  b = 1;
let c = ++a;
let d = b++;
// a = 2; b = 2; c = 2; d = 1;

// 2. What are the values of a2 and x after the code below?
let a2 = 2;
let x = 1 + (a2 *= 2); // a2 = 4; x = 5

// 3. What are results of these expressions?
"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; //-14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

// 4. Fix the code bellow:
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // 12
let aa = +prompt("First number?", 1);
let bb = +prompt("Second number?", 2);
alert(aa + bb); // 3 (OK)


// -------- Comparisons --------
// What will be the result for these expressions?
5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; //false
null === +"\n0\n"; //false


// -------- Conditional branching: if, '?' --------

// 1. Will alert be shown?
if ("0") {
  alert("Hello");
} // yes, "0" is truthy

// 2.
let userAnswer = prompt("What is the “official” name of JavaScript?", "");
if (userAnswer == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

// 3.
let userInput = +prompt("Enter a number: ");
if (userInput > 0) {
  alert(1);
} else if (userInput == 0) {
  alert(0);
} else alert(-1);

// 4. Rewrite 'if..else' into '?'
let message;
login == "Employee"
  ? (message = "Hello")
  : login == "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : (message = "");


// -------- Logical operators --------

// 1. What is the code below going to output?
alert(null || 2 || undefined); // 2
// 2. What is the code below going to output?
alert(alert(1) || 2 || alert(3)); // 1 then 2
// 3. What is the code below going to output?
alert(1 && null && 2); // null
// 4. What is the code below going to output?
alert(alert(1) && alert(2)); // 1 then undefined
// 5. What will the result be?
alert(null || (2 && 3) || 4); // 3

// 6.
let age = +prompt("Enter your age: ");
if (age <= 90 && age >= 14) alert("OK!");

// 7.
let age2 = +prompt("Enter your age: ");
if (age2 < 14 || age2 > 90) alert("OK!");
if (!(age <= 90 && age >= 14)) alert("OK!");

// 8. Check the login
let login = prompt("Who is there?", "");
if (login === "admin") {
  let password = prompt("Password: ", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else alert("Wrong password!");
} else if (login === "" || null) {
  alert("Canceled!");
} else alert("I don't know you!!");


// -------- Loops: while and for --------

// 1. What is the last value alerted by this code? Why?
let i = 3;
while (i) {
  alert(i--);
} // 1, because when i becomes 0, which is falsy, it will stop executing further

// 2. Both loops alert the same values, or not?
let k = 0;
while (++k < 5) alert( k ); // will alert 1, 2, 3, 4

let l = 0;
while (l++ < 5) alert( l ); // will alert 1, 2, 3, 4, 5

// 3. Both loops alert same values or not?
for (let i = 0; i < 5; i++) alert( i ); // will alert 0 to 4
for (let i = 0; i < 5; ++i) alert( i ); // will alert 0 to 4

// 4. Use the for loop to output even numbers from 2 to 10.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) continue;
  alert(i)
}

// 5. Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
  //   alert( `number ${i}!` );
  // }
  
  let g = 0;
  while (g < 3) {
    alert( `number ${g}!` );
    g++;
  }
  
  
  // 6. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
  let num;
  do {
    num = prompt("Enter a number >= 0?", 0)
  } while (num <= 100 && num)
  
  
// 7. Output prime numbers

let inputNumber = +prompt("Enter your nr: ", 10);

firstLoop:
for (let i = 2; i <= inputNumber; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue firstLoop; // we found a prime so go verify next nr
  }
  alert(i)
}


// -------- The "switch" statement --------
// 1. Write the code using if..else which would correspond to the following switch:
/*
  switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;

    default:
      alert( 'We hope that this page looks ok!' );
  }
*/
if (browser === "Edge") {
  alert( "You've got the Edge!" );
} else if (browser === "Chrome" || "Firefox" || "Safari" || "Opera" ) {
  alert("Okay wer support these browsers too")
} else {
  alert( 'We hope that this page looks ok!' );
}

// 2. Rewrite the code below using a single switch statement:

/*
  let a = +prompt('a?', '');
  if (a == 0) {
    alert( 0 );
  }
  if (a == 1) {
    alert( 1 );
  }
  if (a == 2 || a == 3) {
    alert( '2,3' );
}
*/

switch (a) {
  case a == 0: 
    alert (0)
  case a == 1: 
    alert (1)
  case a == 2 || a == 3: 
    alert ("2, 3")
}