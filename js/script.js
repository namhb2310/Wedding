// ===== COUNTDOWN =====
const weddingDate = new Date("2026-02-28T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML =
      `${d} ngày nữa chúng ta về chung một nhà 💍`;
  }
}, 1000);

// ===== YOUTUBE MUSIC =====
let player;
let playing = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "0",
    width: "0",
    videoId: "JgTZvDbaTtg", // I Do – Đức Phúc
    playerVars: {
      loop: 1,
      playlist: "JgTZvDbaTtg",
      controls: 0
    }
  });
}

const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
  if (!playing) {
    player.playVideo();
    btn.classList.remove("paused");
    btn.classList.add("playing");
  } else {
    player.pauseVideo();
    btn.classList.remove("playing");
    btn.classList.add("paused");
  }
  playing = !playing;
});
