document.addEventListener('DOMContentLoaded', () => {
  const hook = document.getElementById('hook');
  const balloons = document.getElementById('balloons');
  const cat = document.getElementById('cat');
  const cake = document.getElementById('cake');
  const music = document.getElementById('birthdaySong');
  const giftBox = document.getElementById('giftBox');

  hook.addEventListener('click', () => {
    balloons.classList.add('active');
    cat.classList.add('active');
    cake.classList.add('active');
    giftBox.style.display = 'none';

    // Play music
    if (music.paused) {
      music.volume = 0.6;
      music.play().catch(err => {
        console.log("Music playback failed:", err);
      });
    }
  });
});
