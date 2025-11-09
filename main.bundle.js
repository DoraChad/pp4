const text = document.createElement("h2")
text.textContent = "Servers Down"
text.style.color = "white";
text.style.fontSize = "62px";
text.style.zIndex = "100";
text.style.textAlign = "center";

function updateCountdown() {
  const now = new Date();

  const utcOffset = now.getTimezoneOffset() * 60000;
  const pstOffset = 8 * 60 * 60000;
  const pstTime = new Date(now.getTime() + utcOffset - pstOffset);

  let target = new Date(pstTime);
  target.setHours(15, 30, 0, 0);

  if (pstTime > target) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target - pstTime;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  text.textContent = 
    `MAINTENANCE FOR ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const ui = document.getElementById("ui");
ui.appendChild(text);
