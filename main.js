// Simple Scroll Animation for Sticky Nav
window.addEventListener('scroll', () => {
    const header = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        header.style.padding = '10px 40px';
    } else {
        header.style.padding = '15px 40px';
    }
});

// Button Click Animations
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Form Submit Handling
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    });
}
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// කලින් save කරපු theme එකක් තියෙනවාද බලන්න
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun'); // ඉරේ අයිකනය පෙන්වන්න
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // අයිකනය මාරු කිරීම
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark'); // පරිශීලකයාගේ තේරීම මතක තබා ගන්න
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});