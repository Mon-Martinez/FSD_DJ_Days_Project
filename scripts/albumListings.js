// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included
let html = '';
let topThreeMessage ="This is one of my Top Three albums!";

for (let i = 0; i < albums.length; i++){
    html += `
        <h2>${albums[i].name}</h2>
        <h3>${albums[i].artist}</h3>
        <p>Genre: ${albums[i].genre}</p>
    `;
    let topThree = albums[i].topThree;
    if (topThree) {
        html += `
        <p>${topThreeMessage}</p>
        `;
    };
    html += `
    <img src="${albums[i].artwork}" alt="Album art for ${albums[i].name}">
    `;
}

let moreAlbumsMessage = "You need more albums!";
let playMusicMessage = "Let's start playing music!";

// All aspects of the if else statment were produced during the in class demo
if (albums.length < 10){
    document.querySelector('header').insertAdjacentHTML('beforeend', `<h4>${moreAlbumsMessage}</h4>`);
    console.log ('There are less than 10 albums');
} else{
    document.querySelector('header').insertAdjacentHTML('beforeend', `<h4>${playMusicMessage}</h4>`);
    console.log ('There are 10 albums or more');
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);
