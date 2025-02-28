function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error loading navbar:', error));
}

function loadSideBar() {
  fetch('sideBar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));
}

function loadPage(page) {
  fetch('pages/' + page + '.html') 
    .then(response => response.text())
    .then(data => {
      document.getElementById('page-content').innerHTML = data;
     
      history.pushState({ page: page }, '', page);
    })
    .catch(error => console.error('Error loading page:', error));
}

window.onload = function() {
  loadSideBar();          
  loadNavbar();            
  loadPage('dashboard');   
};


window.addEventListener('popstate', function(event) {
  const page = window.location.pathname.replace('/', ''); 
  loadPage(page); 
});




