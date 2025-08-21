document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 4000,
        speed: 800,
        arrows: true,
        pagination: true,
        lazyLoad: 'nearby',
    });

    splide.mount();


    const list = document.querySelector('.splide__list');
    if (list) {
        list.setAttribute('role', 'list');
    }

    document.querySelectorAll('.splide__slide').forEach(slide => {
        const role = slide.getAttribute('role');

        if (role !== 'listitem') {
            slide.setAttribute('role', 'listitem');
        }
        slide.removeAttribute('aria-pressed');
        slide.removeAttribute('aria-selected');
    });
});
