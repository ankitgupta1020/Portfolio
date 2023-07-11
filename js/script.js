const themeSwitch = document.getElementById("themeSwitch");

// Toggle between light and dark mode
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
