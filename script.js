// Rocketship Cursor Logic
const rocket = document.createElement('div');
rocket.id = 'rocket-cursor';
rocket.innerHTML = '🚀';
document.body.appendChild(rocket);

let mouseX = 0;
let mouseY = 0;
let rocketX = 0;
let rocketY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // This creates that smooth "chasing" delay
    let dx = mouseX - rocketX;
    let dy = mouseY - rocketY;
    
    rocketX += dx * 0.1;
    rocketY += dy * 0.1;
    
    rocket.style.left = rocketX + 'px';
    rocket.style.top = rocketY + 'px';
    
    // Rotate the rocket based on movement direction
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    rocket.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
    
    requestAnimationFrame(animate);
}
animate();

// Hint Popup Logic
const popup = document.getElementById('hint-popup');
if (popup) {
    setTimeout(() => { popup.classList.add('active'); }, 2000);
    setTimeout(() => { popup.classList.remove('active'); }, 8000);
}

// Easter Egg Logic
let clicks = 0;
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        clicks++;
        if (clicks === 5) {
            document.body.classList.toggle('hyper-mode');
            alert("HYPER-GLAZE MODE ENGAGED 🚀✨");
            clicks = 0;
        }
    });
}