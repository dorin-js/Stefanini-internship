export function calculatorEx() {

  function Calculator() {
    this.read = function() {
      this.a = +prompt("a = ", 0)
      this.b = +prompt("b = ", 0)
    }
    this.sum = function() {
      return this.a + this.b
    }
    this.mul = function() {
      return this.a * this.b
    }
  }
  let calculator = new Calculator()
  calculator.read()

  alert( "Sum=" + calculator.sum() )
  alert( "Mul=" + calculator.mul() )

}

export function accumulatorEx() {
  /** 
   Create a constructor function Accumulator(startingValue), that returns the sum of all user-entered values with the initial value startingValue
   */
  function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
      this.value += +prompt("Nr to be added ", 0)
    }
  }

  let accumulator = new Accumulator(1);
  accumulator.read()
  accumulator.read()

  alert(accumulator.value)
  
}