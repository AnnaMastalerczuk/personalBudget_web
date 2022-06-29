const inputPassword = document.querySelector('#password');
const eyeBtn = document.querySelector('#visability');
const eyeOffBtn = document.querySelector('#visavilityOff');

eyeBtn.addEventListener('click', function() {
    inputPassword.type = 'text';
    eyeBtn.classList.toggle('change');
    eyeOffBtn.classList.toggle('change');
});

eyeOffBtn.addEventListener('click', function() {
    inputPassword.type = 'password';
    eyeBtn.classList.toggle('change');
    eyeOffBtn.classList.toggle('change');
});

