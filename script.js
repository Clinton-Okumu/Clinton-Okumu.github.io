function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
  }

  function updateThemeIcons(theme) {
    const desktopBtn = document.getElementById('theme-toggle');
    const mobileBtn = document.getElementById('theme-toggle-mobile');
    const icon = theme === 'dark' ? '☀️' : '🌙';
    desktopBtn.textContent = icon;
    mobileBtn.textContent = icon;
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    const desktopBtn = document.getElementById('theme-toggle');
    const mobileBtn = document.getElementById('theme-toggle-mobile');
    desktopBtn.addEventListener('click', toggleTheme);
    mobileBtn.addEventListener('click', toggleTheme);
  }

  function updateCurrentYear() {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    updateCurrentYear();
  });
