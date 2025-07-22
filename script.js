document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });


    const mainNav = document.getElementById('main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
            mainNav.classList.add('scrolled'); 
        } else {
            mainNav.classList.remove('scrolled'); 
        }
    });

    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                
                
                if (entry.target.id === 'skills') {
                    const skillLevels = entry.target.querySelectorAll('.skill-level');
                    skillLevels.forEach(skill => {
                        skill.classList.add('fill'); 
                    });
                }
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section); 
    });

    
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
            setTimeout(() => {
                scrollToTopBtn.style.opacity = '1';
            }, 10); 
        } else {
            scrollToTopBtn.style.opacity = '0'; 
            setTimeout(() => {
                if (window.scrollY <= 300) { 
                    scrollToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});