(() => {
  'use strict';
  const myVideo = document.getElementById('video');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const boat = document.getElementById('boat');
  const stars = document.getElementById('stars');
  const toggle = document.getElementById('toggle');
  const line1 = document.querySelector('#line1');
  const line2 = document.querySelector('#line2');
  const line3 = document.querySelector('#line3');
  const poemLines = document.querySelectorAll('#poem p');

  moon.className = 'hidden';
  stars.className = 'hidden';
  myVideo.className = 'day';
  const indigo = '#6b7abb';
  const blue = '#96dcee';

  poemLines.forEach(line => line.style.backgroundColor = blue);
  
  const positions = {
    sunPosition: 190,
    moonPosition: 190,
    boatPosition: 300,
  }

  const poem = {
    start: [0, 5, 8],
    stop: [4, 7, 13],
    line: [line1, line2, line3]
  }

  const toggleBackground = (bg) => {
    myVideo.className = bg;
    if (bg === 'day') {
      sun.className = 'sun';
      moon.className = 'hidden';
      stars.className = 'hidden';
      poemLines.forEach(line => line.style.backgroundColor = blue);
    } else {
      sun.className = 'hidden';
      moon.className = 'moon';
      stars.className = 'stars';
      poemLines.forEach(line => line.style.backgroundColor = indigo);
    }
  }

  toggle.addEventListener('change', () => toggle.checked ? toggleBackground('night') : toggleBackground('day'));

  function checkTime() {
    for (let i = 0; i < poem.start.length; i++) {
      (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i])
        ? poem.line[i].className = "showing"
        : poem.line[i].className = "hidden";
    }
  }

  const moveBoat = () => {
    positions.boatPosition += 0.7;
    boat.style.right =  positions.boatPosition + 'px';

    if (myVideo.currentTime > 13.12) positions.boatPosition = 300;
    requestAnimationFrame(moveBoat);
  };

  moveBoat();
  const intervalId = setInterval(checkTime, 1000);
})();
