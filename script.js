document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    var themeToggleText = document.body.classList.contains('light-mode') ? '🌞' : '🌜';
    document.getElementById('theme-toggle').textContent = themeToggleText;
});
