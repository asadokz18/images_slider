const active = document.getElementById("active");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

function goTo(i) {
  index = (i + slides.length) % slides.length;  // wrap around
  active.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => goTo(index + 1));
prevBtn.addEventListener("click", () => goTo(index - 1));

// optional autoplay
setInterval(() => goTo(index + 1), 5000);
