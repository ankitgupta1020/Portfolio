// JavaScript for Theme Switching
document.getElementById('themeSwitch').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.classList.toggle('active');
    
    // Save the theme preference in local storage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Load the theme preference from local storage
  window.addEventListener('load', function() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('themeSwitch').classList.add('active');
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('themeSwitch').classList.remove('active');
    }
  });
  