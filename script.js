// Rocketship Cursor
const rocket = document.createElement('div');
rocket.id = 'rocket-cursor';
rocket.innerHTML = '🚀';
document.body.appendChild(rocket);

document.addEventListener('mousemove', (e) => {
    rocket.style.left = e.clientX + 'px';
    rocket.style.top = e.clientY + 'px';
    const rot = e.movementX * 1.5;
    rocket.style.transform = `translate(-50%, -50%) rotate(${45 + rot}deg)`;
});

// Hint Popup
window.onload = () => {
    const popup = document.getElementById('hint-popup');
    setTimeout(() => { popup.classList.add('active'); }, 2000);
    setTimeout(() => { popup.classList.remove('active'); }, 8000);
};

// Easter Egg Logic
let clicks = 0;
document.querySelector('.logo').addEventListener('click', () => {
    clicks++;
    if (clicks === 5) {
        document.body.classList.toggle('hyper-mode');
        clicks = 0;
        alert("HYPER-GLAZE MODE ENGAGED 🚀");
    }
});