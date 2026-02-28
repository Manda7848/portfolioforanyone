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
    let dx = mouseX - rocketX;
    let dy = mouseY - rocketY;
    rocketX += dx * 0.15; // Tight follow
    rocketY += dy * 0.15;
    
    // Offset slightly so it doesn't block clicks
    rocket.style.left = (rocketX + 10) + 'px';
    rocket.style.top = (rocketY + 10) + 'px';
    
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    rocket.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
    requestAnimationFrame(animate);
}
animate();

const popup = document.getElementById('hint-popup');
if (popup) {
    setTimeout(() => { popup.classList.add('active'); }, 2000);
    setTimeout(() => { popup.classList.remove('active'); }, 14000); 
}

let clicks = 0;
document.querySelector('.logo').addEventListener('click', () => {
    clicks++;
    if (clicks === 5) {
        document.body.classList.toggle('hyper-mode');
        alert("HYPER-GLAZE ENGAGED 🚀✨");
        clicks = 0;
    }
});