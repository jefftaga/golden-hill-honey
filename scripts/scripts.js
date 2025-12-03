// Button hover animation
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Mobile nav toggle
const navToggle = document.createElement('div');
navToggle.textContent = '☰';
navToggle.style.cursor = 'pointer';
navToggle.style.fontSize = '1.5rem';
navToggle.style.color = '#fff';
navToggle.style.marginLeft = 'auto';

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

if (navbar && navLinks) {
  navbar.insertBefore(navToggle, navLinks);

  navToggle.addEventListener('click', () => {
    navLinks.style.display =
      navLinks.style.display === 'flex' || navLinks.style.display === ''
        ? 'none'
        : 'flex';
  });
}