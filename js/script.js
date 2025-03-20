const themeSwitchBtn = document.getElementById("themeSwitch");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.children);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".carousel-dots");

// Function to toggle dark-mode class on the body
const themeToggle = () => {
  document.body.classList.toggle("dark-mode");
};

// Add event listener to theme switch button
themeSwitchBtn.addEventListener("click", themeToggle);

// Function to add scrolled-down class to the header while scrolling
const scrolledDown = () => {
  const scrollPosition = document.documentElement.scrollTop;

  header.classList.toggle("scrolled-down", scrollPosition > 10);
};

// Add event listener for scroll
document.addEventListener("scroll", scrolledDown);

// Function to activate navigation link on scroll
const activeNavLink = () => {
  let length = sections.length;
  while (--length && window.scrollY + 97 < sections[length].offsetTop) {}
  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[length].classList.add("active");
};

// Add event listener for scroll
window.addEventListener("scroll", activeNavLink);

// Smooth scrolling animation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll to other links
    if (href.startsWith("#") && href !== "#") {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      mobileNavBtn.classList.toggle("active");
    }
  });
});

// Toggle mobile navigation
mobileNavBtn.addEventListener("click", () => {
  mobileNavBtn.classList.toggle("active");
});

// Track the current slide
let currentSlide = 0;

// Function to move the carousel to the specified slide
const moveToSlide = (slideIndex) => {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;
  updateDots();
};

// Function to handle the next button click
const nextSlide = () => {
  moveToSlide((currentSlide + 1) % slides.length);
};

// Function to handle the previous button click
const prevSlide = () => {
  moveToSlide((currentSlide - 1 + slides.length) % slides.length);
};

// Function to update the active dot
const updateDots = () => {
  const dots = Array.from(dotsContainer.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
};

// Create carousel navigation dots
slides.forEach(() => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
});

// Add event listeners to buttons and dots
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    const dotIndex = Array.from(dotsContainer.children).indexOf(event.target);
    moveToSlide(dotIndex);
  }
});

// Set the initial active dot
updateDots();