
const header = document.querySelector('.header'),
    menuToggle = document.querySelector('.header__menu-toggle'),
    searchToggle = document.querySelector('.header__search-toggle'),
    searchBox = document.querySelector('.header__search-box'),
    dropdownItems = document.querySelectorAll('.header__item--has-dropdown'),
    main = document.querySelector('main');

const closeAllDropdowns = () => {
    dropdownItems.forEach(drop => {
        drop.classList.remove('active');
    });
    document.body.classList.remove('scroll-lock');

    if (searchBox.classList.contains('visible')) {
        searchBox.classList.remove('visible');
        searchToggle.classList.remove('active');
        searchToggle.setAttribute('aria-expanded', false);
        main.classList.remove('activeGradient');
    }
};

const toggleMenu = () => {
    header.classList.toggle('menu-open');
    const isMenuOpen = header.classList.contains('menu-open');
    menuToggle.setAttribute('aria-expanded', isMenuOpen);
};

const toggleDropdownItem = (item) => {
    const button = item.querySelector('.header__button');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isActive = item.classList.contains('active');

        closeAllDropdowns();

        if (!isActive) {
            item.classList.add('active');
            document.body.classList.add('scroll-lock');
        }
    });
};

const toggleSearch = () => {
    const isActive = searchBox.classList.toggle('visible');
    searchToggle.classList.toggle('active');
    searchToggle.setAttribute('aria-expanded', isActive);

    if (isActive) {
        document.body.classList.add('scroll-lock');
        main.classList.add('activeGradient');
    }

    if (!isActive) {
        document.body.classList.remove('scroll-lock');
        main.classList.remove('activeGradient');
    }

};

dropdownItems.forEach(toggleDropdownItem);

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

if (searchToggle && searchBox) {
    searchToggle.addEventListener('click', toggleSearch);
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__item--has-dropdown') && !e.target.closest('.header__search-toggle') && !e.target.closest('.header__search-box')) {
        closeAllDropdowns();
    }
});
