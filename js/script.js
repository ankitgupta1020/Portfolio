const themeSwitchBtn = document.getElementById("themeSwitch");
const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav-link");
const section = document.querySelectorAll(".section");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.children);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".carousel-dots");

// Function to toggle dark-mode class to the body
function themeToggle() {
  document.body.classList.toggle("dark-mode");
}

// Add event listeners to button
themeSwitchBtn.addEventListener("click", themeToggle);

// ------------------------------- //

// Function to add scrolled-down class to the header while scrolling down
function scrolledDown(e) {
  const scrollPosition = e.target.scrollingElement.scrollTop;

  if (scrollPosition > 10) {
    if (!header.classList.contains("scrolled-down")) {
      header.classList.add("scrolled-down");
    }
  } else {
    if (header.classList.contains("scrolled-down")) {
      header.classList.remove("scrolled-down");
    }
  }
}

// Add event listeners for scroll
document.addEventListener("scroll", scrolledDown);

// ------------------------------- //

// Function to active navigation link on scroll
function activeNavLink() {
  let length = section.length;
  while (--length && window.scrollY + 97 < section[length].offsetTop) {}
  navLink.forEach((link) => link.classList.remove("active"));
  navLink[length].classList.add("active");
}

// Add event listeners for scroll
window.addEventListener("scroll", activeNavLink);

// ------------------------------- //

// Smooth scrolling animation
navLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link")) {
      mobileNavBtn.classList.toggle("active");
    }
  });
});

// ------------------------------- //

// Toggle mobile naviagtion
mobileNavBtn.addEventListener("click", function () {
  mobileNavBtn.classList.toggle("active");
});

// ------------------------------- //

// Track the current slide
let currentSlide = 0;

// Function to move the carousel to the next slide
function moveToSlide(slideIndex) {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;
  updateDots();
}

// Function to handle the next button click
function nextSlide() {
  if (currentSlide === slides.length - 1) {
    moveToSlide(0);
  } else {
    moveToSlide(currentSlide + 1);
  }
}

// Function to handle the previous button click
function prevSlide() {
  if (currentSlide === 0) {
    moveToSlide(slides.length - 1);
  } else {
    moveToSlide(currentSlide - 1);
  }
}

// Function to update the active dot
function updateDots() {
  const dots = Array.from(dotsContainer.children);
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Create carousel navigation dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

// Add event listeners to buttons and dots
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    const clickedDot = event.target;
    const dotIndex = Array.from(dotsContainer.children).indexOf(clickedDot);
    moveToSlide(dotIndex);
  }
});

// Set the initial active dot
updateDots();
