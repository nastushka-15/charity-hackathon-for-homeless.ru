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

