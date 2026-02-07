function correct(nextPage) {
  confettiBurst();

  setTimeout(() => {
    window.location.href = nextPage;
  }, 800);
}

function finalCorrect() {
  finalCelebration();

  setTimeout(() => {
    window.location.href = "result.html";
  }, 1500);
}

function wrong() {
  const msg = document.getElementById("msg");
  msg.innerText = "Oops 👀 Try again, you should know this.";
}

/* 🌼 Small confetti for normal correct answers */
function confettiBurst() {
  for (let i = 0; i < 20; i++) {
    const conf = document.createElement("div");
    conf.innerText = "🌼";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-20px";
    conf.style.fontSize = "20px";
    conf.style.animation = "fall 1s linear";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 1000);
  }
}

/* 🎉 Bigger celebration for final answer */
function finalCelebration() {
  const emojis = ["🎉", "💛", "✨", "🌼", "🥰"];

  for (let i = 0; i < 40; i++) {
    const conf = document.createElement("div");
    conf.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-30px";
    conf.style.fontSize = "26px";
    conf.style.animation = "fall 1.5s linear";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 1500);
  }
}
