let audio = null;
let estaReproduciendo = false;
let controlPausa = null;

function inicializarMusica() {
    audio = new Audio('https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/AUDIO/those%20eyes%20.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    function iniciarReproduccion() {
        if (!estaReproduciendo) {
            audio.play();
            estaReproduciendo = true;
            crearControlPausa();
            document.removeEventListener('click', iniciarReproduccion);
            document.removeEventListener('scroll', iniciarReproduccion);
        }
    }

    document.addEventListener('click', iniciarReproduccion);
    document.addEventListener('scroll', iniciarReproduccion);
}

function crearControlPausa() {
    controlPausa = document.createElement('div');
    controlPausa.innerHTML = '❤️';
    controlPausa.style.cssText = `
        position: fixed; top: 20px; right: 20px; width: 50px; height: 50px;
        background: rgba(0, 0, 0, 0.3) !important; border: 2px solid red; border-radius: 50%;
        display: flex; justify-content: center; align-items: center; font-size: 24px;
        cursor: pointer; z-index: 1000; box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        color: red;
    `;
    controlPausa.addEventListener('click', toggleReproduccion);
    document.body.appendChild(controlPausa);
}

function toggleReproduccion() {
    if (estaReproduciendo) {
        audio.pause();
        controlPausa.innerHTML = '❤️';
        controlPausa.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.3)';
    } else {
        audio.play();
        controlPausa.innerHTML = '❤️';
        controlPausa.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.8)';
    }
    estaReproduciendo = !estaReproduciendo;
}

const card = document.querySelector('.interior-tarjeta');
        const openBtn = document.querySelector('.boton-abrir');
        const closeBtn = document.querySelector('.boton-cerrar');
        const body = document.body;
        
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.add('esta-girada');
            createHearts(20);
        });
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('esta-girada');
        });
        
        document.addEventListener('click', (e) => {
            if (!card.contains(e.target)) {
                card.classList.remove('esta-girada');
            }
        });
        
        function createHearts(count) {
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('corazon');
                    heart.innerHTML = '🎂 ';
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    heart.style.animationDelay = Math.random() * 2 + 's';
                    body.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 6000);
                }, i * 200);
            }
        }
        
        createHearts(8);

    document.addEventListener('DOMContentLoaded', function () {
        inicializarMusica();
    });
