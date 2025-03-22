// script.js

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

<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 4000); // Change slide every 4 seconds
</script>

// Mobile Swipe Support
let startX = 0;
let endX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", function (e) {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", function () {
  if (startX - endX > 50) {
    nextSlide(); // Swipe left
  } else if (endX - startX > 50) {
    prevSlide(); // Swipe right
  }
});
