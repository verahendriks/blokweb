// // JavaScript Document

// Responsive menu - footer
var eersteButtonFooter = document.querySelector("footer section:nth-of-type(1) button");
var tweedeButtonFooter = document.querySelector("footer section:nth-of-type(2) button");
var derdeButtonFooter = document.querySelector("footer section:nth-of-type(3) button");
var vierdeButtonFooter = document.querySelector("footer section:nth-of-type(4) button");
var vijfdeButtonFooter = document.querySelector("footer section:nth-of-type(5) button");

var eersteSectionFooter = document.querySelector("footer section:nth-of-type(1)");
var tweedeSectionFooter = document.querySelector("footer section:nth-of-type(2)");
var derdeSectionFooter = document.querySelector("footer section:nth-of-type(3)");
var vierdeSectionFooter = document.querySelector("footer section:nth-of-type(4)");
var vijfdeSectionFooter = document.querySelector("footer section:nth-of-type(5)");

eersteButtonFooter.addEventListener("click", toggleFooterEersteMenuFooter);
tweedeButtonFooter.addEventListener("click", toggleFooterTweedeMenuFooter);
derdeButtonFooter.addEventListener("click", toggleFooterDerdeMenuFooter);
vierdeButtonFooter.addEventListener("click", toggleFooterVierdeMenuFooter);
vijfdeButtonFooter.addEventListener("click", toggleFooterVijfdeMenuFooter);

function toggleFooterEersteMenuFooter() {
	eersteSection.classList.toggle("menuOpen");
}

function toggleFooterTweedeMenuFooter() {
	tweedeSection.classList.toggle("menuOpen");
}

function toggleFooterDerdeMenuFooter() {
	derdeSection.classList.toggle("menuOpen");
}

function toggleFooterVierdeMenuFooter() {
	vierdeSection.classList.toggle("menuOpen");
}

function toggleFooterVijfdeMenuFooter() {
	vijfdeSection.classList.toggle("menuOpen");
}


// Responsive menu - header - klikbaar
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}