console.log('script js loaded');

import artistList from './artistList.js';


// TopTen Variables
const topTenOutput = document.querySelector('.topten__output');

// Highlighted Variables
const highlightsOutput = document.querySelector('.artist__output');

//
//
// Event listeners
//
//


// Standard runned functions
handleLoadArtists();

//
// Highlighted
//

function handleLoadArtists() {
    artistList.map((artist) => {
        // Song card
        var artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        highlightsOutput.appendChild(artistDiv);
        artistDiv.innerHTML = handleArtistHTML(artist);
        // backgrounds
    }).join("");
}

function handleArtistHTML(artist) {
    return `
    <div class="artist__description">
        <h3 class="artist__description--title">${artist.name}</h3>
    </div>
    <div class="artist__footer">
        <img class="artist__img" src="${artist.img}"></img>
    </div>
    `;
}