function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').insertAdjacentHTML('afterbegin', data);
      setActiveLink('dashboard');
    })
    .catch(error => console.error('Error loading navbar:', error));
}

function loadSideBar() {
  fetch('sideBar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
      setActiveLink('dashboard');
    })
    .catch(error => console.error('Error loading sidebar:', error));
}

function setActiveLink(page) {
  const allLinks = document.querySelectorAll('.nav-link');
  allLinks.forEach(link => {
    link.classList.remove('active');
  });

  const activeLinkSidebar = document.getElementById(page + '-nav');
  const activeLinkNavbar = document.getElementById(page + '-nav-navbar');
  if (activeLinkSidebar) activeLinkSidebar.classList.add('active');
  if (activeLinkNavbar) activeLinkNavbar.classList.add('active');
}

function loadPage(page) {
  fetch('pages/' + page + '.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('page-content').innerHTML = data;
      document.title = page.charAt(0).toUpperCase() + page.slice(1) + '';
      history.pushState({ page: page }, '', page);
      setActiveLink(page);
    })
    .catch(error => console.error('Error loading page:', error));
}

window.onload = function() {
  loadSideBar();          
  loadNavbar();            
  loadPage('dashboard');
};

window.addEventListener('popstate', function(event) {
  loadPage('dashboard');
});
