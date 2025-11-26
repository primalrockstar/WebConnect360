document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('gcrm-audio');
    const status = document.querySelector('.audio-status');
    if (!audio) return;

    let autoplayTimeout = setTimeout(async () => {
        try {
            await audio.play();
            if (status) {
                status.textContent = 'Playing automatically. Use the controls to pause at any time.';
            }
        } catch (error) {
            if (status) {
                status.textContent = 'Tap play to start the audio. (Autoplay was blocked by your browser.)';
            }
        }
    }, 3000);

    audio.addEventListener('play', () => {
        if (status) {
            status.textContent = 'Playing. Use the pause button to stop the orientation track.';
        }
    });

    audio.addEventListener('pause', () => {
        if (status) {
            status.textContent = 'Paused. Press play to resume the orientation track.';
        }
    });

    window.addEventListener('beforeunload', () => {
        clearTimeout(autoplayTimeout);
        autoplayTimeout = null;
    });
});
