const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.innerText = "❤️ Musik Diputar";
    playBtn.disabled = true;
});
