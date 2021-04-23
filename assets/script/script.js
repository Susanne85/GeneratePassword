// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // Invoking a function to generate a password
  let password = generatePassword();
  
  let passwordText = document.querySelector("#password");
   
  passwordText.value = password;
}

function generatePassword() {
  
  let characterSet = {
     type: ["lowercase","uppercase","numbers","special characters"],
     list: ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ",     "0123456789", " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
  }

  let numberSelected;
  let passwordList = [];
  let password = '';
  let selLength;
  let selType;
  let textType = '';

  selType = alert("A list of character sets will be displayed.\nIf you want to include the character set then Click on the OK button,\notherwise Click on the Cancel button");
  
  numberSelected = 0;

  for (let i = 0; i < characterSet.type.length; i++) {

    textType = "Do you want to include " + characterSet.type[i] + " characters such as " + characterSet.list[i];

    textType = textType + "\nClick on ok to include, otherwise click on the Cancel button";

     selType = confirm(textType, characterSet.list[i]);
   
    if (selType) {
       passwordList[numberSelected] = characterSet.list[i];
       numberSelected = numberSelected + 1;
    }
  }

  if (numberSelected === 0) {
     password = "You must have some characters in your password";
     return password;
  } else {
      selLength = prompt("Password Length", "Greater than 7 and less than 129");
  }
    
  selLength = parseInt(selLength);

  if (!Number.isInteger(selLength)){
   password = "Length of password must be a number greater than 7\nand less than 129";
   return password;
  }

  if (selLength >= 8 && selLength <= 128) {

    passwordBreak:
    for (let i = 0; i <= selLength; i++) { 
      for (j = 0; j < numberSelected; j++) {
        password += passwordList[j].charAt(Math.floor(Math.random() * passwordList[j].length));
        if (password.length >= selLength) {
          break passwordBreak;
        }
      }
    }
    password = "Your secure password is\n'" + password + "'" + "\nThe requested password length was " + selLength;
    return password;
  } else {
    password = "Length of password must be greater than 7\nand less than 129";
    return password;
  }
}

generateBtn.addEventListener("click", writePassword);
