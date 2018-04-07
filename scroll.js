


window.onscroll = function() {stickyTop()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyTop() {
	if (window.pageYOffset >= sticky) {
	  navbar.classList.add("sticky")
	} else {
	  navbar.classList.remove("sticky");
	}
}