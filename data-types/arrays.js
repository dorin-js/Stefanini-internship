export function sumInputNumbersUsingArray() {
  /**
   * Write the function sumInput() that:
      Asks the user for values using prompt and stores the values in the array.
      Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
      Calculates and returns the sum of array items.
   */
  function sumInput() {
    const arr = [];
    while (true) {
      let input = prompt("Number", 0);
      if (input === "" || input === null || !isFinite(input)) break;
      arr.push(+input);
    }
    console.log(arr);
    const sum = arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    console.log(sum);
  }
  sumInput();
}

export function getMaximalSubarraySum() {
  /**
   * Write the function sumInput() that:
      Asks the user for values using prompt and stores the values in the array.
      Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
      Calculates and returns the sum of array items.
   */
  function getMaxSubSum(arr) {
    let sumaMax = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let k = i; k < arr.length; k++) {
        sum = sum + arr[k];
        if (sum > sumaMax) sumaMax = sum;
      }
    }
    alert(arr + " -> suma subsirului maxim: " + sumaMax);
  }
  getMaxSubSum([-1, 2, 3, -9]);
  getMaxSubSum([2, -1, 2, 3, -9]);
  getMaxSubSum([-1, 2, 3, -9, 11]);
  getMaxSubSum([-2, -1, 1, 2]);
  getMaxSubSum([100, -9, 2, -3, 5]);
  getMaxSubSum([1, 2, 3]);
}
