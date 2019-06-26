// Get the signInmodal
var signInModal = document.getElementById("signin_modal");

// Get the signInbtn that opens the signInmodal
var signInbtn = document.getElementById("signin-btn");

// Get the <span> element that closes the signInmodal
var signInspan = document.getElementsByClassName("close")[0];

// When the user clicks on the signInbtn, open the signInmodal 
signInbtn.onclick = function() {
  signInModal.style.display = "block";
}

// When the user clicks on <span> (x), close the signInmodal
signInspan.onclick = function() {
  signInModal.style.display = "none";
}

// Get the signupModal
var signupModal = document.getElementById("signup_modal");

// Get the button that opens the signupModal
var signUpbtn = document.getElementById("signup-btn");

// Get the <span> element that closes the signupModal
var signUpspan = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the signupModal 
signUpbtn.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the signupModal
signUpspan.onclick = function() {
  signupModal.style.display = "none";
}

var signupLink = document.getElementById("signup-modal");
signupLink.onclick = function() {
  signInModal.style.display = "none";
  signupModal.style.display = "block";
}