const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const sliderContainer = document.getElementById('slider-container');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = slider.clientWidth;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference to local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Check the user's preference from local storage on page load
const savedMode = localStorage.getItem('dark-mode');
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
}

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSliderPosition();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSliderPosition();
});

function updateSliderPosition() {
    const translateX = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
}

