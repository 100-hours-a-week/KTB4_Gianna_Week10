import { pfpHelperTextMaker, emailHelperTextMaker, pwdHelperTextMaker, confirmPwdHelperTextMaker, nicknameHelperTextMaker} from "../utils/helperTextMaker.js";

const profilePictureInput = document.getElementById('profilePicture');
const pfpHelperText = document.getElementById('pfpHelperText');

const emailInput = document.getElementById('email');
const emailHelperText =document.getElementById('emailHelperText');

const passwordInput = document.getElementById('password');
const pwdHelperText = document.getElementById('pwdHelperText');

const confirmPwdInput = document.getElementById('confirmPassword');
const confirmPwdHelperText = document.getElementById('confirmPwdHelperText');

const nicknameInput = document.getElementById('nickname');
const nicknameHelperText = document.getElementById('nicknameHelperText');

const signupBtn = document.getElementById('signupBtn');
const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', () => {
    history.back();
});

const checkAllInputFilled = () =>{
    if(profilePictureInput.value.length !== 0 
        && emailInput.value.length !== 0
        && passwordInput.value.length !== 0
        && confirmPwdInput.value.length !== 0
        && nicknameInput.value.length !== 0) {
            signupBtn.disabled = false;
            signupBtn.style.backgroundColor = "#1f4b22"
    } else{
            signupBtn.disabled = true;
            signupBtn.style.backgroundColor = "#8fa58a"
        }                                       
}

profilePictureInput.addEventListener('change', (event) =>{
    pfpHelperText.textContent = pfpHelperTextMaker(event.target.files[0].name);
    checkAllInputFilled()
})

emailInput.addEventListener('input', ()=>{
    emailHelperText.textContent = emailHelperTextMaker(emailInput.value);
    checkAllInputFilled()
})

passwordInput.addEventListener('input', () =>{
    pwdHelperText.textContent = pwdHelperTextMaker(passwordInput.value, confirmPwdInput.value);
    if(confirmPwdHelperText.textContent !== "") confirmPwdHelperText.textContent = confirmPwdHelperTextMaker(passwordInput.value, confirmPwdInput.value);

    checkAllInputFilled()
})

confirmPwdInput.addEventListener('input', () => {
    if(pwdHelperText.textContent !== "") pwdHelperText.textContent = pwdHelperTextMaker(passwordInput.value, confirmPwdInput.value);
    confirmPwdHelperText.textContent = confirmPwdHelperTextMaker(passwordInput.value, confirmPwdInput.value);
   checkAllInputFilled()
})

nicknameInput.addEventListener('input', ()=>{
    nicknameHelperText.textContent = nicknameHelperTextMaker(nickname.value);
    checkAllInputFilled()
})

signupBtn.addEventListener('click', async (event) => {

    
    
});
