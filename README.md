# 03 JavaScript: Password Generator

This application provides a user with random password for a specific length and selected criteria on lower case, upper case, numeric and special characters.
Once the clicks on generate password button, a prompt appears with a series of crietria - the password length which checks for a range between 8 and 128. This not only checks for the range but also if the user input is a valid number, if NOT  a valid number the user is prompted with a message to enter a valid number and between the range.
once the password length check is PASS, the next prompt is for the series of selection crietria based on the CharTypes(lower case, upper case, numeric and special characters )
The user is forced to select 'Yes' for atleast one criteria above.
With the above selected password length and selection criteria, a random password is generated.

Code Logic:
With a low password length and Yes to all selected criteria, the possibility of generating all CharTypes is less, to tackle this challenge ( For ex: length 8 , and Yes to all LowerCase, UpperCase.. ), based on password length and no.of CharTypes,
each Char Type is equally divided and a random string generation function is called. However, this generates char Types sequentially instead of random. So , there is alogic to sort the string , and then a random password is generated.


