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
/*for table availability*/

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript file is running...");

  const tables = document.querySelectorAll(".table");

  tables.forEach(table => {
      table.addEventListener("click", function () {
          console.log("Clicked:", this.innerText);

          this.classList.toggle("available");
          console.log(this.innerText + " classList:", this.classList);
      });
  });
});

// Function to toggle the status of the table
document.addEventListener('DOMContentLoaded', function () {
  // Select all available and unavailable buttons
  const availableButtons = document.querySelectorAll('.available-btn');
  const unavailableButtons = document.querySelectorAll('.unavailable-btn');

  // Add event listeners to available buttons
  availableButtons.forEach((button) => {
      button.addEventListener('click', () => {
          toggleStatus(button, 'available');
      });
  });

  // Add event listeners to unavailable buttons
  unavailableButtons.forEach((button) => {
      button.addEventListener('click', () => {
          toggleStatus(button, 'unavailable');
      });
  });

  // Toggle status between available and unavailable
  function toggleStatus(button, status) {
      // Find the card that the button belongs to
      const card = button.closest('.table-card');
      
      // Disable the opposite button and activate the clicked one
      if (status === 'available') {
          card.querySelector('.available-btn').classList.add('active');
          card.querySelector('.unavailable-btn').classList.remove('active');
          card.querySelector('p span').textContent = 'Available';
      } else {
          card.querySelector('.unavailable-btn').classList.add('active');
          card.querySelector('.available-btn').classList.remove('active');
          card.querySelector('p span').textContent = 'Unavailable';
      }
  }
});

/*profile*/
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  // Check local storage for saved state
  let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  function updateButton() {
      if (isLoggedIn) {
          loginBtn.textContent = "Logout";
          loginBtn.classList.remove("login");
          loginBtn.classList.add("logout");
      } else {
          loginBtn.textContent = "Login";
          loginBtn.classList.remove("logout");
          loginBtn.classList.add("login");
      }
  }

  // Initial button state
  updateButton();

  // Toggle function
  loginBtn.addEventListener("click", function () {
      isLoggedIn = !isLoggedIn;
      localStorage.setItem("isLoggedIn", isLoggedIn);
      updateButton();
  });
});
