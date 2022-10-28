// 1.
  // I
  function checkAge(age) {
    age > 18 ? true : confirm('Did parents allow you?');
  }
  // II
  function checkAge(age) {
    age > 18 || confirm('Did parents allow you?');
  }


// 2. Write a function min(a,b) which returns the least of two numbers a and b.
function findMin(a, b) {
  let min;
  a < b 
    ? min = a 
    : min = b
    console.log(min);
}

// 3. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= x
  }
  console.log(res)
  // return res
}
pow(3, 3)