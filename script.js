// Assignment Code
var generateBtn = document.querySelector("#generate");
// document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // text area element by it's id
  var passwordText = document.querySelector("#password");

  // value of that text area equal to the value of the pw variable
  passwordText.value = password;



}
function generatePassword() {

  // prompt user for length of password
  var passwordLength = prompt("How long would you like the password to be?")
  // validate the input
  console.log(passwordLength)
  // as if they want lowercase
  var passwordLowercase = confirm("Do you want to include lowercase letters?")
  console.log(passwordLowercase)
  // validate the input, if they choose yes, include at least one lowercase character

  // ask if they want uppercase
  var passwordUppercase = confirm("Do you want to include lowercase letters?")
  console.log(passwordUppercase)
  // validate the input, if they choose yes, include at least one uppercase character

  // ask if they want numeric
  var passwordNumeric = confirm("Do you want to include a numeric value?")
  console.log(passwordNumeric)
  // validate the input, if they choose yes, include at least one numeric character

  // ask if they want special characters
  var passwordSpecialcharacter = confirm("Do you need a special character?")
  console.log(passwordSpecialcharacter)
  // validate the input, if they choose yes, include at least one special character

  // build the password

  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  // combine character sets based on the criteria
  let combineChars = "";
  if (passwordUppercase) combineChars += uppercaseLetters;
  if (passwordLowercase) combineChars += lowercaseLetters;
  if (passwordNumeric) combineChars += numeric;
  if (passwordSpecialcharacter) combineChars += specialCharacters;

  // Check if at least one character set is selected
  if (combineChars.length === 0) {
    throw new Error("You need to select at least one character set.");
  }

  // Generate password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * combineChars.length);
    password += combineChars[randomIndex];
  }
  console.log(password)
  return password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword)
console.log(password)