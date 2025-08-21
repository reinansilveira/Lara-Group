const audio = document.querySelector("audio"),
    playBtn = document.querySelector(".audio-container__play"),
    progress = document.querySelector(".audio-container__progress"),
    progressBar = document.querySelector(".audio-container__progress-bar"),
    timeDisplay = document.querySelector(".audio-container__time"),
    playSVG = `  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 20V4L19 12L5 20Z" />
                            </svg>`,
    pauseSVG = `<svg width="20" height="20" viewBox="0 0 24 24"><rect x="5" y="3" width="4" height="18" fill="white"/><rect x="15" y="3" width="4" height="18" fill="white"/></svg>`;

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        return playBtn.innerHTML = pauseSVG;
    }
    audio.pause();
    playBtn.innerHTML = playSVG;

});

audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
    timeDisplay.textContent = `${formatTime(audio.currentTime)}/${formatTime(audio.duration)}`;
});

let isDragging = false;

function updateAudioTime(e) {
    const rect = progressBar.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    clickX = Math.max(0, Math.min(clickX, progressBar.offsetWidth));
    audio.currentTime = (clickX / progressBar.offsetWidth) * audio.duration;
}

progressBar.addEventListener("click", (e) => {
    updateAudioTime(e);
});

progressBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateAudioTime(e);
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateAudioTime(e);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});
