
const toggle = () => {
  let element = document.getElementById("myTopnav");
  element.className === "topnav" ?
    element.className += " responsive"
    :
    element.className = "topnav";
}

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
let currentScrollPos = window.pageYOffset;
const navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
      } else{
      navbar.style.top = "-110px";
      }
    }
    else null;
  prevScrollpos = currentScrollPos;
}

let slideIndex = 1;
const showSlides =(n)=>  {
 let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}


