// const inputPassword = document.querySelector('#password');
const eyeBtn = document.querySelector('#visability');
const eyeOffBtn = document.querySelector('#visavilityOff');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');


eyeBtn.addEventListener('click', function() {
    inputs[1].type = 'text';
    eyeBtn.classList.toggle('change');
    eyeOffBtn.classList.toggle('change');
});

eyeOffBtn.addEventListener('click', function() {
    inputs[1].type = 'password';
    eyeBtn.classList.toggle('change');
    eyeOffBtn.classList.toggle('change');
});

form.addEventListener('submit', () => {
    const login = inputs[0].value;
    const password = inputs[1].value;
    const name = inputs[2].value;
    const surname = inputs[3].value;
})

