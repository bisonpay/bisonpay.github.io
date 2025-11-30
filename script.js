// Dark Mode Toggle
const modeToggleButton = document.getElementById('mode-toggle');
modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        modeToggleButton.textContent = '🌕'; // Moon icon for light mode
    } else {
        modeToggleButton.textContent = '🌙'; // Sun icon for dark mode
    }
});
