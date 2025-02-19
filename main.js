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
      history.pushState({ page: page }, '', page);

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
window.addEventListener('popstate', function(event) {
  const page = window.location.pathname.replace('/', ''); // Get the current page from the URL
  loadPage(page); // Load the page based on the URL
});
