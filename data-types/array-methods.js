export function sortUsersByAge() {
  /**
   * Write the function sortByAge(users) that gets an array of
   * objects with the age property and sorts them by age.
   * For instance:
   */
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [pete, john, mary];

  function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);

    return arr;
  }

  console.log(sortByAge(arr));
}

export function suffleAnArr() {
  /**
   * Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
   */
  function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  console.log(shuffleArr([1, 2, 3]));
}

export function createKeyedObjectFromArray() {
  /**
   * Create a function groupById(arr) that creates an object from it,
   * with id as the key, and array items as values.
   */
  let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];
  function groupById(arr) {
    return arr.reduce((accumulator, item) => {
      accumulator[item.id] = item;
      return accumulator;
    }, {});
  }
  console.log("Orginal --> ", users);
  console.log("Mapped --> ", groupById(users));
}
