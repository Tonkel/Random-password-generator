//Dependencies DOM
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Data

var capsAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
var numericalAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var lengthOfPassword = 0;
var passwordRequirements = {};
var emptyPassword = "";

// write a function that asks questions and returns and adds values to passwordRequirements object based on answers
function askQuestions() {
  var proceedOrNo = confirm("Would you like to create a randomized password?");
  if (proceedOrNo) {
    var confirmUppercase = confirm(
      "Would you like there to be uppercase letters in your password?"
    );
    var confirmLowercase = confirm(
      "Would you like there to be lowercase letters in your password?"
    );
    var confirmNumbers = confirm(
      "Would you like there to be numbers in your password?"
    );
    var confirmSpecial = confirm(
      "Would you like special characters in your password?"
    );
    var passwordLength = prompt(
      "How long would you like your password to be? \n You must choose between 8 and 128"
    );

    //sets prompt answer to number
    lengthOfPassword = Number(passwordLength);
  } else {
    return;
  }
  // adds key value pairs to empty object
  // else ifs didnt work?
  if (confirmUppercase) {
    passwordRequirements["Uppercase"] = capsAlphabet;
  }
  if (confirmLowercase) {
    passwordRequirements["Lowercase"] = lowercaseAlphabet;
  }
  if (confirmNumbers) {
    passwordRequirements["Numbers"] = numericalAlphabet;
  }
  if (confirmSpecial) {
    passwordRequirements["Special"] = specialCharacters;
  }
  //   console.log(passwordRequirements);
}

//write a function that creates randomized password by accessing lists in objects
function generatePassword(object) {
  //create a for loop that chooses a random character from a random value in the object each time it iterates, and adds that character to the end of a string.
  for (i = 0; i < lengthOfPassword; i++) {
    var objectLength = Object.keys(passwordRequirements).length;
    var randomNumber = Math.floor(Math.random() * objectLength);
    // I wonder if I can make this into a for loop.
    if (randomNumber === 0) {
      var obj1Length = Object.values(passwordRequirements)[0].length;
      var randomObj1Num = Math.floor(Math.random() * obj1Length);
      var obj1input = Object.values(passwordRequirements)[0][randomObj1Num];
      emptyPassword = emptyPassword + obj1input;
    }

    if (randomNumber === 1) {
      var obj2Length = Object.values(passwordRequirements)[1].length;
      var randomObj2Num = Math.floor(Math.random() * obj2Length);
      var obj2input = Object.values(passwordRequirements)[1][randomObj2Num];
      emptyPassword = emptyPassword + obj2input;
    }

    if (randomNumber === 2) {
      var obj3Length = Object.values(passwordRequirements)[2].length;
      var randomObj3Num = Math.floor(Math.random() * obj3Length);
      var obj3input = Object.values(passwordRequirements)[2][randomObj3Num];
      emptyPassword = emptyPassword + obj3input;
    }

    if (randomNumber === 3) {
      var obj4Length = Object.values(passwordRequirements)[3].length;
      var randomObj4Num = Math.floor(Math.random() * obj4Length);
      var obj4input = Object.values(passwordRequirements)[3][randomObj4Num];
      emptyPassword = emptyPassword + obj4input;
    }
  }

  return emptyPassword;
}

// Write password to the #password input
function writePassword() {
  askQuestions();
  var password = generatePassword(passwordRequirements);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
