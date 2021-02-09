// Global Vars.
var buttonEl = document.getElementById("btn");
var newPW = document.getElementById("#generatedPassword");

 //when the button is clicked it will run the "generatePW" function
buttonEl.addEventListener("click", generatePW);
  


 function generatePW() {
   var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var numbers   = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
 //Open array to push user selection of what characters they pick
 var userPickArray = [];


 //prompts user to decide on password characters between 8 and 128

 var pwLength = Number(prompt("Please input (betwwen 8 and 128) how many characters to include in your generated password."));
 
 if (pwLength < 8 || pwLength > 128 || pwLength ==! Number) {
alert("Please try again. Enter number between 8 abd 128");
return;
 } else {
   alert("You chose a password length of " + pwLength +  " characters. ");
 }
 
var confirmLowercase = confirm("Would you like your password to contain Lowercase letters? ( Click OK for Yes and Cancel for No") ;
var confirmUppercase = confirm("Would you like your password to contain Uppercase letters? ( Click OK for Yes and Cancel for No") ;
var confirmSymbols = confirm("Would you like your password to contain Symbols? ( Click OK for Yes and Cancel for No") ;
var confirmNumbers = confirm("Would you like your password to contain Numbers? ( Click OK for Yes and Cancel for No") ;

 
 
 
 
 
 
 
 
 
  }