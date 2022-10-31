export function RandomIntegerBetweenMinAndMax() {
  /**
    Create a function randomInteger(min, max) that generates a random integer number from min to max
    including both min and max as possible values.
   */

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    let res = Math.floor(rand);
    return `Random integer between ${min}-${max} is: ${res}`;
  }

  alert(randomInteger(1, 5));
}
