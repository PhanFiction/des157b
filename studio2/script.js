
(() => {
  'use strict';
  
  const fakeData = [
    {
      "time": "8:00AM",
      "steps": "1,200",
      "miles": "0.60"
    },
    {
      "time": "9:00AM",
      "steps": "1,100",
      "miles": "0.55"
    },
    {
      "time": "10:00AM",
      "steps": "1,150",
      "miles": "0.50"
    },
    {
      "time": "11:00AM",
      "steps": "300",
      "miles": "0.25"
    },
    {
      "time": "12:00PM",
      "steps": "50",
      "miles": "0.02"
    },
    {
      "time": "1:00PM",
      "steps": "90",
      "miles": "0.04"
    },
    {
      "time": "2:00PM",
      "steps": "800",
      "miles": "0.36"
    },
    {
      "time": "3:00PM",
      "steps": "500",
      "miles": "0.22"
    },
    {
      "time": "4:00PM",
      "steps": "1,950",
      "miles": "0.88"
    },
    {
      "time": "5:00PM",
      "steps": "23",
      "miles": "0.01"
    }
  ]

  const container = document.querySelector('.container');

  // Initialize loop to create progress bars
  for (let i = 1; i <= 5; i++) {
    const progressBar = document.createElement('div');
    progressBar.innerHTML = `<h2>Steps ${i}</h2><div class="progress-container"><div class="progress-bar"></div></div>`;
    container.appendChild(progressBar);
  }
  
  const progressBars = document.querySelectorAll('.progress-bar'); // All progress bars DOM

  // Function to animate the progress bars
  const animateProgressBars = () => {
    const endTime = 100; // End time for animation
    const timeInterval = 15; // Time interval for animation speed

    progressBars.forEach((progressBar) => {
      let width = 1;
      const animateFrame = () => {
        if (width >= endTime) {
          clearInterval(id);
        } else {
          width++;
          progressBar.style.width = width + '%';
        }
      };

      let id = setInterval(animateFrame, timeInterval);
    });
  };

  // Go through data.json and display information from the height

  // Call the function to animate the progress bars
  animateProgressBars();
})();