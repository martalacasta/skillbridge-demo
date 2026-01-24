// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, project cards, and steps
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .project-card, .step');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form submission
const submitForm = document.getElementById('submitForm');
const formMessage = document.getElementById('formMessage');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous message
    formMessage.textContent = '';
    formMessage.classList.remove('success');
    
    // Get form data
    const formData = new FormData(submitForm);
    const company = formData.get('companyName');
    const email = formData.get('email');
    const skill = formData.get('skill');
    const duration = formData.get('duration');
    const budget = formData.get('budget');
    const description = formData.get('description');
    
    // Simple validation
    if (!company || !email || !skill || !duration || !budget || !description) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#FEE2E2';
        formMessage.style.color = '#991B1B';
        formMessage.style.borderColor = '#F87171';
        if (document.body.classList.contains('dark-mode')) {
            formMessage.style.backgroundColor = '#7F1D1D';
            formMessage.style.color = '#FEE2E2';
        }
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#FEE2E2';
        formMessage.style.color = '#991B1B';
        formMessage.style.borderColor = '#F87171';
        if (document.body.classList.contains('dark-mode')) {
            formMessage.style.backgroundColor = '#7F1D1D';
            formMessage.style.color = '#FEE2E2';
        }
        return;
    }
    
    // Show success message
    formMessage.textContent = 'Thank you! Your project has been submitted. We\'ll review it and match you with the right expert soon.';
    formMessage.classList.add('success');
    formMessage.style.display = 'block';
    
    // Clear form fields
    submitForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});
