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

//form validation

const form = document.forms.loginForm;
const emailInput = form.elements.email;
const submitBtn = form.elements.submitBtn;
const emailError = document.getElementById('emailError');
const emailSuccess = document.getElementById('emailSuccess');
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let hasError = false;
    
    // Очистка предыдущих сообщений об ошибках
    emailError.style.display = 'none';
    emailSuccess.style.display ='none';

    if (validateEmail(emailInput.value) === false) {
        emailError.textContent = 'Введите корректный email.';
        emailError.style.display = 'block';
        hasError = true;
        }
    

    if (hasError === false) {
        console.log('Форма успешно отправлена!');
        emailSuccess.textContent = 'Форма успешно отправлена!';
        emailSuccess.style.display = 'block';
        form.reset();
        }
    });  

    function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;
    return regex.test(email);
    }

    // latest слайдер
    const swiper2 = new Swiper(".latest-mySwiper", {

        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
          },
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