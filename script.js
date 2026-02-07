// ❌ Wrong answer
function wrong() {
  const msg = document.getElementById("msg");
  if (msg) {
    msg.innerText = "Oops 👀 Try again, you should know this.";
  } else {
    alert("Oops 👀 Try again, you should know this.");
  }
}

// ✅ Correct answers (Q1–Q4)
function correct(nextPage) {
  popperBlast(false);

  setTimeout(() => {
    window.location.href = nextPage;
  }, 1000);
}

// 🎊 Final correct answer (Q5)
function finalCorrect() {
  popperBlast(true);

  setTimeout(() => {
    window.location.href = "result.html";
  }, 1600);
}

// 🎉 Confetti popper blast
function popperBlast(isFinal) {
  const emojis = isFinal
    ? ["🎉", "💛", "✨", "🥰", "🌼"]
    : ["🌼", "✨", "💛"];

  // 🔥 TRIPLED counts
  const countPerSide = isFinal ? 45 : 24;

  createBlast("left", emojis, countPerSide, isFinal);
  createBlast("right", emojis, countPerSide, isFinal);
}

// 🎈 Create blast from one side
function createBlast(side, emojis, count, isFinal) {
  for (let i = 0; i < count; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Start position (bottom corners)
    conf.style.position = "fixed";
    conf.style.left = side === "left" ? "16px" : "calc(100vw - 40px)";
    conf.style.bottom = "16px";
    conf.style.fontSize = isFinal ? "1.6rem" : "1.2rem";
    conf.style.zIndex = "9999";

    // Movement
    const x = side === "left"
      ? Math.random() * 220 + 60
      : -(Math.random() * 220 + 60);

    const y = -(Math.random() * 360 + 220);
    const rotation = Math.random() * 360;

    conf.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
        {
          transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
          opacity: 0
        }
      ],
      {
        duration: isFinal ? 1800 : 1400,
        easing: "ease-out"
      }
    );

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), isFinal ? 1900 : 1500);
  }
}
