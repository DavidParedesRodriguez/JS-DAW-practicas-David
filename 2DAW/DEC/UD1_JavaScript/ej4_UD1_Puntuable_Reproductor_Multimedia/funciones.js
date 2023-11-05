const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const playerLevel = document.querySelector(".player__level");
const startDuration = document.querySelector(".start");
const endDuration = document.querySelector(".end");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".fa-play").classList.add("hide");
    playPause.querySelector(".fa-pause").classList.remove("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".fa-play").classList.remove("hide");
    playPause.querySelector(".fa-pause").classList.add("hide");
  }
});

// Función para convertir segundos en formato "mm:ss"
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Agregar evento para actualizar el input type range y duración mientras la música se reproduce
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const percentage = (currentTime / duration) * 100;
  playerLevel.value = percentage;

  startDuration.textContent = formatTime(currentTime);
  endDuration.textContent = formatTime(duration);
});

// Agregar evento para actualizar la posición de reproducción cuando el usuario ajusta el input type range
playerLevel.addEventListener("input", () => {
  const percentage = playerLevel.value;
  const newPosition = (percentage / 100) * audio.duration;
  audio.currentTime = newPosition;
});

// Agregar evento para detener el input type range cuando la música termina
audio.addEventListener("ended", () => {
  playerLevel.value = 100;
  startDuration.textContent = "00:00";
  endDuration.textContent = formatTime(audio.duration);
});


// Lista de canciones con detalles
const songs = [
    {
      artist: "Bad Bunny",
      song: "mp3/Y2meta.app - BAD BUNNY ft. MORA - HIBIKI (Visualizer) _ nadie sabe lo que va a pasar mañana (128 kbps) (2).mp3",
      songTitle: "Mora",  // Nombre de la canción abreviado
      albumImage: "img/bad-bunny-un-verano.jpg",
      duration: "04:30", // Duración de la primera canción
    },
    {
      artist: "Jay Wheeler",
      song: "mp3/Y2meta.app - Jay Wheeler - Me Enamoré (Cover Audio) (128 kbps).mp3",
      songTitle: "Me enamoré",  // Nombre de la canción abreviado
      albumImage: "img/Jey_Wheeler_platonico.jpg",
      duration: "03:24", // Duración de la segunda canción
    },
    {
        artist: "Eladio Carrion",
        song: "mp3/Y2meta.app - Hola Como Vas (128 kbps).mp3",
        songTitle: "Hola Como Vas",  // Nombre de la canción abreviado
        albumImage: "img/artworks-PgFd71BX14hb-0-t500x500.jpg",
        duration: "03:18", // Duración de la segunda canción
      },
      {
        artist: "Iñigo Quintero",
        song: "mp3/Y2meta.app - Si No Estás (128 kbps).mp3",
        songTitle: "Si no estás",  // Nombre de la canción abreviado
        albumImage: "img/hq720.jpg",
        duration: "03:04", // Duración de la segunda canción
      },
      {
        artist: "Quevedo X BZRP",
        song: "mp3/Y2meta.app - Bizarrap & Quevedo - Quevedo_ Bzrp Music Sessions, Vol. 52 (letra_lyrics) (128 kbps).mp3",
        songTitle: "Quedate",  // Nombre de la canción abreviado
        albumImage: "img/artworks-xratOYdk38DEO8ut-6u9m5Q-t500x500.jpg",
        duration: "03:23", // Duración de la segunda canción
      },
    // Agrega más canciones aquí con sus respectivas duraciones
  ];
  
  // Índice de la canción actual
  let currentSongIndex = 0;

  // Función para extraer el nombre de la canción de la ruta del archivo
function getSongNameFromPath(path) {
    // Divide la ruta del archivo utilizando "/" y obtiene el último elemento
    const pathElements = path.split("/");
    const fileName = pathElements[pathElements.length - 1];
    // Elimina la extensión ".mp3"
    const songName = fileName.replace(".mp3", "");
    return songName;
  }
  
  // Función para actualizar la información de la canción y el artista
  function updateSongInfo() {
    const artistName = document.getElementById("artistName");
    const songName = document.getElementById("songName");
    const albumImage = document.getElementById("albumImage");
    const endDuration = document.querySelector(".end");
  
    artistName.textContent = songs[currentSongIndex].artist;
    songName.textContent = songs[currentSongIndex].songTitle;
    albumImage.src = songs[currentSongIndex].albumImage;
    endDuration.textContent = songs[currentSongIndex].duration;
    audio.src = songs[currentSongIndex].song;
    audio.load(); // Cargar la nueva canción
    audio.play(); // Iniciar la reproducción
  }
  
  // Función para ir a la canción anterior
  document.getElementById("previous").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
  });
  
  // Función para ir a la siguiente canción
  document.getElementById("next").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
  });

  // Inicializar la información de la primera canción
  updateSongInfo();