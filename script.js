//Google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
 
 // Detect language changes and apply RTL mode if needed
 function applyRTLIfNeeded() {
  const htmlElement = document.documentElement;
  const currentLang = htmlElement.lang;

  // Check if the language is a right-to-left language
  const rtlLanguages = ['ar', 'he', 'fa', 'ur']; // Add more RTL languages as needed
  if (rtlLanguages.includes(currentLang)) {
    htmlElement.setAttribute('dir', 'rtl'); // Set direction to RTL
  } else {
    htmlElement.setAttribute('dir', 'ltr'); // Set direction to LTR
  }
}

// Run the function on page load
applyRTLIfNeeded();

// Observe changes to the `lang` attribute of the <html> element
const observer = new MutationObserver(() => {
  applyRTLIfNeeded();
});

observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });


// Modal
// Get the modal
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");

// Get the button that opens the modal
let modal1btn = document.getElementById("modal1btn");
let modal2btn = document.getElementById("modal2btn");
let modal3btn = document.getElementById("modal3btn");

// Get the <span> element that closes the modal
let span1 = document.getElementById("close1");
let span2 = document.getElementById("close2");
let span3 = document.getElementById("close3");

// When the user clicks on the button, open the modal
modal1btn.onclick = function() {
  console.log("Modal 1 button clicked");
  modal1.style.display = "block";
}

modal2btn.onclick = function() {
  console.log("Modal 2 button clicked");
  modal2.style.display = "block";
}

modal3btn.onclick = function() {
  console.log("Modal 3 button clicked");
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}