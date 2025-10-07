/**
 * Dark Mode Toggle Module
 * Reusable script for toggling between light and dark themes
 */

(function() {
    'use strict';
    
    // Theme configuration
    const THEME_KEY = 'theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    const DARK_ICON = '🌙';
    const LIGHT_ICON = '☀️';
    
    /**
     * Get the current theme from localStorage or system preference
     */
    function getCurrentTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return THEME_DARK;
        }
        
        return THEME_LIGHT;
    }
    
    /**
     * Apply theme to the document
     */
    function applyTheme(theme) {
        if (theme === THEME_DARK) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }
    
    /**
     * Update the toggle button icon
     */
    function updateToggleIcon(theme) {
        const toggleButton = document.getElementById('dark-mode-toggle');
        if (toggleButton) {
            const icon = toggleButton.querySelector('.icon');
            if (icon) {
                icon.textContent = theme === THEME_DARK ? LIGHT_ICON : DARK_ICON;
            }
        }
    }
    
    /**
     * Toggle between light and dark themes
     */
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        
        localStorage.setItem(THEME_KEY, newTheme);
        applyTheme(newTheme);
        updateToggleIcon(newTheme);
    }

    // make toggleTheme function globally accessible
    window.toggleTheme = toggleTheme;
    
    /**
     * Initialize dark mode functionality
     */
    function init() {
        // Apply saved or default theme
        const currentTheme = getCurrentTheme();
        applyTheme(currentTheme);
        updateToggleIcon(currentTheme);
        
        // Add event listener to toggle button
        const toggleButton = document.getElementById('dark-mode-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-update if user hasn't manually set a preference
                if (!localStorage.getItem(THEME_KEY)) {
                    const newTheme = e.matches ? THEME_DARK : THEME_LIGHT;
                    applyTheme(newTheme);
                    updateToggleIcon(newTheme);
                }
            });
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// Add event listeners for hover and click effects on the dark mode toggle button
// The CSS handles the scaling effects
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    // Handle hover effect
    darkModeToggle.addEventListener('mouseover', () => {});
    darkModeToggle.addEventListener('mouseout', () => {});
    // Handle click effect
    darkModeToggle.addEventListener('mousedown', () => {});
    darkModeToggle.addEventListener('mouseup', () => {});
}
