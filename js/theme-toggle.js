// Theme Toggle - JavaScript puro para alternância de tema claro/escuro
(function () {
    'use strict';

    const THEME_KEY = 'theme-preference';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';

    // Seletores
    const html = document.documentElement;
    const toggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Verifica se o botão existe
    if (!toggleButton) {
        return;
    }

    // Obtém tema salvo ou preferência do sistema
    function getInitialTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            return savedTheme;
        }
        // Prefere tema escuro como padrão (conforme requisito)
        return DARK_THEME;
    }

    // Aplica o tema
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        updateButtonAriaLabel(theme);
    }

    // Atualiza aria-label do botão
    function updateButtonAriaLabel(theme) {
        const nextTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        const label = nextTheme === DARK_THEME
            ? 'Alternar para tema escuro'
            : 'Alternar para tema claro';
        toggleButton.setAttribute('aria-label', label);
    }

    // Alterna o tema
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme') || DARK_THEME;
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        applyTheme(newTheme);
    }

    // Inicializa
    function init() {
        const initialTheme = getInitialTheme();
        applyTheme(initialTheme);

        // Event listener no botão
        toggleButton.addEventListener('click', toggleTheme);

        // Suporte a teclado (Enter/Space)
        toggleButton.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
    }

    // Inicia quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();