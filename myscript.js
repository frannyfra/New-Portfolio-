//Get the button:
mybutton = document.getElementById("myBtn");

const toggle = () => {
  let element = document.getElementById("myTopnav");
  element.className === "topnav" ?
    element.className += " responsive"
    :
    element.className = "topnav";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (window.matchMedia("(min-width : 1250px)").matches) {
    scrollNavbar()
  }
  else { scrollFunction() }
};

// button scroll function 
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let prevScrollpos = window.pageYOffset;
const scrollNavbar = () => {
  let currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-110px";
    }
  }
  else null;
  prevScrollpos = currentScrollPos;
}



// tesxt slider
let slideIndex = 1;
const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}




