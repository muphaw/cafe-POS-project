// Function to load the navbar page dynamically into the content area
function loadNavbar() {
  fetch('navbar.html') // Fetch the navbar HTML
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error loading navbar:', error));
}
// Function to load the navbar content (sidebar)
 function loadSideBar() {
    fetch('sideBar.html')
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
        document.getElementById('page-content').innerHTML = data;
      })
      .catch(error => console.error('Error loading page:', error));

  }

  // Load the navbar when the page loads, and set default content
  window.onload = function() {
    loadSideBar();           // Load the side bar
    loadNavbar(); // load the navbar (Only once)
    loadPage('dashboard');  // Load Dashboard by default
  };