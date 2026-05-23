const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");

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

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
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
