window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stops the function from running altogether
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  console.log(key);
});
