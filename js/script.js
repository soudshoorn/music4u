console.log('script js loaded');

import songsList from './songsList.js';
console.log(songsList);

// 
//
// VARIABLES
//
//

let audioActive = false;
const audioFile = document.querySelector('.audio__file');
const audioPausePlay = document.querySelectorAll('.highlighted__button--play');

const audioPlay = document.querySelector('.musicbar__controller--pauseplay');
const audioSection = document.querySelector('#audio');
const audioFigureImg = document.querySelector('.musicbar__cover');
const audioImg = document.querySelector('.musicbar__cover--img');
const audioTitle = document.querySelector('.musicbar__description--title');
const audioArtist = document.querySelector('.musicbar__description--artist');
const audioController = document.querySelector('.musicbar__controller');
const audioPre = document.querySelector('.musicbar__controller--previous');
const audioNext = document.querySelector('.musicbar__controller--next');
const audioVolumeSlider = document.querySelector('.musicbar__volumecontrol--slider');
const audioTimeStampSlider = document.querySelector('.musicbar__timestamp--slider');
const audioTime = document.querySelector('.musicbar__timestamp--currenttime');
const audioDuration = document.querySelector('.musicbar__timestamp--fulltime');

let nextSongAmount = 0;
let previousSongs = [];
let test1 = previousSongs[previousSongs.length - 2];
let previousSong = songsList[test1];

// TopTen Variables
const topTenOutput = document.querySelector('.topten__output');

// Highlighted Variables
const highlightsOutput = document.querySelector('.explore__output');

//
//
// Event listeners
//
//
audioPlay.addEventListener('click', handlePlayAudio);
audioVolumeSlider.addEventListener('change', function () { audioFile.volume = audioVolumeSlider.value / 100; })
audioTimeStampSlider.addEventListener('change', function () { audioFile.currentTime = audioTimeStampSlider.value; })
audioFile.addEventListener('timeupdate', handleTimeStamp);
audioFile.addEventListener('timeupdate', function () { audioTimeStampSlider.value = audioFile.currentTime; });
audioFile.addEventListener('loadedmetadata', handleDuration);
audioFile.addEventListener('ended', handleAudioEnd);
audioNext.addEventListener('click', handleNextSong);
audioPre.addEventListener('click', handlePreviousSong);


// Standard runned functions
handleTopTen();
handleLoadHighlights();
defaultAudio(2);

// 
// Top Ten Results
//
function handleTopTen() {
    for (let i = 0; i < 5; i++) {
        let randomSongs = Math.floor(Math.random() * songsList.length);
        let song = songsList[randomSongs];

        topTenOutput.innerHTML += `
        <div class="topten__list">
            <div class="topten__position">${i + 1}</div>
            <div class="topten__description">
                <h3 class="topten__description--title">${song.title}</h3>
                <p class="topten__description--para">${song.artist}</p>
            </div>
        </div>
        `;
    }
}


//
// RANDOM BACKGROUND
//
function handleRandomBackground(random) {
    if (random === 'hslaColor') {
        return Math.floor(Math.random() * 360);
    } else if (random === 'percentage') {
        return Math.floor(Math.random() * (80 - 60 + 1)) + 60;
    } else if (random === 'percentage2'){
        return Math.floor(Math.random() * 100);
    } else if (random === 'percentage3'){
        return Math.floor(Math.random() * (50 - 25 + 1)) + 50; // Amout of hue
    }
}

function handleBackgroundHTML() {
    return `background-color:hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage')}%,${handleRandomBackground('percentage3')}%,1);
    background-image:
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%),
    radial-gradient(at ${handleRandomBackground('percentage2')}% ${handleRandomBackground('percentage2')}%, hsla(${handleRandomBackground('hslaColor')},${handleRandomBackground('percentage3')}%,${handleRandomBackground('percentage')}%,1) 0px, transparent 50%);`
}

//
// Highlighted
//
function handleLoadHighlights() {
    songsList.map((song) => {
        // Song card
        var songDiv = document.createElement('div');
        songDiv.classList.add('highlighted__song');
        songDiv.onclick = function () { loadAudio(song); };
        highlightsOutput.appendChild(songDiv);
        songDiv.innerHTML = handleSongHTML(song);
        // backgrounds
        songDiv.style= `${handleBackgroundHTML()}`;
    }).join("");
}

function handleSongHTML(song) {
    return `
    <div class="highlighted__description">
        <h3 class="highlighted__description--title">${song.title}</h3>
        <p class="highlighted__description--para">${song.artist}</p>
    </div>
    <div class="highlighted__footer">
        <button class="highlighted__button--play"><i class="fas fa-play-circle highlighted__play--icon"></i></button>
        <img class="highlighted__img" src="./assets/covers/${song.img}"></img>
    </div>
    `;
}


// Load song in music bar
function loadAudio(song) {
    audioActive = false;
    audioImg.src = `../assets/covers/${song.img}`;
    audioTitle.textContent = song.title;
    audioArtist.textContent = song.artist;
    audioFile.src = song.audio;
    handlePlayAudio();
}

function defaultAudio(songIndex) {
    let song = songsList[songIndex];
    audioImg.src = `../assets/covers/${song.img}`;
    audioTitle.textContent = song.title;
    audioArtist.textContent = song.artist;
    audioFile.src = song.audio;
}

// Start playing audio
function handlePlayAudio() {
    if (audioActive) {
        handlePauseAudio();
    } else {
        audioActive = true;
        audioPlay.innerHTML = '<i class="fas fa-pause"></i>';
        audioFile.play();
    }
}

// Pause audio from music bar
function handlePauseAudio() {
    audioActive = false;
    audioPlay.innerHTML = '<i class="fas fa-play"></i>';
    audioFile.pause();
}

// When song ends
function handleAudioEnd() {
    audioTimeStampSlider.value = 0;
    audioActive = false;
    audioPlay.innerHTML = '<i class="fas fa-play"></i>';
}

// Current timestamp in the song
function handleTimeStamp() {
    let seconds = parseInt(audioFile.currentTime % 60);
    let minute = parseInt((audioFile.currentTime / 60) % 60);

    if (seconds.toString().length == 1) {
        seconds = `0${seconds}`;
    }
    audioTime.textContent = `${minute}:${seconds}`;
}

// Duration of a song
function handleDuration() {
    audioTimeStampSlider.max = audioFile.duration;
    audioTimeStampSlider.value = 0;
    
    let ds = parseInt(audioFile.duration % 60);
    let dm = parseInt((audioFile.duration / 60) % 60);

    if (ds.toString().length == 1) {
        ds = `0${ds}`;

    }
    audioDuration.textContent = `${dm}:${ds}`;
}

// NOT WORKING YET - SOON
function handleNextSong() {
    const randomNext = Math.floor(Math.random() * songsList.length);
    loadAudio(songsList[randomNext]);
}

function handlePreviousSong() {
    const randomPrevious = Math.floor(Math.random() * songsList.length);
    loadAudio(songsList[randomPrevious]);
}