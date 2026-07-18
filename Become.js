document.addEventListener("DOMContentLoaded", function () {

  let current = 0;

  const steps = document.querySelectorAll(".step");
  const progress = document.getElementById("progress");
  const form = document.getElementById("form");
  const success = document.getElementById("success");

  function showStep(i) {
    steps.forEach(step => step.classList.remove("active"));
    steps[i].classList.add("active");

    progress.style.width = ((i + 1) / steps.length) * 100 + "%";
  }

  window.nextStep = function () {
    if (current < steps.length - 1) {
      current++;
      showStep(current);
    }
  };

  window.prevStep = function () {
    if (current > 0) {
      current--;
      showStep(current);
    }
  };
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted"); // DEBUG

    form.style.display = "none";

    const bar = document.querySelector(".progress-bar");
    if (bar) bar.style.display = "none";

    success.style.display = "block";
  });

  showStep(0);
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}