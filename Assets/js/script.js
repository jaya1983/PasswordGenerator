// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log('passwordText ' + passwordText.value);
  window.alert('Generated Password: ' + passwordText.value);
}
function generatePassword() {

  var passwdLengthCriteria = false;
  var passwordSelectionCriteria = false;
  var inputString = [];
  var validNumber;
  var generatedPassword = '';
  var passwordLength;
  var charTypes = 0;
  
  /* Force user to enter a valid number */
  while (passwdLengthCriteria == false) {
    passwordLength = window.prompt("please enter a number for password length between 8 and 128");
    validNumber = isNumeric(passwordLength);
    console.log('valid number ' + validNumber);

    if (validNumber == true) {
      if (passwordLength >= 8 && passwordLength <= 128) {
        passwdLengthCriteria = true;
      }
    }
    else {
      window.prompt("This is NOT a valid number, please enter a valid number between 8 and 128");
      passwdLengthCriteria = false;
    }
  }
  
  /* force user to enter YES for atleast one choice */

  while (passwordSelectionCriteria == false) {

    /* Check for Lower case acceptance ceriteria  */
    var lowerCase = window.prompt("please enter YES/NO if lower case should be included?");
    console.log('lower case ' +lowerCase);

    /* Check for Upper Case Criteria */
    var upperCase = window.prompt("please enter YES/NO if upper case letters are to be included ");
    
    /* Check fro numeric Criteria */
    var numeric = window.prompt("please enter YES/NO if a numeric should be included");
    
    /* Check for Special Character Criteria */
    var specialChar = window.prompt("please enter YES/NO if a special character needs to be inluded");
   
    /* If Either of the Inputs is 'yes', proceed */
    if (lowerCase === 'yes' || lowerCase === 'YES'
        || upperCase === 'yes' || upperCase === 'YES'
        || numeric === 'yes' || numeric === 'YES'
        || specialChar === 'YES' || specialChar === 'yes') {

      passwordSelectionCriteria = true;

      if (lowerCase === 'yes'||  lowerCase === 'YES') {
        charTypes++;
        inputString.push("abcdefghijklmnopqrstuvwxyz");
        console.log('Input String ' + inputString);
      }
      if (upperCase === 'yes'|| upperCase === 'YES') {
        charTypes++;
        inputString.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        console.log('Input String ' + inputString);
      }
      if (numeric === 'yes' || numeric === 'YES') {
        charTypes++;
        inputString.push("0123456789");
        console.log('Input String ' + inputString);
      }
      if (specialChar === 'yes' || specialChar === 'YES') {
        charTypes++;
        inputString.push("~`!@#$%^&*()_-+={[}]|:;<,>./?");
        console.log('Input String ' + inputString);
      }

      console.log('char Types ' + charTypes);
      /* For generating random password with all the above accepted crieria,
      first divide password length in equal halfs for each Character type and then the remaining 
      characters */

      var eachCharTypeLength = Math.floor(passwordLength / charTypes);

      var remainingCharTypeLength = passwordLength - (eachCharTypeLength * (charTypes - 1));

      /* Call randomString function to generate random characters from the inputString provided */

      for (var index = 1; index <= charTypes - 1; index++) {
        generatedPassword += randomString(eachCharTypeLength, inputString[index]);
      }
      console.log('generated password inside for loop ' + generatedPassword);

      generatedPassword += randomString(remainingCharTypeLength, inputString[0]);
      console.log(' Final generated password ' + generatedPassword);

      return generatedPassword;
    }
    else {
      window.prompt("You will be redirected to enter 'YES' to atleast one choice for LowerCase, UpperCase, Numeric and Special Character Criteria. Press ENTER to Try again");
      passwordSelectionCriteria = false;
    }
    console.log('password criteria satisfied ' + passwordSelectionCriteria);
  }
}

/* Function to check if user entered a valid number */
function isNumeric(num) {
  return !isNaN(num)
}

/* Function to pick random char's */
function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  console.log('result ' + result);
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
