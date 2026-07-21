export const LoginForm = ({onEmailChange, onPasswordChange, emailHelperText, pwdHelperText, isLoginEnabled}) =>{

    return(
        <form id="login-form" action="http://localhost:8080/login-process" method="post">
            <label for="email">이메일</label>
            <input 
                id="email" 
                class ="email-label" 
                name="email" 
                type="text" 
                placeholder="이메일을 입력하세요" 
                onChange={(event)=>{ onEmailChange(event.target.value) }}/>
            <p id="emailHelperText" class="helper-text">{emailHelperText}</p>

            <label for="password">비밀번호</label>
            <input 
            id="password" 
            class="pwd-label" 
            name="password" 
            type="password" 
            placeholder="비밀번호를 입력하세요"
            onChange={(event)=>{onPasswordChange(event.target.value)}}/>
            <p id="pwdHelperText" class="helper-text">{pwdHelperText}</p>
            <button id="loginBtn" type="submit" disabled = {!isLoginEnabled}>로그인</button>
        </form>
    );
}