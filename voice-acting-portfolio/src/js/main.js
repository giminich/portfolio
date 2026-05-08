Sure, here's the contents for the file: /voice-acting-portfolio/voice-acting-portfolio/src/js/main.js

// This file manages the interactive elements of the voice acting portfolio, including expandable categories for different sound types and linking audio files from cloud storage.

document.addEventListener('DOMContentLoaded', () => {
    const categoryHeaders = document.querySelectorAll('.category-header');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('hidden');
            header.classList.toggle('active');
        });
    });

    const audioLinks = document.querySelectorAll('.audio-link');

    audioLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const audioSrc = link.getAttribute('data-audio-src');
            playAudio(audioSrc);
        });
    });
});

function playAudio(src) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = src;
    audioPlayer.play();
}