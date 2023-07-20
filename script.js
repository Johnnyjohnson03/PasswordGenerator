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
var password=document.getElementById("password");

  function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 8;
    var passwordLowercase = confirm;
    var passwordUppercase = confirm;
    var passwordNumeric = confirm;
    var passwordSpecialcharacters = confirm;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);  
  }
        document.getElementById("password").value = password;
  // return password
  }
   
  function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy")
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)}