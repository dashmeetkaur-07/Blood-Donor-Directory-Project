const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}