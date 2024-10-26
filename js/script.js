// const menuToggle = document.getElementById('menu');
// const navLinks = document.getElementById('navLinks');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active'); 
// });

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu');
    const navLinks = document.querySelector('.navlinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});



const images = document.querySelectorAll('.carrossel-image');
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    images[currentIndex].style.display = 'none'; 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].style.display = 'block'; 
});

document.getElementById('prevBtn').addEventListener('click', () => {
    images[currentIndex].style.display = 'none'; 
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    images[currentIndex].style.display = 'block'; 
});




