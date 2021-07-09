// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  window.alert("Generated Password: " + passwordText.value);
}

function generatePassword() {
  var passwdLengthCriteria = false;
  var passwordSelectionCriteria = false;
  var inputString = [];
  var validNumber;
  var generatedPassword = [];
  var passwordLength;
  var charTypes = 0;

  var passwordLength = window.prompt(
    "please enter a number for password length between 8 and 128"
  );
  var validNumber = isNumeric(passwordLength);

  if (validNumber && passwordLength >= 8 && passwordLength <= 128) {
    passwdLengthCriteria = true;
  } else {
    alert(
      "Either NOT  a valid number / Not with in the specified range . Please Try again"
    );
  }

  if (passwdLengthCriteria) {
    while (passwordSelectionCriteria == false) {
      var lowerCase = window.confirm(
        "please select OK/Cancel if lower case should be included?"
      );
      var upperCase = window.confirm(
        "please ONLY enter YES/NO if upper case letters are to be included "
      );
      var numeric = window.confirm(
        "please ONLY enter YES/NO if a numeric should be included"
      );
      var specialChar = window.confirm(
        "please ONLY enter YES/NO if a special character needs to be inluded"
      );
      if (lowerCase || upperCase || numeric || specialChar) {
        passwordSelectionCriteria = true;

        if (lowerCase) {
          charTypes++;
          inputString.push("abcdefghijklmnopqrstuvwxyz");
        }
        if (upperCase) {
          charTypes++;
          inputString.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        if (numeric) {
          charTypes++;
          inputString.push("0123456789");
        }
        if (specialChar) {
          charTypes++;
          inputString.push("~`!@#$%^&*()_-+={[}]|:;<,>./?");
        }
        /* Please refer to README desc for more explanation on Code Logic. 
           Each CharType is divided into equal half's and then the remianing characters will be formed another string 
           with left over charType */

        var eachCharTypeLength = Math.floor(passwordLength / charTypes);
        var remainingCharTypeLength =
          passwordLength - eachCharTypeLength * (charTypes - 1);

        /* Call the random function with EachCharLength for equal division */
        for (var index = 1; index <= charTypes - 1; index++) {
          generatedPassword += randomString(
            eachCharTypeLength,
            inputString[index]
          );
        }

        /* For any remaining characters, call the function again with the left over charType inputString*/
        generatedPassword += randomString(
          remainingCharTypeLength,
          inputString[0]
        );
        console.log(" Final generated password " + generatedPassword);

        /* The generated password is sequential with each charType but not random .
           To generate random password, first convert to an array, 
           then use the sort method to randomly pick char's and arrange them */
        var randomPassword = [];
        for (var i = 0; i < generatedPassword.length; i++) {
          randomPassword.push(generatedPassword[i]);
        }

        /* Array Sorting */
        var i = randomPassword.length,
          k,
          temp;

        while (--i > 0) {
          k = Math.floor(Math.random() * (i + 1));
          console.log("k : " + k);
          temp = randomPassword[k];
          console.log("temp " + temp);
          randomPassword[k] = randomPassword[i];
          randomPassword[i] = temp;
          console.log("generated password " + randomPassword.toString());
        }

        return randomPassword.join("");
      } else {
        alert(
          "You will be redirected to enter 'YES' to atleast one choice for LowerCase, UpperCase, Numeric and Special Character Criteria. Press ENTER to Try again"
        );
        passwordSelectionCriteria = false;
      }
    }
  }
}

/* Function to check if user entered a valid number */
function isNumeric(num) {
  return !isNaN(num);
}

/* Function to pick random char's */
function randomString(length, chars) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
