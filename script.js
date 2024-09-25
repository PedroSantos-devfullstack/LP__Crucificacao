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

// Botao do menu do header

document.getElementById('header__menuButton').addEventListener('click', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('hidden');
});
