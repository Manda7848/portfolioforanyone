const rocket = document.createElement('div');
rocket.id = 'rocket-cursor';
rocket.innerHTML = '🚀';
document.body.appendChild(rocket);

let mouseX = 0, mouseY = 0, rocketX = 0, rocketY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Increased following speed (0.15) for a tighter feel
    let dx = mouseX - rocketX;
    let dy = mouseY - rocketY;
    
    rocketX += dx * 0.15; 
    rocketY += dy * 0.15;
    
    // Offset the rocket slightly so it follows "behind" the actual cursor
    rocket.style.left = (rocketX + 15) + 'px';
    rocket.style.top = (rocketY + 15) + 'px';
    
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    rocket.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
    
    requestAnimationFrame(animate);
}
animate();

// Hint Popup Logic
const popup = document.getElementById('hint-popup');
if (popup) {
    setTimeout(() => { popup.classList.add('active'); }, 2500);
    setTimeout(() => { popup.classList.remove('active'); }, 14500); 
}

// Easter Egg Logic
let clicks = 0;
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        clicks++;
        if (clicks === 5) {
            document.body.classList.toggle('hyper-mode');
            alert("HYPER-GLAZE MODE ACTIVATED 🚀✨");
            clicks = 0;
        }
    });
}