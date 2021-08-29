
function togglePage(page) {
    tabcontent = document.getElementsByClassName("page-content");
    for(var i = 0; i < tabcontent.length; i++){
        tabcontent[i].classList.add("d-none");
    }
    showPage = document.getElementById(page);

    showPage.classList.remove("d-none");

    title = document.getElementById('album-title');
    switch(page) {
        case 'page-about':
            title.innerHTML = 'About Me';
            break;
        case 'page-resume':
            title.innerHTML = 'Resume';
            break;
        case 'page-projects':
            title.innerHTML = 'Projects';
            break;

    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

