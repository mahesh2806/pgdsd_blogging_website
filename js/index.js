// Get the createpostbtn that opens the createpostmodal
var allPostsbtn = document.getElementById("allposts-btn");

allPostsbtn.onclick = function() {
	window.location.href = './html/bloglist.html';
}

// Get the createpostmodal
var createpostModal = document.getElementById("createpost_modal");

// Get the createpostbtn that opens the createpostmodal
var createpostbtn = document.getElementById("createpost-btn");

// Get the <span> element that closes the createpostmodal
var createpostspan = document.getElementsByClassName("close")[2];

// When the user clicks on the createpostbtn, open the createpostmodal 
createpostbtn.onclick = function() {
  createpostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the createpostmodal
createpostspan.onclick = function() {
  createpostModal.style.display = "none";
}