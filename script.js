function generatePassword() {
  var password = [];
// Ask password length and validate its between 8 and 128
  var passwordLength = window.prompt("How long would you like youre password to be? Please choose between 8 and 128.");
  if(passwordLength <= 128 && passwordLength >= 8) {
    alert("Thank you. You have chosen a lenght of: " + passwordLength);
  }
  else {
    alert("You have not chosen a valid option.Please choose a number betwwen 8 and 128");
  }
//ask for lowercase


//ask for uppercase

//ask for numeric

//ask for special characters
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
