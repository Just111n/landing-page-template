// Header Section
const hamburger = document.querySelector(".nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".nav-bar .nav-list ul");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.position = "fixed";
    header.style.opacity = 0.8;
    header.style.zIndex = 1000;
  } else {
    header.style.position = "static";
    header.style.opacity = 1;
  }
});

// Sideshow Section
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Hook Section
