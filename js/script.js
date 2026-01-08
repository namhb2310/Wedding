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

// ===== MUSIC TOGGLE =====
const btn = document.getElementById("music-btn");
const player = document.getElementById("music-player");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    player.src = player.src.replace("&mute=1", "&mute=0");
    btn.textContent = "🔈";
  } else {
    player.src = player.src.replace("&mute=0", "&mute=1");
    btn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});
