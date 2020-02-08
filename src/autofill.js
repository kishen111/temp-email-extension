console.log("Autofill.js Started .. "); //for debug purpose so i can see it in the console log

//define username and password

var myUsername = 'kishen';
var myPassword = 'scottisloopy';

var loginField = document.getElementById('username');
var passwordField = document.getElementById('password');

loginField.value = myUsername;
passwordField.value = myPassword;
