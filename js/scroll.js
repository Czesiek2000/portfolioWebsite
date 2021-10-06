// scroll to specific link after click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});

// scroll top
document.querySelector('.scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
})