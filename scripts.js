const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h3");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "Godzilla",
    artist: "Eminem",
    cover: "NCR.png",
    file: "Godzilla.mp3",
};

cover.getElementsByClassName.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = data.file;