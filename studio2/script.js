(() => {
  'use strict';
  const container = document.querySelector('.progress-container');
  let fetchedData;

  // Read data file 
  fetch('data.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json(); // Parse JSON response
    })
    .then(data => {
      fetchedData = data; // Assign fetched data to fetchedData variable

      // Initialize loop to create progress bars
      for (let i = 0; i < fetchedData.length; i++) {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-item';
        progressBar.setAttribute('id', fetchedData[i].id);
        progressBar.innerHTML = `
          <span>${fetchedData[i].time}</span>
        `;
        container.appendChild(progressBar);
      }

      // Add event listener to each .progress-item
      const progressItem = document.querySelectorAll('.progress-item');
      const box = document.getElementById('box');
      
      progressItem.forEach(elem => {
        let timeMode = true;

        elem.addEventListener('click', () => {
          const elemId = elem.id;

          const foundData = fetchedData.find(item => item.id == elemId);
          const { miles, steps, time } = foundData; // Destructure the data from object

          box.innerHTML = `
              <span> Time: <b>${time}</b></span>
              <span> Miles: <b>${miles}</b></span>
              <span> Steps taken: <b>${steps}</b></span>
            `;
        });
      });
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
})();