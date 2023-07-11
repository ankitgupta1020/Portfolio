const themeSwitch = document.getElementById("themeSwitch");
const header = document.querySelector(".header");

// Toggle between light and dark mode
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Add box shadow and resize header on scrolled down
document.addEventListener("scroll", (e) => {
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
});
