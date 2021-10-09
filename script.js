const album = [
  {
    artist: "Luis Fonsi",
    title: "Despacito",
  },

  {
    artist: "Mano Pilas",
    title: "Bella Ciao",
  },

  {
    artist: "Duncan Laurence",
    title: "Arcade",
  },
];

const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const theme = document.getElementById("theme");
const body = document.getElementById("body");

let isPlaying = false;

const Play = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const Pause = () => {
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
  music.pause();
};

play.addEventListener("click", () => {
  isPlaying ? Pause() : Play();
});

let songNo = 0;

const loadSongs = (album) => {
  title.textContent = album.title;
  artist.textContent = album.artist;
  img.src = "images/img" + (songNo + 1) + ".jpg";
  music.src = "songs/song" + (songNo + 1) + ".mp3";
};

loadSongs(album[songNo]);

const nextSong = () => {
  songNo = (songNo + 1) % album.length;
  loadSongs(album[songNo]);
  Pause();
};

next.addEventListener("click", nextSong);

const prevSong = () => {
  songNo = (songNo - 1) % album.length;
  loadSongs(album[songNo]);
  Pause();
};

prev.addEventListener("click", prevSong);
