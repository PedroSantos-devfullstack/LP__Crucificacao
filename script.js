// Media player da pagina

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeControl = document.getElementById('volume');

const tracks = [
    'musica1.mp3',
    'musica2.mp3',
    'musica3.mp3'
];
let currentTrack = 0;

function loadTrack(trackIndex) {
    audio.src = tracks[trackIndex];
    audio.load();
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '⏸️';
    } else {
        audio.pause();
        playButton.textContent = '▶️';
    }
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playButton.textContent = '▶️';
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playButton.textContent = '⏸️';
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playButton.textContent = '⏸️';
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

            // Carrega a primeira faixa ao iniciar
loadTrack(currentTrack);

// Butao de mudanca do tema dark/clear
const chk = document.getElementById('chk');
const header = document.querySelector('.header');
const nav = document.querySelector('nav');
const quintaPagina__form = document.querySelector('.quintaPagina__form');


chk.addEventListener('change', () => {
    header.classList.toggle('dark');
    header.classList.toggle('light');

    nav.classList.toggle('dark');
    nav.classList.toggle('light');

    quintaPagina__form.classList.toggle('dark');
    quintaPagina__form.classList.toggle('light');
});

header.classList.add('light');
nav.classList.add('light');
quintaPagina__form.classList.add('light'); 

// Botao do menu do header

document.getElementById('header__menuButton').addEventListener('click', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('hidden');
});

// Animacao dos versiculos da primeira pagina
const versiculos = document.querySelectorAll('[class^="versiculos__"]');
let currentIndex = 0;

function showNextVersiculo() {
    // Oculta a div ativa atual
    versiculos[currentIndex].classList.remove('active');
    
    // Incrementa o índice e faz o loop
    currentIndex = (currentIndex + 1) % versiculos.length;

    // Exibe a próxima div
    versiculos[currentIndex].classList.add('active');
}

// Inicia o ciclo
setInterval(showNextVersiculo, 10000); // Muda a cada 10 segundos
showNextVersiculo(); // Para mostrar o primeiro imediatamente



// EndPoint do Formulario quintaPagina
const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const name = document.querySelector('input[name=name]').value;
    const idade = document.querySelector('input[name=idade]').value;
    const sexo = document.querySelector('select[name=sexo').value;
    const tel = document.querySelector('input[name=tel]').value;
    const email = document.querySelector('input[name=email]').value;
    const estado = document.querySelector('input[name=estado]').value;
    const cidade = document.querySelector('input[name=cidade]').value;
    const bairro = document.querySelector('input[name=bairro]').value;
    const rua = document.querySelector('input[name=rua]').value;
    const n = document.querySelector('input[name=n]').value;

    fetch('https://api.sheetmonkey.io/form/c8b6qiAGB3D7Fj5koimMtp', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, idade, sexo, tel, email, estado, cidade, bairro, rua, n}),
    }).then(() => removeloading());
}

document.querySelector('.quintaPagina__form').addEventListener('submit', handleSubmit);

// Animacao da imagem do form
const button = document.querySelector('.enviarButton');
const addloading = () => {
    button.innerHTML = '<img src="./img/imgLoading.png" class="loading">';
}

const removeloading = () => {
    button.innerHTML = 'Enviar';
}
