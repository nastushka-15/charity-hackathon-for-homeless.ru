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





