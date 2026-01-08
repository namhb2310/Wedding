// Countdown
const weddingDate = new Date("2026-02-28T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;
  if (diff > 0) {
    const d = Math.floor(diff / (1000*60*60*24));
    document.getElementById("countdown").innerHTML =
      `${d} ngày nữa chúng ta về chung một nhà 💍`;
  }
}, 1000);

// Music toggle
const music = document.getElementById("music");
document.getElementById("music-control").onclick = () => {
  music.hidden = !music.hidden;
};
