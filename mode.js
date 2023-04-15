const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.dark-mode').classList.add('dark-mode');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.dark-mode').classList.remove('dark-mode');
  }    
}
