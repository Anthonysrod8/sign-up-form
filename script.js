
const passwordEl = document.querySelector('#pswd')

const confPasswordEl = document.querySelector('#password-confirm')


const validator = () => {
    if (phoneError.value.length !== 10) {
        phoneError.setCustomValidity('Phone length must be 10 digits')
        phoneError.style.border = '2px solid red'
    } else {
        phoneError.style.border = '2px solid green';
        phoneError.setCustomValidity('')
    }

    if (confPasswordEl.value !== passwordEl.value) {
        confPasswordEl.setCustomValidity("Passwords don't match")
        confPasswordEl.style.border = '2px solid red';

    } else {
        confPasswordEl.style.border = '2px solid green';
        confPasswordEl.setCustomValidity('')
        
    }
}

const phoneError = document.querySelector('#phone')


   

