function reverseString(strings) {
  if (strings === "") {
    return "";
  }

  return reverseString(strings.substr(1)) + strings.charAt(0);
}
console.log(reverseString("hello world"));
