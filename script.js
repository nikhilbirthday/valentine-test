function correct(nextPage) {
  window.location.href = nextPage;
}

function wrong() {
  const msg = document.getElementById("msg");
  msg.innerText = "Oops 👀 Try again, you should know this.";
}
