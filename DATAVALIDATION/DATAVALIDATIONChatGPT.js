const form = document.querySelector('#loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isUsernameValid = checkUsername();
    let isPasswordValid = checkPassword();
});

let usernameEl = document.getElementById('username');

const checkUsername = () => {
    let valid = false;
    const min = 5;
    const max = 25;
    let error = document.querySelector('.uError');
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        error.textContent = 'Username cannot be blank.';
    } else if (!isBetween(username.length, min, max)) {
        error.textContent = `Username must be between ${min} and ${max} characters.`;
    } else {
        error.textContent = '';
        valid = true;
    }
    return valid;
}

let passwordEl = document.getElementById('password');

const checkPassword = () => {
    let valid = false;
    let error = document.querySelector('.pError');
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        error.textContent = 'Password cannot be blank.';
    } else if (!isPasswordSecure(password)) {
        error.textContent = `Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character.`;
    } else {
        error.textContent = '';
        valid = true;
    }
    return valid;
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$");
    return re.test(password);
}

const isRequired = value => value !== '';

const isBetween = (length, min, max) => length >= min && length <= max;

usernameEl.addEventListener('focus', checkFocus);

passwordEl.addEventListener('focus', checkPasswordFocus);

function checkFocus() {
    const error = document.querySelector('.uError');
    if (error.textContent !== '') error.textContent = '';
}

function checkPasswordFocus() {
    const error = document.querySelector('.pError');
    if (error.textContent !== '') error.textContent = '';
}
