fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('header').innerHTML = data;

        // Reinitialize dark mode functionality
        const toggleButton = document.getElementById('dark-mode-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
    })
    .catch(error => {
        console.error('Error loading navigation:', error);
    });

// Load footer dynamically
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading footer:', error);
    });