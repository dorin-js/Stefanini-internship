export function sumOfAllSalaries() {
  /**
   * Write the function sumSalaries(salaries) that returns the sum
   * of all salaries using Object.values and the for..of loop.
   * If salaries is empty, then the result must be 0.
   */

  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  function sumSalaries(obj) {
    let sum = 0;
    for (let value of Object.values(obj)) {
      sum += value;
    }
    return sum;
  }
  alert(sumSalaries(salaries));
}

export function countNrOfPropertiesInObj() {
  /**
   * Write a function count(obj) that returns the number of properties in the object:
   */

  let user = {
    name: "John",
    age: 30,
  };

  function count(obj) {
    return Object.keys(obj).length;
  }
  alert(count(user));
}
