// process section
const processButtons = document.querySelectorAll('.process_buttonlist__item');
const processVideos = document.querySelectorAll('.process_video iframe');


processButtons[0].classList.add('active');
processVideos[0].style.display = 'block';

processButtons.forEach((button, index) => {
    button.addEventListener('click', () => {processButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    processVideos.forEach((video) => {video.style.display = 'none';});

    processVideos[index].style.display = 'block';
});
});



// анимация цифр блок Our-company

const counters = document.querySelectorAll('.our-company__number');
counters.forEach(counter => {
  let numberTop = counter.getBoundingClientRect().top,
  start = +counter.innerHTML,
  end = +counter.dataset.max;

  let animated = false;
  
  window.addEventListener('scroll', function onScroll() {
    if (!animated && window.pageYOffset > numberTop - window.innerHeight / 2) {
      animated = true;
      window.removeEventListener('scroll', onScroll);
      let interval = setInterval(function() {
        counter.innerHTML = ++start;
        if (start === end) {
          clearInterval(interval);
        }
      }, 5);
    }
  });
});


// Slider

const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;
const imageWidth = sliderImages[0].offsetWidth;
sliderLine.style.width = `${sliderImages.length * imageWidth}px`;

// перемотка слайдера вперед
sliderBtnNext.addEventListener('click', nextSlide);

// перемотка слайдера назад
sliderBtnPrev.addEventListener('click', prevSlider);

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
    let newPosition = slider.offsetWidth;
    sliderLine.style.transition = 'none';
    sliderLine.style.transform = `translateX(${newPosition}px)`;
  }
  rollSlider();
}

function prevSlider() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }
  rollSlider();
}

function rollSlider() {
  let newPosition = -sliderCount * imageWidth;
  sliderLine.style.transition = 'transform 0.5s ease';
  sliderLine.style.transform = `translateX(${newPosition}px)`;
}

// автоматическое перелистывание слайдеров
// setInterval(() => {
//     nextSlide()
// }, 3000);