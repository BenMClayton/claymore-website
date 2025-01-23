const sliderInput = document.getElementById('slider-input');
const before = document.querySelector('.before');

sliderInput.addEventListener('input', (e) => {
    const value = e.target.value;
    before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});
