//  JAVASCRIPT PASSWORD GENERATOR //

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = start();     
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//////////////////////////////////////////////////////////


//MY FUNCTION
function start() {
    //varirables
    var viable = [];
    var special = [" ", "!", "\"", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", ",", ".", "?", "/", "[", "]", "{", "}", "_"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var password = [];

    //function begins prompts
    var length = prompt("length of password");
    // If password length is bigger than 7 and less than 129 then prompt user about types
    if (parseInt(length) > 7 && parseInt(length) < 129) {
        var confirmSpecial = confirm("include special characters?");
        var confirmUpper = confirm("inclued uppercase characters?");
        var confirmLower = confirm("incude lowercase characters?");
        var confirmNumeric = confirm("include numeric characters?");
    };

    // If user wants specials, add special characters(in special array) to viable array
    if (confirmSpecial == true) {
        for (i = 0; i < special.length; i++) {
            viable.push(special[i]);
        };
    };
    // If user wants UPPERCASE, add UPPERCASE characters(in upper array) to viable array
    if (confirmUpper == true) {
        for (i = 0; i < upper.length; i++) {
            viable.push(upper[i]);
        };
    };
    // If user wants lowercase, add lowercase characters(in lower array) to viable array
    if (confirmLower == true) {
        for (i = 0; i < lower.length; i++) {
            viable.push(lower[i]);
        };
    };
    // If user wants numerics, add numeric characters(in numeric array) to viable array
    if (confirmNumeric == true) {
        for (i = 0; i < numeric.length; i++) {
            viable.push(numeric[i]);
        };
    };


    // Now the viable array should have all the wanted characters, now we can build our password.

    function passwordGenerate() {
        for (i = 0; i < length; i++) {
            password.push(viable[Math.floor(Math.random() * viable.length)]);
        }
        randomPassword = password.join("");    // using .join to make array password into a string withou commas
        ;
    };
    passwordGenerate();     //run passwordgenerate function and return our password string as end value of our overall function
    return (randomPassword);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);