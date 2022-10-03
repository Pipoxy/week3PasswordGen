// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var special =  "!#$%&?@"


function generatePassword() {
  var characters = "";

  var genClicked = window.prompt("Choose a length for your password between 8 and 128.");

  if (genClicked <= 7 || genClicked >= 129) {
    var badLength = window.alert("Password has to be between 8 and 128 characters.");
    return;
  }

  var addLowerCase = window.confirm("Would you like to include lowercase letters? (click OK if yes, click cancel if no.)");

  if (addLowerCase === true) {
    characters += lowerCase;
  }

  var addUpperCase = window.confirm("Would you like to include uppercase letters?");

  if (addUpperCase === true) {
    characters += upperCase;
  }

  var addNumeric = window.confirm("Would you like to include numbers?");

  if (addNumeric === true) {
    characters += numeric;
  }

  var addSpecial = window.confirm("Would you like to add special characters?");

  if (addSpecial === true) {
    characters += special;
  }

  console.log(genClicked, addLowerCase, addUpperCase, addNumeric, addSpecial);

  if (addLowerCase && addUpperCase && addNumeric && addSpecial === !true) {
    var noSelections = window.alert("You must pick at least one option.")
    return;
  }

  var password = "";

  for (var i = 0; i < genClicked; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    var letter = characters.charAt(randomIndex);
    password += letter; 
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
