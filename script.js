/* =========================================
   JOAS WEAR — MAIN JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }

            document.body.classList.add("menu-open");

        } else {

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            document.body.classList.remove("menu-open");

        }

    });


    /* Close menu when a navigation link is clicked */

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            document.body.classList.remove("menu-open");

        });

    });

}


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header = document.querySelector("header");

function handleNavbarScroll() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleNavbarScroll);

handleNavbarScroll();


/* =========================================
   HERO ENTRANCE ANIMATION
========================================= */

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        setTimeout(() => {

            heroContent.classList.add("show");

        }, 150);

    }

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealSections = document.querySelectorAll(
    '.intro, .featured, .statement, .shop-cta'
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealSections.forEach((section) => {

    section.classList.add('reveal');

    revealObserver.observe(section);

});


/* =========================================
   MOBILE MENU — PREVENT BACKGROUND SCROLL
========================================= */

const body = document.body;

function preventBackgroundScroll() {

    if (navLinks && navLinks.classList.contains("active")) {

        body.style.overflow = "hidden";

    } else {

        body.style.overflow = "";

    }

}

if (menuToggle) {

    menuToggle.addEventListener("click", preventBackgroundScroll);

}


/* =========================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    if (!menuToggle || !navLinks) return;

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedToggle &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";

    }

});


/* =========================================
   ESC KEY — CLOSE MOBILE MENU
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && navLinks) {

        navLinks.classList.remove("active");

        const icon = menuToggle?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";

    }

});


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(
    ".btn, .primary-btn, .secondary-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================
   UPDATE CURRENT YEAR
========================================= */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================
   IMAGE LOAD FADE
========================================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener("load", () => {

            image.classList.add("loaded");

        });

    }

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log("JOAS WEAR — Website loaded successfully.");
