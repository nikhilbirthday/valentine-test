function correct(nextPage) {
  popperBlast(false);

  setTimeout(() => {
    window.location.href = nextPage;
  }, 900);
}

function finalCorrect() {
  popperBlast(true);

  setTimeout(() => {
    window.location.href = "result.html";
  }, 1600);
}

function wrong() {
  const msg = document.getElementById("msg");
  msg.innerText = "Oops 👀 Try again, you should know this.";
}

/* 🎉 Confetti popper blast */
function popperBlast(isFinal) {
  const emojis = isFinal
    ? ["🎉", "💛", "✨", "🥰", "🌼"]
    : ["🌼", "✨"];

  const count = isFinal ? 30 : 16;

  createBlast("left", emojis, count);
  createBlast("right", emojis, count);
}

function createBlast(side, emojis, count) {
  for (let i = 0; i < count; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    conf.style.left = side === "left" ? "20px" : "calc(100vw - 40px)";
    conf.style.bottom = "20px";

    const x = side === "left"
      ? Math.random() * 150
      : -Math.random() * 150;

    const y = -(Math.random() * 300 + 200);

    conf.style.setProperty("--x", `${x}px`);
    conf.style.setProperty("--y", `${y}px`);

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 1200);
  }
}
