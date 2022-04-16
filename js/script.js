console.log('script js loaded');

// Background Gradients
const backgroundGradients = [
    {
        backgroundcolor: "background-color: #FF3CAC;",
        backgroundimg: "background-image: linear-gradient(225deg, #FF3CAC 0%, #2B86C5 100%)"
    },
    {
        backgroundcolor: "background-color: #FBDA61;",
        backgroundimg: "background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)"
    },
    {
        backgroundcolor: "background-color: #21D4FD;",
        backgroundimg: "background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
    },
    {
        backgroundcolor: "background-color: #0093E9;",
        backgroundimg: "background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    },
    {
        backgroundcolor: "background-color: #667eea;",
        backgroundimg: "background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        backgroundcolor: "background-color: #00c6fb;",
        backgroundimg: "background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%)"
    },
    {
        backgroundcolor: "background-color: #7028e4;",
        backgroundimg: "background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)"
    },
    {
        backgroundcolor: "background-color: #ff0844;",
        backgroundimg: "background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
    },
    {
        backgroundcolor: "background-color: #f83600;",
        backgroundimg: "background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%)"
    },
    {
        backgroundcolor: "background-color: #616161;",
        backgroundimg: "background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)"
    }
];

// Songs 
const songsList = [
    {
        title: "I Used to Love H.E.R.",
        artist: "Common",
        img: 'usedtoloveher.jpg',
        audio: 'https://dl.dropboxusercontent.com/s/yosjkim8shzc054/Y2Mate.is%20-%20I%20Used%20to%20Love%20H.E.R.-FJmGBMx7LNw-160k-1648562723738.mp3?dl=0',
        album: false,
        released: 1994
    },
    {
        title: "Rapper's Delight",
        artist: "The Sugarhill Gang",
        img: 'rappersdelight.jpg',
        audio: 'https://dl.dropbox.com/s/n5zvfsh4luseqoj/OnlyMP3.net%20-%20The%20Sugar%20Hill%20Gang%20-%20Rapper%27s%20Delight%20%28%20HQ%2C%20Full%20Version%20%29-rKTUAESacQM-192k-1640418173424.mp3?dl=0',
        album: false,
        released: 1979
    },
    {
        title: "The Message",
        artist: "Grandmaster Flash and the Furious Five",
        img: 'themessage.jpg',
        audio: 'https://dl.dropbox.com/s/bqwmsurrfxh4dpt/OnlyMP3.net%20-%20Grandmaster%20Flash%20%26%20The%20Furious%20Five%20-%20The%20Message%20%28Official%20Video%29-PobrSpMwKk4-192k-1640783021279.mp3?dl=0',
        album: false,
        released: 1982
    },
    {
        title: "Dear Mama",
        artist: "2Pac",
        img: 'dearmama.jpg',
        audio: 'https://dl.dropbox.com/s/zvwrflxzjrmmumn/OnlyMP3.net%20-%202Pac%20-%20Dear%20Mama%20%28Official%20Music%20Video%29-Mb1ZvUDvLDY-192k-1638893206012.mp3?dl=0',
        album: false,
        released: 1995
    },
    {
        title: "Lyrics of Fury",
        artist: "Eric B. & Rakim",
        img: 'lyricsoffury.jpg',
        audio: 'https://dl.dropbox.com/s/3cniakdmglryfbj/OnlyMP3.to%20-%20Eric%20B%20%26%20Rakim%20-%20Lyrics%20Of%20Fury-GFOeJOtq_xc-192k-1649938008463.mp3?dl=0',
        album: false,
        released: 1988
    },
    {
        title: "They Reminisce Over You",
        artist: "Pete Rock & C.L. Smooth",
        img: 'troy.jpg',
        audio: 'https://dl.dropbox.com/s/n6yf8gpjy2bugeo/OnlyMP3.net%20-%20Pete%20Rock%20%26%20CL%20Smooth%20-%20They%20Reminisce%20Over%20You%20%28T.R.O.Y.%29%20%28Official%20Video%29-k6mdRv0ZdR8-192k-1641470815337.mp3?dl=0',
        album: false,
        released: 1992
    }
    // {
    //     title: "The World Is Yours",
    //     artist: "Nas",
    //     img: 'examplecover.png',
    //     audio: 'dadada7',
    //     album: false,
    //     released: 1994
    // },
    // {
    //     title: "Top Billin'",
    //     artist: "Audio Two",
    //     img: 'examplecover.png',
    //     audio: 'dadada8',
    //     album: false,
    //     released: 1987
    // },
    // {
    //     title: "Fight the Power",
    //     artist: "Public Enemy",
    //     img: 'examplecover.png',
    //     audio: 'dadada9',
    //     album: false,
    //     released: 1989
    // },
    // {
    //     title: "Planet Rock",
    //     artist: "Afrika Bambaataa",
    //     img: 'examplecover.png',
    //     audio: 'dadada10',
    //     album: false,
    //     released: 1982
    // },
    // {
    //     title: "Keep Ya Head Up",
    //     artist: "2Pac",
    //     img: 'examplecover.png',
    //     audio: 'dadada11',
    //     album: false,
    //     released: 1993
    // },
    // {
    //     title: "My Philosophy",
    //     artist: "Boogie Down Productions",
    //     img: 'examplecover.png',
    //     audio: 'dadada12',
    //     album: false,
    //     released: 1988
    // },
    // {
    //     title: "I Need Love",
    //     artist: "LL Cool J",
    //     img: 'examplecover.png',
    //     audio: 'dadada13',
    //     album: false,
    //     released: 1987
    // },
    // {
    //     title: "Nuthin' but a 'G' Thang",
    //     artist: "Dr. Dre",
    //     img: 'examplecover.png',
    //     audio: 'dadada14',
    //     album: false,
    //     released: 1992
    // },
    // {
    //     title: "Juicy",
    //     artist: "The Notorious B.I.G",
    //     img: 'examplecover.png',
    //     audio: 'dadada15',
    //     album: false,
    //     released: 1994
    // },
    // {
    //     title: "Dead Presidents",
    //     artist: "Jay-Z",
    //     img: 'examplecover.png',
    //     audio: 'dadada16',
    //     album: false,
    //     released: 1996
    // },
    // {
    //     title: "Scenario",
    //     artist: "A Tribe Called Quest",
    //     img: 'examplecover.png',
    //     audio: 'dadada17',
    //     album: false,
    //     released: 1992
    // },
    // {
    //     title: "Mind Playing Tricks on Me",
    //     artist: "Geto Boys",
    //     img: 'examplecover.png',
    //     audio: 'dadada18',
    //     album: false,
    //     released: 1991
    // },
    // {
    //     title: "Straight Outta Compton",
    //     artist: "N.W.A",
    //     img: 'examplecover.png',
    //     audio: 'dadada19',
    //     album: false,
    //     released: 1988
    // },
    // {
    //     title: "C.R.E.A.M",
    //     artist: "Wu-Tang Clan",
    //     img: 'examplecover.png',
    //     audio: 'dadada20',
    //     album: false,
    //     released: 1994
    // },
    // {
    //     title: "Hip Hop",
    //     artist: "Dead Prez",
    //     img: 'examplecover.png',
    //     audio: 'dadada21',
    //     album: false,
    //     released: 2000
    // }
];

// 
//
// VARIABLES
//
//

// Play song
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

let previousSongs = [];
let test1 = previousSongs[previousSongs.length - 2];
let previousSong = songsList[test1];

// TopTen Variables
const topTenOutput = document.querySelector('.topten__output');
const topTenList = [];

// Highlighted Variables
const highlightsOutput = document.querySelector('.explore__output');
const previousBackground = [];


//
//
// Event listeners
//
//
audioPlay.addEventListener('click', handlePlayAudio);
audioVolumeSlider.addEventListener('change', function(){audioFile.volume = audioVolumeSlider.value / 100;})
audioTimeStampSlider.addEventListener('change', function(){audioFile.currentTime = audioTimeStampSlider.value;})
audioFile.addEventListener('timeupdate', handleTimeStamp);
audioFile.addEventListener('timeupdate', function(){audioTimeStampSlider.value = audioFile.currentTime;});
audioFile.addEventListener('loadedmetadata', handleDuration);
audioPre.addEventListener('click', handlePreviousSong);
audioNext.addEventListener('click', handleNextSong);
audioFile.addEventListener('ended', handleAudioEnd);


// Standard runned functions
handleTopTen();
handleLoadHighlights();
defaultAudio();

// 
// Top Ten Results
//
function handleTopTen() {
    for (i = 0; i < 5; i++) {
        let randomSongs = Math.floor(Math.random() * songsList.length);
        let song = songsList[randomSongs];

        // if (topTenList.includes(song.title)){
        //     i -= 1;
        // } else {
            topTenList.push(song.title);
            topTenOutput.innerHTML += `
            <div class="topten__list">
                <div class="topten__position">${i + 1}</div>
                <div class="topten__description">
                    <h3 class="topten__description--title">${song.title}</h3>
                    <p class="topten__description--para">${song.artist}</p>
                </div>
            </div>
            `;
        // }
    }
}

//
// Check for browser lighting mode
//
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener((e) => {
  const darkModeOn = e.matches;
  console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
});

//
// Highlighted
//
function handleLoadHighlights() {
    for (i = 0; i < 15; i++) {
      let randomSongs = Math.floor(Math.random() * songsList.length);
      let song = songsList[randomSongs];
      let background = backgroundGradients[randomSongs];
  
      audioFile.src = song.audio;
  
      highlightsOutput.innerHTML += `
              <div class="highlighted__song" style="${background.backgroundcolor} ${background.backgroundimg}">
                  <div class="highlighted__description">
                      <h3 class="highlighted__description--title">${song.title}</h3>
                      <p class="highlighted__description--para">${song.artist}</p>
                  </div>
                  <div class="highlighted__footer">
                      <button class="highlighted__button--play"><i data-song="${randomSongs}" class="fas fa-play-circle highlighted__play--icon"></i></button>
                      <img class="highlighted__img" src="./assets/covers/${song.img}"></img>
                  </div>
              </div>
              `;
    }
  }

highlightsOutput.addEventListener('click', function(e){
    if (e.target.classList.contains('highlighted__button--play') || 
        e.target.closest('.highlighted__button--play') !== null) {
            if (audioActive){
                handlePlayAudio(e);
            } else {
                loadAudio(e);
                console.log(e);
                handlePlayAudio(e);
            }
    }
})

function defaultAudio() {
    let song = songsList[3];

    audioImg.src = `../assets/covers/${song.img}`;
    audioTitle.textContent = song.title;
    audioArtist.textContent = song.artist;
    audioFile.src = song.audio;
}

function loadAudio(event) {
    let songIndex = event.target.dataset.song;

    let song = songsList[songIndex];
    previousSongs.push(songIndex);

    for (i = 0; i < songsList.length; i++) {
        audioImg.src = `../assets/covers/${song.img}`;
        audioTitle.textContent = song.title;
        audioArtist.textContent = song.artist;
        audioFile.src = song.audio;
    }
}

function handlePlayAudio(event) {
    if (audioActive) {
        handlePauseAudio(event);
        return;
    } else {
        audioActive = true;
        audioPlay.innerHTML = '<i class="fas fa-pause"></i>';
        audioFile.play();
    }
}

function handlePauseAudio(event) {
    audioActive = false;
    audioPlay.innerHTML = '<i class="fas fa-play"></i>';
    audioFile.pause();
}

function handleAudioEnd() {
    audioTimeStampSlider.value = 0;
    audioActive = false;
    audioPlay.innerHTML = '<i class="fas fa-play"></i>';
}

function handleTimeStamp() {
    let seconds = parseInt(audioFile.currentTime % 60);
    let minute = parseInt((audioFile.currentTime / 60) % 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    audioTime.textContent = `${minute}:${seconds}`;
}

function handleDuration() {
    audioTimeStampSlider.max = audioFile.duration;
    audioTimeStampSlider.value = 0;

    let ds = parseInt(audioFile.duration % 60);
    let dm = parseInt((audioFile.duration / 60) % 60);

    audioDuration.textContent = `${dm}:${ds}`;
}

function handleNextSong(){
    loadAudio();
    handleAudioEnd();
    handlePlayAudio();
}

function handlePreviousSong(){
    if (previousSongs.length == 1) {
        return;
    } else {

        audioImg.src = `../assets/covers/${previousSong.img}`;
        audioTitle.textContent = previousSong.title;
        audioArtist.textContent = previousSong.artist;
        audioFile.src = previousSong.audio;

        previousSongs.pop(0);
        handleAudioEnd();
        handlePlayAudio();
    }
}