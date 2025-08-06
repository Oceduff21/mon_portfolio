document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    let scrollPosition = 0;
    const scrollStep = 120;

rightArrow.addEventListener('click', () => {
    scrollPosition -= scrollStep;
    track.style.transform = `translateX(${scrollPosition}px)`;
});

leftArrow.addEventListener('click', () => {
    scrollPosition += scrollStep;
    track.style.transform = `translateX(${scrollPosition}px)`;
    });
});
