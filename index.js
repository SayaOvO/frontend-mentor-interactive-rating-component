let selectedRating;
let lastSelected = null;

const ratingBtns = document.querySelectorAll(".rating-btn");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const ratingValue = document.querySelector(".rating-value");
const container = document.querySelector(".feedback");

function handleRate() {
  selectedRating = Number(this.dataset["ratingValue"]);

  if (lastSelected !== null && lastSelected !== this) {
    const idx = Array.from(ratingBtns).indexOf(lastSelected);
    ratingBtns[idx].setAttribute("aria-selected", "false");
  }
  lastSelected = this;
  this.setAttribute("aria-selected", "true");
  submitBtn.removeAttribute("disabled");
}

for (const ratingBtn of ratingBtns) {
  ratingBtn.addEventListener("click", handleRate);
}

function handleSumbit(e) {
  e.preventDefault();
  ratingValue.textContent = selectedRating;
  container.setAttribute("data-user-submitted", "true");
}

form.addEventListener("submit", handleSumbit);
