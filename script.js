function generatePassword() {
  var password = [];
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()~`<,.>?/{[}]:;";
  var confirmed = "";

// Ask password length and validate its between 8 and 128
  var passwordLength = window.prompt("How long would you like your password to be? Please choose between 8 and 128.");
  if(passwordLength <= 128 && passwordLength >= 8) {
    alert("Thank you. You have chosen a lenght of: " + passwordLength);
    password.length = passwordLength;
  }
  else {
    alert("You have not chosen a valid option. Please choose a number betwwen 8 and 128");
  }


//ask for lowercase
  var lowercaseResponse = window.prompt("Would you like to include lowercase letters? Please enter yes or no.");
  lowercaseResponse.toLowerCase;
  if(lowercaseResponse != "yes" && lowercaseResponse != "no") {
    alert("Please enter valid response.");
  }
  else {
    alert("You have chosen: " + lowercaseResponse);
    if(lowercaseResponse === "yes") {
      password[Math.floor(Math.random() * password.length - 1) + 1] = lower.charAt(Math.floor(Math.random() * 25) + 1);
      confirmed += lower;
    }
  }
    
//ask for uppercase
  var uppercaseResponse = window.prompt("Would you like to include uppercase letters? Please enter yes or no.");
  uppercaseResponse.toLowerCase;
  if(uppercaseResponse != "yes" && uppercaseResponse != "no") {
    alert("Please enter valid response.");
  }
  else {
    alert("You have chosen: " + uppercaseResponse);
    if(uppercaseResponse === "yes") {
      password[Math.floor(Math.random() * password.length - 1) + 1] = upper.charAt(Math.floor(Math.random() * 25) + 1);
      confirmed += upper
    }
  }

//ask for numeric
  var numericResponse = window.prompt("Would you like to include numbers?? Please enter yes or no.");
  numericResponse.toLowerCase;
  if(numericResponse != "yes" && numericResponse != "no") {
    alert("Please enter valid response.");
  }
  else {
    alert("You have chosen: " + numericResponse);
    if(numericResponse === "yes") {
      password[Math.floor(Math.random() * password.length - 1) + 1] = Math.floor(Math.random() * 9) + 1;
      confirmed += "1234567890";
    }
  }

//ask for special characters

  var specialResponse = window.prompt("Would you like to include special characters? Please enter yes or no.");
  specialResponse.toLowerCase;
  if(specialResponse != "yes" && specialResponse != "no") {
    alert("Please enter valid response.");
  }
  else {
    alert("You have chosen: " + specialResponse);
    if(specialResponse === "yes") {
      password[Math.floor(Math.random() * password.length - 1) + 1] = specialChar.charAt(Math.floor(Math.random() * 23) + 1);
      confirmed += specialChar;
    }
  }

  var confirmedLength = confirmed.length;
  for(var i = 0; i < password.length; i++) {
    if(password[i] != null) {
      password[i] = password[i];
    }
    else {
      password[i] = confirmed.charAt(Math.floor(Math.random() * confirmedLength));
    }
    
  }

//create password

  var finalResult = password.join("");

  return finalResult;
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
