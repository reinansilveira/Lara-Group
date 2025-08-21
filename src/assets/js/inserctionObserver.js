
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            observer.unobserve(entry.target);
        }
    });
};

const options = {
    root: null,        
    rootMargin: '0px',  
    threshold: 0.1      
};

const observer = new IntersectionObserver(callback, options);

const items = document.querySelectorAll('.observer');

items.forEach(item => {
    observer.observe(item);
});
