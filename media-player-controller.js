"use strict";
/**
 * @file Manages the display and playing of an audio file
 * @author Samuel Mereau
 * 17/6/2021
 */

let playing = false

const playbutton = document.querySelector('#play');
playbutton.addEventListener('click', function () {
    togglePlay();
});

/**
 * Toggles the playing state and display of audio. Runs each time the play button is pressed
 */
function togglePlay() {
    const playicon = document.getElementById('icon');
    if(!playing){
        let player = document.getElementById('player');
        player.play(); 
        playing = true;   
        player.addEventListener("timeupdate", function() {
            let currentTime = player.currentTime;
            let duration = player.duration;
            const range = document.querySelector('.hp_range')
            range.style.width = (currentTime +.25)/duration*100+'%';
            if(currentTime == duration) {
                playicon.src = "../img/play.svg"
                playing = false;
            }
        });
        const duration = document.getElementById('duration');
        const durationTime = document.getElementById('player').duration;
        let durationTimeMinutes = Math.floor(durationTime / 60);
        let durationTimeSeconds = Math.round(durationTime - durationTimeMinutes * 60);
        if (durationTimeSeconds == 0) {
            durationTimeSeconds = "00"
        }
        duration.textContent = `${durationTimeMinutes}:${durationTimeSeconds}`;
        playicon.src = "../img/pause.svg"
    } else {
        let player = document.getElementById('player')
        player.pause()
        playing = false;
        playicon.src = "../img/play.svg"
    }
}