console.log('script js loaded');

// Songs 
const songsHipHop = [
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
        title: "They Reminisce Over You (T.R.O.Y.)",
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

// Audio player Variables
const audioSection = document.querySelector('#musicbar');
const audioFigureImg = document.querySelector('.audio__cover');
const audioImg = document.querySelector('.audio__cover--img');
const audioTitle = document.querySelector('.audio__title');
const audioArtist = document.querySelector('.audio__artist');
const audioController = document.querySelector('.audio__controller');
const audioPre = document.querySelector('.audio__controller--previous');
const audioPausePlay = document.querySelector('.audio__controller--pauseplay');
const audioNext = document.querySelector('.audio__controller--next');
const audioFile = document.querySelector('.audio__file');
const audioVolumeSlider = document.querySelector('.audio__volumecontrol--slider');
const audioTimeStampSlider = document.querySelector('.audio__timestamp--slider');
const audioTime = document.querySelector('.audio__timestamp--currenttime');
const audioDuration = document.querySelector('.audio__timestamp--fulltime');

let autoPlay = true;
let audioActive = false;
let previousSongs = [];

let test1 = previousSongs[previousSongs.length - 2];
let previousSong = songsHipHop[test1];

// TopTen Variables
const topTenOutput = document.querySelector('.topten__output');
const topTenList = [];

audioPausePlay.addEventListener('click', handlePlayAudio);
audioVolumeSlider.addEventListener('change', function(){audioFile.volume = audioVolumeSlider.value / 100;})
audioTimeStampSlider.addEventListener('change', function(){audioFile.currentTime = audioTimeStampSlider.value;})
audioFile.addEventListener('ended', handleAudioEnd);
audioFile.addEventListener('timeupdate', handleTimeStamp);
audioFile.addEventListener('loadedmetadata', handleDuration);
audioPre.addEventListener('click', handlePreviousSong);
audioNext.addEventListener('click', handleNextSong);

loadAudio(); // Load a random song

function loadAudio() {
    let randomSong = Math.floor(Math.random() * songsHipHop.length);
    let song = songsHipHop[randomSong];
    previousSongs.push(randomSong);

    if (previousSongs[previousSongs.length - 1] == previousSongs[previousSongs.length - 2] || previousSongs[previousSongs.length - 1] == previousSongs[previousSongs.length - 3]){
        loadAudio();
        return;
    } else {
        for (i = 0; i < songsHipHop.length; i++) {

        
            audioImg.src = `../assets/covers/${song.img}`;
            audioTitle.textContent = song.title;
            audioArtist.textContent = song.artist;
            audioFile.src = song.audio;
        }
    }
}

function handlePlayAudio() {
    if (audioActive) {
        handlePauseAudio();
        return;
    } else {
        audioActive = true;
        audioPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
        audioFile.play();
    }
}

function handlePauseAudio() {
    audioActive = false;
    audioPausePlay.innerHTML = '<i class="fas fa-play"></i>';
    audioFile.pause();
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

function handleAudioEnd() {
    audioActive = false;
    audioPausePlay.innerHTML = '<i class="fas fa-play"></i>';
    // audioFile.pause();
    
    audioTimeStampSlider.value = 0;
    // if(autoPlay){
    //     loadAudio();
    //     return;
    // } else {
    //     return;
    // }
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


function handleTopTen() {
    for (i = 1; i < 11; i++) {
        let randomSongs = Math.floor(Math.random() * songsHipHop.length);
        let song = songsHipHop[randomSongs];

        if (topTenList.includes(song.title)){
            i -= 1;
        } else {
            topTenList.push(song.title);
            topTenOutput.innerHTML += `
            <div class="topten__list">
                <div class="topten__position">${i}</div>
                <div class="topten__description">
                    <h3 class="topten__description--title">${song.title}</h3>
                    <p class="topten__description--para">${song.artist}</p>
                </div>
            </div>
            `;
        }

        console.log(randomSongs);
        console.log(topTenList);
    }
}

