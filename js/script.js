console.log('script js loaded');

// Background Gradients
const backgroundGradients = [
    {
        backgroundcolor: "#FF3CAC",
        backgroundimg: " linear-gradient(225deg, #FF3CAC 0%, #2B86C5 100%)"
    },
    {
        backgroundcolor: "#FBDA61",
        backgroundimg: " linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)"
    },
    {
        backgroundcolor: "#21D4FD",
        backgroundimg: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
    },
    {
        backgroundcolor: "#0093E9",
        backgroundimg: " linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    },
    {
        backgroundcolor: "#667eea",
        backgroundimg: " linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        backgroundcolor: "#00c6fb",
        backgroundimg: " linear-gradient(to top, #00c6fb 0%, #005bea 100%)"
    },
    {
        backgroundcolor: "#7028e4",
        backgroundimg: " linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)"
    },
    {
        backgroundcolor: "#ff0844",
        backgroundimg: " linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
    },
    {
        backgroundcolor: "#f83600",
        backgroundimg: "linear-gradient(to right, #f83600 0%, #f9d423 100%)"
    },
    {
        backgroundcolor: "#61616",
        backgroundimg: "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)"
    }
];

// Songs 
const songsList = [
    {
        id: 1,
        title: "I Used to Love H.E.R.",
        artist: "Common",
        img: 'usedtoloveher.jpg',
        audio: 'https://dl.dropboxusercontent.com/s/yosjkim8shzc054/Y2Mate.is%20-%20I%20Used%20to%20Love%20H.E.R.-FJmGBMx7LNw-160k-1648562723738.mp3?dl=0',
        album: false,
        released: 1994,
        genre: 'hiphop'
    },
    {
        id: 2,
        title: "The Message",
        artist: "Grandmaster Flash and the Furious Five",
        img: 'themessage.jpg',
        audio: 'https://dl.dropbox.com/s/bqwmsurrfxh4dpt/OnlyMP3.net%20-%20Grandmaster%20Flash%20%26%20The%20Furious%20Five%20-%20The%20Message%20%28Official%20Video%29-PobrSpMwKk4-192k-1640783021279.mp3?dl=0',
        album: false,
        released: 1982,
        genre: 'hiphop'
    },
    {
        id: 3,
        title: "Dear Mama",
        artist: "2Pac",
        img: 'dearmama.jpg',
        audio: 'https://dl.dropbox.com/s/zvwrflxzjrmmumn/OnlyMP3.net%20-%202Pac%20-%20Dear%20Mama%20%28Official%20Music%20Video%29-Mb1ZvUDvLDY-192k-1638893206012.mp3?dl=0',
        album: false,
        released: 1995,
        genre: 'hiphop'
    },
    {
        id: 4,
        title: "Lyrics of Fury",
        artist: "Eric B. & Rakim",
        img: 'lyricsoffury.jpg',
        audio: 'https://dl.dropbox.com/s/3cniakdmglryfbj/OnlyMP3.to%20-%20Eric%20B%20%26%20Rakim%20-%20Lyrics%20Of%20Fury-GFOeJOtq_xc-192k-1649938008463.mp3?dl=0',
        album: false,
        released: 1988,
        genre: 'hiphop'
    },
    {
        id: 5,
        title: "They Reminisce Over You",
        artist: "Pete Rock & C.L. Smooth",
        img: 'troy.jpg',
        audio: 'https://dl.dropbox.com/s/n6yf8gpjy2bugeo/OnlyMP3.net%20-%20Pete%20Rock%20%26%20CL%20Smooth%20-%20They%20Reminisce%20Over%20You%20%28T.R.O.Y.%29%20%28Official%20Video%29-k6mdRv0ZdR8-192k-1641470815337.mp3?dl=0',
        album: false,
        released: 1992,
        genre: 'hiphop'
    },
    {
        id: 6,
        title: "The World Is Yours",
        artist: "Nas",
        img: 'theworldisyours.jpg',
        audio: 'https://dl.dropbox.com/s/8sygtm5row05mb9/OnlyMP3.net%20-%20Nas%20-%20The%20World%20Is%20Yours%20%28Official%20HD%20Video%29-e5PnuIRnJW8-192k-1640679363997.mp3?dl=0',
        album: false,
        released: 1994,
        genre: 'hiphop'
    },
    {
        id: 7,
        title: "Top Billin'",
        artist: "Audio Two",
        img: 'topbillin.jpg',
        audio: 'https://dl.dropbox.com/s/u68gngh28c087j2/OnlyMP3.to%20-%20Audio%20Two%20-%20Top%20Billin%27%20%5BClark%20Kent%20Super%20Mix%5D%20%28Official%20Video%29-JPn82XZgTMA-192k-1650110147199.mp3?dl=0',
        album: false,
        released: 1987,
        genre: 'hiphop'
    },
    {
        id: 8,
        title: "Fight the Power",
        artist: "Public Enemy",
        img: 'fightthepower.jpg',
        audio: 'https://dl.dropbox.com/s/3cniakdmglryfbj/OnlyMP3.to%20-%20Eric%20B%20%26%20Rakim%20-%20Lyrics%20Of%20Fury-GFOeJOtq_xc-192k-1649938008463.mp3?dl=0',
        album: false,
        released: 1989,
        genre: 'hiphop'
    },
    {
        id: 9,
        title: "Planet Rock",
        artist: "Afrika Bambaataa",
        img: 'planetrock.jpg',
        audio: 'https://dl.dropbox.com/s/dgmmnkyvcgswzbs/OnlyMP3.net%20-%20Afrika%20Bambaataa%20%26%20Soulsonic%20Force%20-%20Planet%20Rock-_rlUQsC8ECk-192k-1638991971343.mp3?dl=0',
        album: false,
        released: 1982,
        genre: 'hiphop'
    },
    {
        id: 10,
        title: "Keep Ya Head Up",
        artist: "2Pac",
        img: 'keepyaheadup.jpg',
        audio: 'https://dl.dropbox.com/s/592s8y0b6jw4avg/OnlyMP3.to%20-%20Tupac%20-%20Keep%20Ya%20Head%20Up%20%28Official%20Video%29-XW--IGAfeas-192k-1644860962079.mp3?dl=0',
        album: false,
        released: 1993,
        genre: 'hiphop'
    },
    {
        id: 11,
        title: "My Philosophy",
        artist: "Boogie Down Productions",
        img: 'myphilosophy.jpg',
        audio: 'https://dl.dropbox.com/s/xswx39onswdnpd2/OnlyMP3.to%20-%20Boogie%20Down%20Productions%20-%20My%20Philosophy-h1vKOchATXs-192k-1648035905697.mp3?dl=0',
        album: false,
        released: 1988,
        genre: 'hiphop'
    },
    {
        id: 12,
        title: "I Need Love",
        artist: "LL Cool J",
        img: 'ineedlove.jpg',
        audio: 'https://dl.dropbox.com/s/s4hfuntktniys6o/OnlyMP3.net%20-%20LL%20Cool%20J%20-%20I%20Need%20Love%20%28Official%20Video%29-NEUX-HYRtUA-192k-1638757863825.mp3?dl=0',
        album: false,
        released: 1987,
        genre: 'hiphop'
    },
    {
        id: 13,
        title: "Nuthin' but a 'G' Thang",
        artist: "Dr. Dre",
        img: 'nuthunbutagthang.jpg',
        audio: 'https://dl.dropbox.com/s/fhpkgrge0s30lvr/OnlyMP3.to%20-%20Dr.Dre%20-%20Nuthin%27%20but%20a%20G%20Thang-dwWUXZtv2C0-192k-1647912040905.mp3?dl=0',
        album: false,
        released: 1992,
        genre: 'hiphop'
    },
    {
        id: 14,
        title: "Juicy",
        artist: "The Notorious B.I.G",
        img: 'juicy.jpg',
        audio: 'https://dl.dropbox.com/s/u0obg80j6ddbzbn/OnlyMP3.net%20-%20The%20Notorious%20B.I.G.%20-%20Juicy%20%28Official%20Video%29%20%5BRemastered%20in%204K%5D-_JZom_gVfuw-192k-1639060902773.mp3?dl=0',
        album: false,
        released: 1994,
        genre: 'hiphop'
    },
    {
        id: 15,
        title: "Dead Presidents",
        artist: "Jay-Z",
        img: 'deadpresidents.jpg',
        audio: 'https://dl.dropbox.com/s/qijemv3seh0of30/OnlyMP3.net%20-%20JAY-Z%20-%20Dead%20Presidents%20%28Explicit%29%20%20%28Official%20Video%29%20HD%20Remastered.-HAjQf0zag_4-192k-1639013707088.mp3?dl=0',
        album: false,
        released: 1996,
        genre: 'hiphop'
    },
    {
        id: 16,
        title: "Scenario",
        artist: "A Tribe Called Quest",
        img: 'scenario.jpg',
        audio: 'https://dl.dropbox.com/s/wu25wzrfpnsq6ln/OnlyMP3.net%20-%20A%20Tribe%20Called%20Quest%20-%20Scenario%20%28Official%20HD%20Video%29-Q6TLWqn82J4-192k-1638929970269.mp3?dl=0',
        album: false,
        released: 1992,
        genre: 'hiphop'
    },
    {
        id: 17,
        title: "Mind Playing Tricks on Me",
        artist: "Geto Boys",
        img: 'mindplayingtricksonme.jpg',
        audio: 'https://dl.dropbox.com/s/va15gmno4bglan4/OnlyMP3.net%20-%20Geto%20Boys%20-%20Mind%20Playing%20Tricks%20On%20Me%20%28Official%20Video%29%20%5BExplicit%5D-IJtHdkyo0hc-192k-1639145436348.mp3?dl=0',
        album: false,
        released: 1991,
        genre: 'hiphop'
    },
    {
        id: 18,
        title: "Straight Outta Compton",
        artist: "N.W.A",
        img: 'straightouttacompton.jpg',
        audio: 'https://dl.dropbox.com/s/3bk10vthw6ipsn7/OnlyMP3.net%20-%20N.W.A.%20-%20Straight%20Outta%20Compton%20%28Official%20Music%20Video%29-TMZi25Pq3T8-192k-1639010501556.mp3?dl=0',
        album: false,
        released: 1988,
        genre: 'hiphop'
    },
    {
        id: 19,
        title: "C.R.E.A.M",
        artist: "Wu-Tang Clan",
        img: 'cream.jpg',
        audio: 'https://dl.dropbox.com/s/8vuzptr0h6xx54v/OnlyMP3.net%20-%20Wu-Tang%20Clan%20-%20C.R.E.A.M.%20%28Official%20HD%20Video%29-PBwAxmrE194-192k-1638921028927.mp3?dl=0',
        album: false,
        released: 1994,
        genre: 'hiphop'
    },
    {
        id: 20,
        title: "Hip Hop",
        artist: "Dead Prez",
        img: 'hiphopdeadprez.jpg',
        audio: 'https://dl.dropbox.com/s/pdim89spr1xdezn/OnlyMP3.net%20-%20dead%20prez%20-%20Hip%20Hop%20%28Official%20Video%29-oiusDE0KND8-192k-1639870092071.mp3?dl=0',
        album: false,
        released: 2000,
        genre: 'hiphop'
    }
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


// Standard runned functions
handleTopTen();
handleLoadHighlights();
defaultAudio(2);

// 
// Top Ten Results
//
function handleTopTen() {
    for (i = 0; i < 5; i++) {
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
        let randomBackground = Math.floor(Math.random() * backgroundGradients.length);
        let background = backgroundGradients[randomBackground];
        songDiv.style.backgroundColor = `${background.backgroundcolor}`;
        songDiv.style.backgroundImage = `${background.backgroundimg}`;
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
    alert('Coming Soon!');
}

function handlePreviousSong() {
    alert('Coming Soon!');
}