// GSAP animations for enhanced interaction and smooth performance
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({   
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
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
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locomotiveAnimation()

// Function to create a typing effect
function typingAnimation(element, text, delay = 0) {
    const splitText = text.split('');
    element.innerHTML = '';
    splitText.forEach((char, index) => {
        setTimeout(() => {
            element.innerHTML += char;
        }, delay * index);
    });
}

// Animate header elements
gsap.from("header h1", { duration: 1.2, y: -100, opacity: 0, ease: "power4.out" });
gsap.from("header p", { duration: 1, x: -50, opacity: 0, ease: "power2.out", delay: 0.4 });
gsap.from(".cta-button", { duration: 1.3, scale: 0, opacity: 0, ease: "back.out(1.7)", delay: 0.8 });

// Floating section animation
gsap.from(".floating-text h2", {
    duration: 1.5,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".floating-text",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});

// Services cards animations
gsap.from(".service-card", {
    duration: 0.8,
    opacity: 1,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".services",
        start: "top 75%",
    }
});

// Pricing cards animations
gsap.from(".pricing-card", {
    duration: 0.8,
    opacity: 1,
    y: 30,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".pricing",
        start: "top 75%",
    }
});

// Testimonials cards animations
gsap.from(".testimonial-card", {
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 75%",
    }
});

// Call-to-action animation
gsap.from(".cta h2", { duration: 1.2, y: -50, opacity: 0, ease: "bounce.out", delay: 0.3 });
gsap.from(".cta p", { duration: 1, x: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".cta-button", { duration: 1.5, scale: 0, opacity: 0, ease: "elastic.out(1, 0.3)", delay: 0.8 });

// Optional: Add a fade-in effect for the footer
gsap.from("footer", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 1 });

// Adding typing effect for specific text elements
const serviceTitles = document.querySelectorAll('.service-card h3');
serviceTitles.forEach((title, index) => {
    typingAnimation(title, title.textContent, 100); // 100ms delay per character
});

// Optional: Fade in the features section with a staggered effect
const featureItems = document.querySelectorAll('.features ul li');
gsap.from(featureItems, {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".features",
        start: "top 75%",
    }
});

// Get the canvas element
const canvas = document.querySelector('.animation');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// // Dot properties
// const dots = [];
// const numDots = 100;

// for (let i = 0; i < numDots; i++) {
//     dots.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 5 + 2,
//         color: 'rgba(255, 255, 255, 0.8)',
//         speedX: (Math.random() - 0.5) * 2,  // Horizontal speed
//         speedY: (Math.random() - 0.5) * 2   // Vertical speed
//     });
// }

// Animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas

    for (const dot of dots) {
        // Update dot position
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Bounce off walls
        if (dot.x + dot.radius > canvas.width || dot.x - dot.radius < 0) {
            dot.speedX *= -1;  // Reverse direction
        }
        if (dot.y + dot.radius > canvas.height || dot.y - dot.radius < 0) {
            dot.speedY *= -1;  // Reverse direction
        }

        // Draw the dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
        ctx.closePath();
    }

    requestAnimationFrame(animate);  // Loop animation
}

// Start animation
animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

