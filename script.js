const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");
const navbar = document.querySelector(".navbar");

// Navbar scroll effect
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector("textarea").value.trim();
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

        window.location.href = `mailto:deepanshusagar18@gmail.com?subject=${subject}&body=${body}`;

        this.reset();

        if (formNote) {
            formNote.textContent = "Opening your default email app...";
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

let revealDelay = 0;
let revealTimeout = null;

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${revealDelay}ms`;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
            
            revealDelay += 100;
            if(revealTimeout) clearTimeout(revealTimeout);
            revealTimeout = setTimeout(() => { revealDelay = 0; }, 100);
        }
    });
}, {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        const activeId = `#${entry.target.id}`;

        navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === activeId);
        });
    });
}, {
    threshold: 0.45,
    rootMargin: "-20% 0px -40% 0px"
});

sections.forEach((section) => {
    sectionObserver.observe(section);
});

// Scroll Progress
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;
        scrollProgress.style.width = `${scrollPercent * 100}%`;
    });
}

// Enhanced 3D Tilt Effect with better performance
const tiltCards = document.querySelectorAll('.project-card, .focus-card');
tiltCards.forEach(card => {
    let isMouseOver = false;
    
    card.addEventListener('mouseenter', () => {
        isMouseOver = true;
    });
    
    card.addEventListener('mousemove', (e) => {
        if (!isMouseOver) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'none';
    });
    
    card.addEventListener('mouseleave', () => {
        isMouseOver = false;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    });
});

// Particle Network Background with optimization
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d', { alpha: true });
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let animationId = null;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    }
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 20) + 1;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.color = 'rgba(0, 242, 254, 0.6)';
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
            }
            
            // Subtle drift
            this.x += this.vx * 0.3;
            this.y += this.vy * 0.3;
            
            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
    }

    function init() {
        particles = [];
        let numParticles = Math.max(20, (canvas.width * canvas.height) / 15000);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = dx * dx + dy * dy;
                if (distance < 12000) {
                    opacityValue = 1 - (distance / 12000);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${opacityValue * 0.25})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
            particles[i].update();
        }
        connect();
        animationId = requestAnimationFrame(animate);
    }

    init();
    animate();
    
    // Stop animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && animationId) {
            cancelAnimationFrame(animationId);
        } else if (!document.hidden) {
            animate();
        }
    });
}

// Smooth scroll and lazy load optimization
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => {
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        const currentIndex = Array.from(navLinks).findIndex(link => link.classList.contains('is-active'));
        const nextIndex = (currentIndex + 1) % navLinks.length;
        const nextLink = navLinks[nextIndex];
        if (nextLink) {
            const targetId = nextLink.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    } else if (e.key === 'ArrowUp') {
        const currentIndex = Array.from(navLinks).findIndex(link => link.classList.contains('is-active'));
        const nextIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        const nextLink = navLinks[nextIndex];
        if (nextLink) {
            const targetId = nextLink.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});

// Contact Form Submission (Web3Forms API)
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formNote = document.getElementById('formNote');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        // Change button state
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            
            if (data.success) {
                formNote.innerText = "Success! Your message has been sent to Deepanshu.";
                formNote.style.color = "var(--success)";
                contactForm.reset();
            } else {
                formNote.innerText = "Something went wrong. Please try again or reach out on LinkedIn.";
                formNote.style.color = "var(--accent)";
            }
        } catch (error) {
            formNote.innerText = "Network error. Please try again later.";
            formNote.style.color = "var(--accent)";
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}