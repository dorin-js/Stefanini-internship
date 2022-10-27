export function ex1() {
  /** Create calculator */
  let calculator = {
    read() {
      this.a = +prompt("a = ", 0);
      this.b = +prompt("b = ", 0);
    },
    sum() {
      return this.a + this.b;
    }
  }
  calculator.read();
  calculator.sum(); 
}


export function ex2() {
  /** Chaining */
  let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); 
}
