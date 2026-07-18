function filterDonors() {
  let blood = document.getElementById("bloodGroup").value.toLowerCase();
  let location = document.getElementById("location").value.toLowerCase();
  let gender = document.getElementById("gender").value.toLowerCase();
  let availability = document.getElementById("availability").value.toLowerCase();

  let donors = document.querySelectorAll(".container2");
  let count = 0;

  donors.forEach(function(card) {

    let cardBlood = card.querySelector(".blood").innerText.toLowerCase();
    let cardCity = card.querySelector(".city").innerText.toLowerCase();
    let cardGender = card.querySelector(".gender").innerText.toLowerCase();
    let cardStatus = card.querySelector(".status").innerText.toLowerCase();


    let matchBlood = blood === "all blood groups" || cardBlood.includes(blood);
    let matchLocation = location === "" || cardCity.includes(location);
    let matchGender = gender === "gender" || cardGender.includes(gender);
    let matchAvailability = availability === "availability" || cardStatus.includes(availability);

    if (matchBlood && matchLocation && matchGender && matchAvailability) {
      card.style.display = "flex";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  let msg = document.getElementById("noResults");

  if (count === 0) {
    msg.classList.add("show");
  } else {
    msg.classList.remove("show");
  }
}

function resetFilters() {
  document.getElementById("bloodGroup").value = "All Blood Groups";
  document.getElementById("gender").value = "Gender";
  document.getElementById("availability").value = "Availability";
  document.getElementById("location").value = "";
  let donors = document.querySelectorAll(".container2");
  donors.forEach(function(card) {
    card.style.display = "flex";
  });
  let msg = document.getElementById("noResults");
  msg.classList.remove("show");
}
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}