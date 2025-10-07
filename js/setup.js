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

function setDynamicPageTitle() {
    // Get the current file name from the URL
    let fileName = window.location.pathname.split('/').pop().split('.html')[0];
    
    if (fileName == "index") {
        fileName = "home";
    }
    
    if (!fileName) {
        fileName = 'page';
    }

    // Capitalize the first letter and set the title
    const pageTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    document.title = `${pageTitle} - usbt0p`;
}

// Dynamically load the favicon
function setFavicon() {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' 
                    viewBox='0 0 100 100'><text x='-10' y='100' font-size='100' 
                    font-weight='bold'>𓏎</text></svg>`;
    document.head.appendChild(favicon);
}


setFavicon();
setDynamicPageTitle();