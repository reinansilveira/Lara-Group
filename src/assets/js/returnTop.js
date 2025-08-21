
const backToTopButton = document.querySelector('.footer__return-top');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        return backToTopButton.classList.add('visible');  
    }
    backToTopButton.classList.remove('visible');  
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
});
