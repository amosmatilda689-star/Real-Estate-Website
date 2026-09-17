// ==========================================
// GSAP SETUP
// ==========================================

gsap.registerPlugin(ScrollTrigger);


// ==========================================
// HERO ANIMATION
// ==========================================

const heroAnimation = gsap.timeline();

heroAnimation
    .from(".logo", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .from(".hero-label", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.3")

    .from(".hero-title", {
        y: 70,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.3")

    .from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")

    .from(".hero-btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4");


// ==========================================
// NAVBAR ANIMATION
// ==========================================

gsap.from(".nav-item", {
    y: -20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out"
});


// ==========================================
// NAVBAR WHEN SCROLLING
// ==========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector("#mainNav");

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


// ==========================================
// PROPERTY CARDS
// ==========================================

gsap.from(".property-item", {

    y: 80,
    opacity: 0,
    duration: 1,

    stagger: 0.15,

    ease: "power3.out",

    scrollTrigger: {
        trigger: "#properties",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }

});


// ==========================================
// PROPERTY IMAGE ANIMATION
// ==========================================

gsap.utils.toArray(".property-card img").forEach(function (image) {

    gsap.from(image, {

        scale: 1.15,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: image,
            start: "top 85%"
        }

    });

});


// ==========================================
// WHY CHOOSE US
// ==========================================

gsap.from(".why-heading", {

    y: 50,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".why-us",
        start: "top 80%"
    }

});


gsap.from(".choose-item", {

    y: 60,
    opacity: 0,
    duration: 0.9,

    stagger: 0.15,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".choose-card",
        start: "top 80%"
    }

});

// =====================================
// GSAP
// =====================================

gsap.registerPlugin(ScrollTrigger);


// =====================================
// AGENTS HEADING
// =====================================

gsap.from(".agents-heading", {

    y: 50,
    opacity: 0,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".agents",
        start: "top 80%",

        toggleActions:
            "play none none reverse"
    }

});


// =====================================
// AGENT CARDS
// =====================================

gsap.from(".agent-item", {

    y: 80,
    opacity: 0,

    duration: 1,

    stagger: 0.18,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".agents",

        start: "top 70%",

        toggleActions:
            "play none none reverse"
    }

});



// =====================================
// CONTACT BUTTONS
// =====================================

document.querySelectorAll(".contact-btn").forEach(function(button) {

    button.addEventListener("mouseenter", function() {

        gsap.to(button, {

            scale: 1.08,

            duration: 0.25,

            ease: "power2.out"

        });

    });


    button.addEventListener("mouseleave", function() {

        gsap.to(button, {

            scale: 1,

            duration: 0.25,

            ease: "power2.out"

        });

    });

});


// ==========================================
// PROPERTY CARD HOVER
// ==========================================

document.querySelectorAll(".property-card").forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        gsap.to(card, {
            y: -8,
            duration: 0.4,
            ease: "power2.out"
        });

    });


    card.addEventListener("mouseleave", function () {

        gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        });

    });

});


// ==========================================
// BUTTON HOVER
// ==========================================

document.querySelectorAll(".btn").forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        gsap.to(button, {
            scale: 1.04,
            duration: 0.25,
            ease: "power2.out"
        });

    });


    button.addEventListener("mouseleave", function () {

        gsap.to(button, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out"
        });

    });

});


// ==========================================
// HERO BACKGROUND PARALLAX
// ==========================================

gsap.to(".hero", {

    backgroundPosition: "50% 60%",

    ease: "none",

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }

});

// =====================================
// GSAP SETUP
// =====================================

gsap.registerPlugin(ScrollTrigger);


// =====================================
// HERO ANIMATION
// =====================================

const hero = gsap.timeline();

hero
    .from(".logo", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    })

    .from(".small-title", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    })

    .from(".about-hero h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.3")

    .from(".about-hero-content > p:last-child", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5");


// =====================================
// ABOUT IMAGE
// =====================================

gsap.from(".about-image-wrapper", {

    x: -80,
    opacity: 0,

    duration: 1.2,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%"
    }

});


// =====================================
// ABOUT TEXT
// =====================================

gsap.from(".about-text", {

    x: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%"
    }

});


// =====================================
// FEATURES
// =====================================

gsap.from(".about-feature", {

    y: 25,
    opacity: 0,

    duration: 0.7,

    stagger: 0.12,

    scrollTrigger: {
        trigger: ".about-feature",
        start: "top 85%"
    }

});


// =====================================
// MISSION + VISION
// =====================================

gsap.from(".mission-card", {

    y: 70,
    opacity: 1,

    duration: 1,

    stagger: 0.12,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".mission-section",
        start: "top 75%"
    }

});


// =====================================
// WHY US
// =====================================

gsap.from(".why-card", {

    y: 60,
    opacity: 1,

    duration: 0.9,

    stagger: 0.15,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".why-section",
        start: "top 75%"
    }

});

// ======================================
// GSAP
// ======================================

gsap.registerPlugin(ScrollTrigger);


// ======================================
// HERO ANIMATION
// ======================================

gsap.from(".property-hero-content", {

    y: 70,
    opacity: 1,

    duration: 1.2,

    ease: "power3.out"

});


