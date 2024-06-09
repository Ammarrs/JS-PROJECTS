const form = document.querySelector('#loginForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let isUsernameValid = checkUsername();
    let isPasswordValid = checkPassword();
});

let usernameEl = document.getElementById('username');

const checkUsername = () => {
    let valid = false ;
    const min = 5;
    const max = 25;
    let error = document.querySelector('.uError');
    const username = usernameEl.value.trim();
    if(!isRequired(username)){
        error.textContent = 'Username cannot be Blank.!!';
    } else if(!isBetween(username.length , min , max)){
        error.textContent = `Username must be between ${min} and ${max} characters.`;
    } else {
        error.textContent = '';
        valid = true;
    }
    return valid;
}

let passwordEl = document.getElementById('password');

const checkPassword = () => {
    let valid = false ;
    let error = document.querySelector('.pError');
    const password = passwordEl.value.trim();
    if(!isRequired(password)){
        error.textContent = 'Password cannot be Blank.!!';
    } else if(!isPasswordSecure(password)){
        error.textContent = `Password must has at least 8 chars that include at least 1 lowercase char
,1 uppercase char, 1 number, and 1 special char`;
    } else {
        error.textContent = '';
        valid = true;
    }
    return valid;
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.*{8,})");
    return re.test(password);
}

usernameEl.addEventListener('focus',checkFocus());
function checkFocus(){
    const error = document.querySelector('.uError');
    if(error.textContent !== '') error.textContent = '';
}