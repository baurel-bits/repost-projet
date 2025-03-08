const projects = document.querySelectorAll('.nav-item');
const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');

projects.forEach(function(project) {
    project.addEventListener('click', function(){
        let links = this.getAttribute('lien');
        let iframes = document.getElementById('iframes')

        iframes.src = links;
    })
})


sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-collapsed');
});
