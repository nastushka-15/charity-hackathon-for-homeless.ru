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


