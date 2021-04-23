GeneratePassword
This module generates a random password based on selection criteria entered by a user.

The user is able to chose a number of character sets to include and a password length between 8 and 128. 
One of the selection criteria is to ensure that at least one character from each character set is included in the password that is generated.
However this criteria actually leads to a less random password that is generated, than if all of the characters from each character set
are strung together in one string and the random password then generated on that string.
 Updated readme