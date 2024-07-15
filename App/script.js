var modal = document.getElementById('mymodal');
var btn = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectBoxes = document.querySelectorAll('.project-box');

    function filterProjects(category) {
        projectBoxes.forEach(box => {
            if (category === 'all' || box.classList.contains(category)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            filterProjects(category);
        });
    });

    filterProjects('all');
});
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

