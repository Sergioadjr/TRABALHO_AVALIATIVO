const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');
let currentIndex = 0;


function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    navButtons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }   
    });

    currentIndex = index;
}

navButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        goToSlide(i);
    });
});

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  }

setInterval(nextSlide, 3500);