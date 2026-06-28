import { loadHeader } from "../components/header/header.js";

loadHeader();

const pwdInput = document.getElementById('passwordInput');
const pwdCheckInput = document.getElementById('passwordInputCheck');

const pwdHelperText = document.getElementById('pwdHelperText');
const pwdCheckHelperText = document.getElementById('pwdCheckHelperText');

const requestUpdatePwd = async ()=>{
    const cookie = await cookieStore.get('userId');
    const curUserId = cookie.value;
    try{
        const response = await fetch(`http://localhost:8080/users/${curUserId}/password`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: pwdInput.value,
            })
        });

        if (!response.ok) {
            throw new Error('로그인 실패');
        }

        const data = await response.json();
        if(!data.data){
            const toastMsg = document.createElement('h5');
            toastMsg.classList.add = "toastMsg";
            toastMsg.id = "pwdUpdateSuccessToastMsg"
            toastMsg.textContent ="수정 완료";

            const changePwdForm = document.getElementById('changePwdForm');
            changePwdForm.append(to)
        }
    }catch(error){
        console.error('비밀번호 변경 중 오류 발생:', error);
    }
}

const updatePwdBtn = document.getElementById('updatePwdBtn');
updatePwdBtn.addEventListener('click', async ()=>{
    if(pwdInput.value !== pwdCheckInput.value){
    pwdHelperText.textContent = "*비밀번호 확인과 다릅니다."
    pwdCheckHelperText.textContent = "*비밀번호와 다릅니다."
}

    if(pwdInput.value === pwdCheckInput.value){
    requestUpdatePwd();
}
})
