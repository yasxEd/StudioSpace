// Split text by lines and chars using SplitType library
new SplitType('[split-lines]', { type: 'lines', linesClass: "split-line" });

// Add event listeners for the 'about-hover' elements
document.addEventListener('DOMContentLoaded', () => {
    const aboutHover = document.querySelectorAll('.about-hover');

    aboutHover.forEach((element) => {
        // Initially add 'unhover' class to all elements
        element.classList.add('unhover');

        // Remove 'unhover' class on mouseover
        element.addEventListener('mouseover', () => {
            element.classList.remove('unhover');
        });

        // Add 'unhover' class on mouseleave
        element.addEventListener('mouseleave', () => {
            element.classList.add('unhover');
        });
    });

    // Run animations on window load using GSAP timeline
    window.addEventListener('load', () => {
        gsap
            .timeline({
                defaults: {
                    ease: 'none',
                },
            })
            // Animation for '.about-subtitle'
            .to(".about-subtitle", {
                opacity: 0.7,
                ease: "none",
                duration: 0.4
            }, '>0.5')
            // Animation for '.about-text'
            .to(".about-text", {
                opacity: 1,
                ease: "none",
                duration: 0
            }, '<')
            // Animation for text lines in '.about-text'
            .fromTo(".about-text .split-line", {
                y: '100%'
            }, {
                y: 0,
                opacity: 1,
                ease: "sine.out",
                transformOrigin: "top",
                stagger: 0.1,
                duration: 1.2
            }, '<0.4')
            // Animation for '.about-down'
            .to(".about-down", {
                opacity: 1,
                ease: "sine.out",
                transformOrigin: "top",
                stagger: 0.1,
                duration: 0.4
            }, '>')
            // Remove 'overflow-hidden' class from body after animations
            .call(() => {
                document.querySelector('body').classList.remove('overflow-hidden');
            });
    });
});

// LocomotiveScroll and ScrollTrigger initialization function
const locomotiveScrollTrigger = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize LocomotiveScroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-locomotive-scroll]"),
        smooth: true
    });

    // Update ScrollTrigger when LocomotiveScroll is scrolled
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set up ScrollTrigger scrollerProxy for LocomotiveScroll
    ScrollTrigger.scrollerProxy("[data-locomotive-scroll]", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("[data-locomotive-scroll]").style.transform
            ? "transform"
            : "fixed"
    });

    // Update LocomotiveScroll on ScrollTrigger refresh
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
};

// Call the locomotiveScrollTrigger function to initialize LocomotiveScroll and ScrollTrigger
locomotiveScrollTrigger();

// Custom cursor handling function
const customCursor = () => {
    // Select the cursor element
    var cursor = document.querySelector(".cursor");

    // Update cursor position on mousemove
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
        cursor.style.opacity = 1;
    });

    // Hide cursor on mouseout
    window.addEventListener("mouseout", () => {
        cursor.style.opacity = 0;
    });
};

// Call the customCursor function to initialize the custom cursor
customCursor();

// Add event listener to handle video container behavior on scroll
document.addEventListener("DOMContentLoaded", function () {
    var videoContainer = document.querySelector(".section_1");
    var videoElement = videoContainer.querySelector("video");

    // Update video container class based on scroll position
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > 50) {
            videoContainer.classList.add("fullscreen");
        } else {
            videoContainer.classList.remove("fullscreen");
        }
    });
});

// GSAP timeline for animations
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_1 h1",
        scroller: "#main",
        start: "top 15%",
        end: "top 0%",
        scrub: 3
    }
});

// Animation for the first h1 element in '.section_1'
tl.to(".section_1 h1:nth-child(1)", { x: -100 }, "anim");

// Animation for the second h1 element in '.section_1'
tl.to(".section_1 h1:nth-child(2)", { x: 100 }, "anim");

// Update for video element
tl.to(".section_1 video", {
    width: "120%", // Increase the width when scrolling down
    top: "-20px", // Move the video up
}, "anim");

// Update for background color transition in '.section_2'
/*tl.to("#main", {
    backgroundColor: "#0e0c0c",
    scrollTrigger: {
        trigger: ".section_2",
        scroller: "#main",
        start: "top 550px",
        end: "top 650px",
        onEnter: updateBoxShadowColor // Call the function when entering the trigger range
    }
});*/

// Color change animation for text elements in '.section_2'
//tl.to(".section_2 h1, .section_2 h3", { color: "#0e0c0c" });

// Additional custom animations for a different section with class 'custom-about-hover'
document.addEventListener('DOMContentLoaded', () => {
    const aboutHover = document.querySelectorAll('.custom-about-hover');

    aboutHover.forEach((element) => {
        element.classList.add('unhover');

        element.addEventListener('mouseover', () => {
            element.classList.remove('unhover');
        });

        element.addEventListener('mouseleave', () => {
            element.classList.add('unhover');
        });
    });

    window.addEventListener('load', () => {
        gsap
            .timeline({
                defaults: {
                    ease: 'none',
                },
            })
            // Animation for '.custom-about-subtitle'
            .to(".custom-about-subtitle", {
                opacity: 0.7,
                ease: "none",
                duration: 0.4
            }, '>0.5')
            // Animation for '.custom-about-text'
            .to(".custom-about-text", {
                opacity: 1,
                ease: "none",
                duration: 0
            }, '<')
            // Animation for text lines in '.custom-about-text'
            .fromTo(".custom-about-text .split-line", {
                y: '100%'
            }, {
                y: 0,
                opacity: 1,
                ease: "sine.out",
                transformOrigin: "top",
                stagger: 0.1,
                duration: 1.2
            }, '<0.4')
            // Animation for '.custom-about-down'
            .to(".custom-about-down", {
                opacity: 1,
                ease: "sine.out",
                transformOrigin: "top",
                stagger: 0.1,
                duration: 0.4
            }, '>')
            // Remove 'overflow-hidden' class from body after animations
            .call(() => {
                document.querySelector('body').classList.remove('overflow-hidden');
            });
    });
});
