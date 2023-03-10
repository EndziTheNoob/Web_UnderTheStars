// JavaScript for Toggle Menu //

let navLinks = document.getElementById('navLinks');
function showMenu() {
  navLinks.style.right = '0';
}
function hideMenu() {
  navLinks.style.right = '-200px';
}

// JS for header button

function scrollWin() {
  window.scrollTo({
    top: 800,
    behavior: 'smooth',
  });
}
