// Function to load the navbar page dynamically into the content area
function loadNavbar() {
  fetch('navbar.html') // Fetch the navbar HTML
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error loading navbar:', error));
}

// Function to load the sidebar content dynamically
function loadSideBar() {
  fetch('sideBar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));
}

// Function to load page content based on the clicked item (e.g., Dashboard, Order, Table)
function loadPage(page) {
  fetch('pages/' + page + '.html') // Dynamically load the page based on the link clicked
    .then(response => response.text())
    .then(data => {
      document.getElementById('page-content').innerHTML = data;
      // Update the browser's URL without reloading the page
      // history.pushState({ page: page }, '', page);
    })
    .catch(error => console.error('Error loading page:', error));
}

// Load the navbar and sidebar when the page loads, and set default content
window.onload = function() {
  loadSideBar();           // Load the side bar
  loadNavbar();            // Load the navbar (Only once)
  loadPage('dashboard');   // Load Dashboard by default
};

// Handle back and forward navigation in the browser
// window.addEventListener('popstate', function(event) {
//   const page = window.location.pathname.replace('/', ''); // Get the current page from the URL
//   loadPage(page); // Load the page based on the URL
// });

// Ensure the canvas is initialized only after the content has loaded
// Set up the data for the chart
// Ensure the canvas is initialized only after the content has loaded
document.addEventListener("DOMContentLoaded", function () {
  // Set up the data for the chart after the DOM is fully loaded
  const ctx = document.getElementById('myChart')?.getContext('2d');

  // Check if the canvas element exists
  if (ctx) {
    const chart = new chart(ctx, {
      type: 'bar', // Type of chart (bar, line, etc.)
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // Labels for each item on the x-axis
        datasets: [{
          label: 'Monthly Sales',
          data: [12, 19, 3, 5, 2], // Data points
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
          borderColor: 'rgba(54, 162, 235, 1)', // Bar border color
          borderWidth: 1 // Width of the border
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } else {
    console.error('Canvas element not found!');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("lineChart");
  const ctx = canvas.getContext("2d");

  const data = {
      labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
      datasets: [{
          label: 'My Data',
          data: [10, 30, 20, 40, 35], // Y-axis data points
          borderColor: 'rgb(75, 192, 192)', // Line color
          fill: false, // Don't fill the area under the line
          tension: 0.1 // Controls the curve of the line
      }]
  };

  const config = {
      type: 'line',
      data: data,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              tooltip: {
                  enabled: true
              }
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  };

  new Chart(ctx, config);
});

