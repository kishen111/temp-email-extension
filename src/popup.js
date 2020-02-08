var myUsername = "alex";
var myPassword = "123456";

var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");

function fill() {
	alert("filling");
	console.log(document.getElementById("username").value);

	usernameField.value = myUsername;
	passwordField.value = myPassword;

	alert("filled");
}

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('test');
  checkPageButton.addEventListener('click', function() {
  	console.log("logging");
  	alert("button pressed");
  	fill();
  }, false);
}, false);