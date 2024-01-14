// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}


// Function to generate password with user input
function generatePassword() {}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Prompt for password criteria
function getPasswordCriteria() {
  var passwordLength = parseInt(prompt("Enter password length (8-128 characters):"));

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return null;
  }

  // Return password criteria
  return {
    length: passwordLength,
    lowercase: includeLowercase,
    uppercase: includeUppercase,
    numeric: includeNumeric,
    specialChars: includeSpecialChars
  };
}

// Generate a random password
function generatePassword(length, lowercase, uppercase, numeric, specialChars) {
  var charTypes = '';
  var charset = '';

  // Build character types string based on selected options
  if (lowercase) {
    charTypes += 'lowercase';
    charset += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (uppercase) {
    charTypes += 'uppercase';
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (numeric) {
    charTypes += 'numeric';
    charset += '0123456789';
  }

  if (specialChars) {
    charTypes += 'special';
    charset += '!@#$%^&*()_+~`|}{[]:;?><,./-='
  }

  var password = '';

  // Generate password by selecting random characters from charset
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Handle Generate Password button click event
document.getElementById("generate").addEventListener('click', function () {
  var passwordCriteria = getPasswordCriteria();

  if (passwordCriteria) {
    var password = generatePassword(passwordCriteria.length, passwordCriteria.lowercase, passwordCriteria.uppercase, passwordCriteria.numeric, passwordCriteria.specialChars);

    // Display generated password
    document.getElementById('password').value = password;
  }
});
