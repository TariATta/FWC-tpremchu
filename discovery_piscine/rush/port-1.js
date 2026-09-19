const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault(); 
            const targetSection = document.querySelector(href);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, 
                    behavior: 'smooth'
                });
            }
        }
    });
});