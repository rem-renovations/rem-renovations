// Toggle the mobile menu
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  navLinks.classList.toggle('active');
});
