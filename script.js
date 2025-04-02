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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === SLIDER FUNCTIONALITY ===

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const sliderContainer = document.querySelector('.slider-container');

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
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  // Move the slider to the correct position
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
}

// Arrow buttons
if (nextBtn) nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});
if (prevBtn) prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

// Ensure all 4 sliders are visible by setting correct width
document.querySelector('.slider').style.width = `${slides.length * 100}vw`;

// Autoplay
let autoplay = setInterval(nextSlide, 4000);
function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextSlide, 4000);
}

// Pause autoplay on hover
if (sliderContainer) {
  sliderContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
  sliderContainer.addEventListener('mouseleave', () => {
    autoplay = setInterval(nextSlide, 4000);
  });
}

// Mobile Swipe Support
let startX = 0;
let endX = 0;

const sliderWrapper = document.querySelector('.slider-wrapper');

if (sliderWrapper) {
  sliderWrapper.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchmove', function (e) {
    endX = e.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchend', function () {
    if (startX - endX > 50) {
      nextSlide();
      resetAutoplay();
    } else if (endX - startX > 50) {
      prevSlide();
      resetAutoplay();
    }
  });
}
