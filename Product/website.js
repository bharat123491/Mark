// Get the canvas element
const canvas = document.querySelector('.animation');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Dot properties
const dots = [];
const numDots = 100;

for (let i = 0; i < numDots; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: 'rgba(255, 255, 255, 0.8)',
        speedX: (Math.random() - 0.5) * 2,  // Horizontal speed
        speedY: (Math.random() - 0.5) * 2   // Vertical speed
    });
}

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
