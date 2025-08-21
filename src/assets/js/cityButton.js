const splide = new Splide('.splide--city', {
    type: 'fade',
    rewind: true,
    autoplay: true,
    interval: 4000,
    speed: 800,
    arrows: true,
    pagination: true,
});
splide.mount();

['.button--maua', '.button--porto', '.button--uberaba'].forEach(selector => {
    document.querySelectorAll(`li${selector}`).forEach(li => {
        li.removeAttribute('role');
        li.removeAttribute('aria-pressed');
        li.removeAttribute('aria-selected');
    });
});

const mauaBtn = document.querySelector('.button--maua');
const portoBtn = document.querySelector('.button--porto');
const uberabaBtn = document.querySelector('.button--uberaba');

const buttons = [mauaBtn, portoBtn, uberabaBtn];
const colors = ['#E73D63', '#00B3CE', '#ED7237'];
const nothingActiveColor = [' #E73D637D', '#00b3ce4f', '#ed713749'];

const activeSlide = (index) => {
    const splideElement = document.querySelector('.splide--city');
    if (!splideElement) return;

    splideElement.querySelectorAll('.splide__slide .city__trace')
        .forEach(trace => trace.style.removeProperty('background-color'));

    const currentActiveSlideElement = splideElement.querySelector(`.splide__slide.is-active`);
    currentActiveSlideElement?.querySelector('.city__trace')?.style.setProperty('background-color', colors[index]);

    splideElement.querySelectorAll('.splide__arrow')
        .forEach(arrow => arrow.style.setProperty('background-color', colors[index]));


    splideElement.querySelectorAll('.splide__pagination__page')
        .forEach((dot, dotIndex) => {
            dot.style.removeProperty('background-color');
            dot.style.removeProperty('border');

            dot.style.setProperty('background-color', nothingActiveColor[index], 'important');
            dot.style.setProperty('border', `1px solid ${colors[index]}`, 'important');

            if (dotIndex === index) {
                dot.style.setProperty('background-color', colors[index], 'important');
                dot.style.setProperty('border', `2px solid ${colors[index]}`, 'important');
            }
        });

    buttons.forEach((btn, btnIndex) => {
        btn?.classList.toggle('active', btnIndex === index);
    });
};

mauaBtn?.addEventListener('click', () => splide.go(0));
portoBtn?.addEventListener('click', () => splide.go(1));
uberabaBtn?.addEventListener('click', () => splide.go(2));

splide.on('moved', newIndex => activeSlide(newIndex));

activeSlide(splide.index);
