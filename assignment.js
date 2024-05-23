const slider = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.querySelectorAll('.slider .dots li');

let active = 0;

next.addEventListener('click', () => {
    active = (active + 1) % items.length;
    reloadSlider();
});

prev.addEventListener('click', () => {
    active = (active - 1 + items.length) % items.length;
    reloadSlider();
});

let refreshInterval = setInterval(() => next.click(), 3000);

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    const lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => next.click(), 30000);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        active = index;
        reloadSlider();
    });
});
