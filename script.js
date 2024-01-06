function toggleNavbar() {
  const navbar = document.querySelector('#navbar');
  navbar.classList.toggle('active');
}

function closeNavbar() {
  const navbar = document.querySelector('#navbar');
  navbar.classList.remove('active');
}