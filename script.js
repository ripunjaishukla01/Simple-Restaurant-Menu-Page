const toggleBtn = document.getElementById('toggleThemeBtn');
toggleBtn.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '🌞'; 
    } else {
        toggleBtn.textContent = '🌙'; 
    }
    });
