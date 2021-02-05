
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
      } else {
      navbar.style.top = "-110px";
      }
    }
    else null;
  prevScrollpos = currentScrollPos;
}

