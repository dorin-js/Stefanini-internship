export function checkStringForSpam() {
  /**
   * Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
   */
  function checkSpam(str) {
    let loweredStr = str.toLowerCase();
    alert(
      str + ": " + (loweredStr.includes("viagra") || loweredStr.includes("xxx"))
    );
  }
  checkSpam("buy ViAgRA now");
  checkSpam("free xxxxx");
  checkSpam("innocent rabbit");
}

export function truncateTheTextForMaxLength() {
  /**
   * Create a function truncate(str, maxlength) that checks the length of the str and,
   * if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
   * The result of the function should be the truncated (if needed) string.
   */
  function truncate(str, maxLength) {
    if (str.length > maxLength) {
      alert(str + " >\n" + str.substring(0, maxLength) + "...");
    } else alert(str + " >\n" + "No need!");
  }
  truncate("What I'd like to tell on this topic is:", 20);
  truncate("Hi everyone!", 20);
}
