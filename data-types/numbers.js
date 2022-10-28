export function RandomIntegerTASK() {

  /**
    Create a function randomInteger(min, max) that generates a random integer number from min to max
    including both min and max as possible values.
   */

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1)
    return Math.floor(rand)
  }
  alert(randomInteger(1, 5))

}