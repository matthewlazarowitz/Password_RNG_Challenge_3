// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables used for alphabet, numbers, and special characters when pulling user data.
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

//Create function for grabbing user data, using prompts to decide the length, and characters used & unused in a list for password
function getUSerInput() {
  var amount = Number(prompt('Choose a password length between 8-128 characters.'));
  var addLowercase = confirm('Click "Ok" to include lowercase letters.  Otherwise, click "Cancel" to not include lowercase.')
  var addUppercase = confirm('Click "Ok" to include uppercase letters.  Otherwise, click "Cancel" to not include uppercase.')
  var addNumbers = confirm('Click "Ok" to include numbers.  Otherwise, click "Cancel" to not include numbers.')
  var addSpecial = confirm('Click "Ok" to include special characters.  Otherwise, click "Cancel" to not include specials.')

  //Return function in order to avoid 'undefined'
  return [amount, addLowercase, addUppercase, addNumbers, addSpecial];
}

//Call function to define a variable with the results the user inputed through the prompts
var choices = getUSerInput();

//Create a function that generates a password of random characters using the users choices
function generatePassword() {

  // Variable for the entire array after checking conditions and a variable for password itself
  var combinedCharacters = [];
  var password = '';

  //Adding user data to the combined array
  var charAmount = choices[0];
  var addLowercase = choices[1];
  var addUppercase = choices[2];
  var addNumbers = choices[3];
  var addSpecial = choices[4];

  //Use if statements to check if the user wants the variable added to their password
  if (addLowercase) {
    combinedCharacters = combinedCharacters.concat(lowercase);
  }

  if (addUppercase) {
    combinedCharacters = combinedCharacters.concat(uppercase);
  }

  if (addNumbers) {
    combinedCharacters = combinedCharacters.concat(numbers);
  }

  if (addSpecial) {
    combinedCharacters = combinedCharacters.concat(specialCharacters)
  }

  //Loop for the amount indicated by the user and add it to the result
  for (var count = 0; count < charAmount; count++) {

    var randomNum = Math.random();
    var randomIndex = Math.round(randomNum * combinedCharacters.length);
    var randomChar = combinedCharacters[randomIndex];

    password += randomChar;
  }


  //return to not get 'undefined'
  return password;
}

//Call the function to created the final password
var pass = generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);