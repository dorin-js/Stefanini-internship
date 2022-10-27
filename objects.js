// Objects
// 1. 
const user = {
    name: "John",
    surname: "Smith"
}
user.name = "Pete";
delete user.name;

// 2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// 3. We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key]
}
console.log(sum)

// 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2
    }
  }
  console.log(obj)
}
multiplyNumeric(menu);