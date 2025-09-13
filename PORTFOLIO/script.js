// Theme toggle
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
  });
}

// Contact form
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! 🚀");
    contactForm.reset();
  });
}
