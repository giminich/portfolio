// Audio Player functionality

class AudioPlayer {
    constructor(audioElement) {
        this.audioElement = audioElement;
        this.playButton = document.querySelector('.play-button');
        this.pauseButton = document.querySelector('.pause-button');
        this.volumeControl = document.querySelector('.volume-control');

        this.init();
    }

    init() {
        this.playButton.addEventListener('click', () => this.playAudio());
        this.pauseButton.addEventListener('click', () => this.pauseAudio());
        this.volumeControl.addEventListener('input', (event) => this.changeVolume(event));
    }

    playAudio() {
        this.audioElement.play();
    }

    pauseAudio() {
        this.audioElement.pause();
    }

    changeVolume(event) {
        this.audioElement.volume = event.target.value;
    }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
        new AudioPlayer(audioElement);
    }
});