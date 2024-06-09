window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'block';
    var targetElement = document.querySelector('#sobre');
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});

document.querySelectorAll('nav ul li a').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        var targetElement = document.querySelector(target);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
