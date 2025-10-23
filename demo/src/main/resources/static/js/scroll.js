document.querySelectorAll('a.scroll').forEach(anchor => {
    if (anchor.getAttribute('href') === '#') {
        return;
    }

    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: 'smooth',
                duration: 2000
            });
        }
    });
});