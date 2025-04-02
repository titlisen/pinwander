// Show a welcome alert when the website loads
window.onload = function () {
  alert("Welcome to WanderWave Tours! 🌍✈️");
};

// Scroll to top button logic
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === SLIDER FUNCTIONALITY ===

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.slider-dots');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    goToSlide(index);
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
  currentSlide = index;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

// Autoplay
let autoplay = setInterval(() => goToSlide((currentSlide + 1) % slides.length), 4000);
