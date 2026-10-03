// Realtime Date & Time
function showDateTime() {
  document.getElementById('datetime').textContent = new Date().toLocaleString();
}
setInterval(showDateTime, 1000);
showDateTime();

// Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact Form Alert
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
}

// Newsletter Alert
function subscribeNewsletter(e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
  e.target.reset();
  return false;
}