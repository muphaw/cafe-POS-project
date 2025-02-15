// Function to load the navbar content (sidebar)
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));
}

// Function to load content based on clicked item (e.g., Dashboard, Order, Table)
function loadPage(page) {
  fetch('pages/'+page + '.html') // Dynamically load the page based on the link clicked
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error loading page:', error));
}

// Load the navbar when the page loads, and set default content
window.onload = function() {
  loadNavbar();           // Load the navbar
  loadPage('dashboard');  // Load Dashboard by default
};
