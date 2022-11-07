export function setTimeoutPromiseAlternative() {
  /**
   * he built-in function setTimeout uses callbacks.
   * Create a promise-based alternative.
   * The function delay(ms) should return a promise.
   * That promise should resolve after ms milliseconds
   */

  function delay(ms) {
    return new Promise((resolve, reject) => {
      alert("I'l run again in " + ms + "ms");
      setTimeout(resolve, ms);
    });
  }
  delay(3000).then(() => alert("runs after 3 seconds"));
}
