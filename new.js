const darkModeToggle = document.getElementById('switch-theme');

// Quando clicar no botão
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Verifica se está em dark mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '☀️ Light';
    localStorage.setItem('theme', 'dark'); // Salva "dark"
  } else {
    darkModeToggle.innerHTML = '🌙 Dark';
    localStorage.setItem('theme', 'light'); // Salva "light"
  }
});

// Quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme'); // Pega o tema salvo

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️ Light';
  } else {
    darkModeToggle.innerHTML = '🌙 Dark';
  }
});