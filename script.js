// ❌ Wrong answer
function wrong(btn) {
  const card = document.querySelector(".card");
  const msg = document.getElementById("msg");

  // Shake card
  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 300);

  // Pulse wrong button
  if (btn) {
    btn.classList.add("wrong-btn");
    setTimeout(() => btn.classList.remove("wrong-btn"), 300);
  }

  // Message
  if (msg) {
    msg.innerText = "Oops 👀 Try again, you should know this.";
  } else {
    alert("Oops 👀 Try again, you should know this.");
  }
}

// ✅ Correct answers (Q1–Q4)
function correct(nextPage, btn) {
  // Pulse correct button
  if (btn) {
    btn.classList.add("correct-btn");
    setTimeout(() => btn.classList.remove("correct-btn"), 300);
  }

  popperBlast(false);

  setTimeout(() => {
    window.location.href = nextPage;
  }, 1000);
}

// 🎊 Final correct answer (Q5)
function finalCorrect(btn) {
  if (btn) {
    btn.classList.add("correct-btn");
    setTimeout(() => btn.classList.remove("correct-btn"), 300);
  }

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

  const countPerSide = isFinal ? 45 : 24;

  createBlast("left", emojis, countPerSide, isFinal);
  createBlast("right", emojis, countPerSide, isFinal);
}

function createBlast(side, emojis, count, isFinal) {
  for (let i = 0; i < count; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    conf.style.position = "fixed";
    conf.style.left = side === "left" ? "16px" : "calc(100vw - 40px)";
    conf.style.bottom = "16px";
    conf.style.fontSize = isFinal ? "1.6rem" : "1.2rem";
    conf.style.zIndex = "9999";

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
