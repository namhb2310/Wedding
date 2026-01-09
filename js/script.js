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

// ===== MUSIC =====
const btn = document.getElementById("music-btn");
const player = document.getElementById("music-player");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    player.src += "&autoplay=1";
    btn.classList.remove("paused");
    btn.classList.add("playing");
  } else {
    player.src = player.src.replace("autoplay=1", "autoplay=0");
    btn.classList.remove("playing");
    btn.classList.add("paused");
  }
  playing = !playing;
});
