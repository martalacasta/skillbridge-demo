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

// Seed example projects in localStorage if not present
(function seedProjects() {
    if (!localStorage.getItem('projects')) {
        const exampleProjects = [
            {
                companyName: "Acme Corp",
                email: "contact@acme.com",
                skill: "Web Development",
                description: "Build a responsive landing page for our new product launch, including contact form and newsletter signup.",
                duration: 2,
                budget: 1500
            },
            {
                companyName: "DataWiz",
                email: "info@datawiz.io",
                skill: "Data Analysis",
                description: "Analyze customer churn data and create a dashboard with actionable insights for our sales team.",
                duration: 3,
                budget: 2000
            },
            {
                companyName: "MobileX",
                email: "hello@mobilex.com",
                skill: "Mobile App",
                description: "Fix bugs and improve performance in our existing React Native iOS/Android app.",
                duration: 1,
                budget: 1000
            },
            {
                companyName: "CloudOps",
                email: "support@cloudops.net",
                skill: "DevOps",
                description: "Set up CI/CD pipelines for automated testing and deployment to AWS.",
                duration: 2,
                budget: 1800
            },
            {
                companyName: "ML Insights",
                email: "team@mlinsights.ai",
                skill: "Machine Learning",
                description: "Develop a sentiment analysis model for customer feedback using TensorFlow.",
                duration: 4,
                budget: 2500
            }
        ];
        localStorage.setItem('projects', JSON.stringify(exampleProjects));
    }
})();

// Render projects from localStorage into the UI
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    if (!projects.length) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-light)">No projects found.</p>';
        return;
    }
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-header">
                <span class="project-tag">${project.skill || ''}</span>
                <span class="project-status completed">Completed</span>
            </div>
            <h3>${project.description.length > 40 ? project.description.slice(0, 40) + '...' : project.description}</h3>
            <p>${project.description}</p>
            <div class="project-meta">
                <span class="project-duration">⏱ ${project.duration} week${project.duration > 1 ? 's' : ''}</span>
                <span class="project-expert">👤 ${project.companyName}</span>
                <span class="project-budget">💰 $${project.budget}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Seed projects and render on DOMContentLoaded
// Remove any previous IIFE or DOMContentLoaded for seeding/rendering

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('projects')) {
        const exampleProjects = [
            {
                companyName: "Acme Corp",
                email: "contact@acme.com",
                skill: "Web Development",
                description: "Build a responsive landing page for our new product launch, including contact form and newsletter signup.",
                duration: 2,
                budget: 1500
            },
            {
                companyName: "DataWiz",
                email: "info@datawiz.io",
                skill: "Data Analysis",
                description: "Analyze customer churn data and create a dashboard with actionable insights for our sales team.",
                duration: 3,
                budget: 2000
            },
            {
                companyName: "MobileX",
                email: "hello@mobilex.com",
                skill: "Mobile App",
                description: "Fix bugs and improve performance in our existing React Native iOS/Android app.",
                duration: 1,
                budget: 1000
            },
            {
                companyName: "CloudOps",
                email: "support@cloudops.net",
                skill: "DevOps",
                description: "Set up CI/CD pipelines for automated testing and deployment to AWS.",
                duration: 2,
                budget: 1800
            },
            {
                companyName: "ML Insights",
                email: "team@mlinsights.ai",
                skill: "Machine Learning",
                description: "Develop a sentiment analysis model for customer feedback using TensorFlow.",
                duration: 4,
                budget: 2500
            }
        ];
        localStorage.setItem('projects', JSON.stringify(exampleProjects));
    }
    renderProjects();
});

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
