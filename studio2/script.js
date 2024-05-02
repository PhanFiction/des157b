(() => {
  'use strict';
  const container = document.querySelector('.container');
  let fetchedData;

  // Read data file 
  fetch('data.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); // Parse JSON response
  })
  .then(data => {
    fetchedData = data; // Assign fetched data to fetchedData variable
    console.log(fetchedData);
    // Initialize loop to create progress bars
    for (let i = 1; i < fetchedData.length; i++) {
      const progressBar = document.createElement('div');
      progressBar.innerHTML = `<div class="progress-container"><span>${fetchedData[i].time}</span></div>`;
      container.appendChild(progressBar);
    }
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

  // Initialize loop to create progress bars
/*   for (let i = 1; i <= 5; i++) {
    const progressBar = document.createElement('div');
    progressBar.innerHTML = `<h2>Steps ${i}</h2><div class="progress-container"><div class="progress-bar"></div></div>`;
    container.appendChild(progressBar);
  } */
  
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

  // Call the function to animate the progress bars
  animateProgressBars();
})();