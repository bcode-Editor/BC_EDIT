
const card = document.getElementById('card-container');
const spider = document.getElementById('spider');
const pumpkin = document.getElementById('pumpkin');

let spiderX = Math.random() * (window.innerWidth - 50);
let spiderY = Math.random() * (window.innerHeight - 50);
let spiderDX = (Math.random() - 0.5) * 4; 
let spiderDY = (Math.random() - 0.5) * 4;

let pumpkinX = Math.random() * (window.innerWidth - 50);
let pumpkinY = Math.random() * (window.innerHeight - 50);
let pumpkinDX = (Math.random() - 0.5) * 4;
let pumpkinDY = (Math.random() - 0.5) * 4;

function animateMonsters() {
    spiderX += spiderDX;
    spiderY += spiderDY;

    if (spiderX + 50 > window.innerWidth || spiderX < 0) {
        spiderDX *= -1;
    }
    if (spiderY + 50 > window.innerHeight || spiderY < 0) {
        spiderDY *= -1;
    }
    spider.style.transform = `translate(${spiderX}px, ${spiderY}px)`;
    pumpkinX += pumpkinDX;
    pumpkinY += pumpkinDY;

    if (pumpkinX + 50 > window.innerWidth || pumpkinX < 0) {
        pumpkinDX *= -1;
    }
    if (pumpkinY + 50 > window.innerHeight || pumpkinY < 0) {
        pumpkinDY *= -1;
    }
    pumpkin.style.transform = `translate(${pumpkinX}px, ${pumpkinY}px)`;

    requestAnimationFrame(animateMonsters);
}

animateMonsters();

function handleMouseMove(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const xOffset = (e.clientX - centerX) / centerX;
    const yOffset = (e.clientY - centerY) / centerY;
    
    const xAxis = xOffset * -10;
    const yAxis = yOffset * 10;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

function handleTouchMove(e) {
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        handleMouseMove({clientX: touch.clientX, clientY: touch.clientY});
    }
}
