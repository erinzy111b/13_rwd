var sidebarCollapse = document.querySelector('.sidebar-collapse');
var menuToggle = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');
var sidebarOpen = false;

menuToggle.addEventListener('click', function () {
    sidebarOpen = !sidebarOpen;
    if (sidebarOpen) {
        sidebarCollapse.classList.add('show');
        navbarCollapse.classList.add('show');
    } else {
        sidebarCollapse.classList.remove('show');
        navbarCollapse.classList.remove('show');
    }
});
