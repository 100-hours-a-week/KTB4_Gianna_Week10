import "./LoginPage.css"
import { emailHelperTextMaker, pwdHelperTextMaker } from "../utils/helperTextMaker.js";
import { LoginForm } from "./components/LoginForm.jsx";
import { use, useState } from "react";

export const LoginPage = ()=>{
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailHelperText, setEmailHelperTest] = useState(null);
    const [pwdHelperText, setPwdHelperTest] = useState(null);
    const [isLoginEnabled, setIsLoginEnabled] = useState(false);
    
    function handleEmailChange(input){
        const tempHelperText = emailHelperTextMaker(input);
        setEmail(input);
        setEmailHelperTest(tempHelperText);
        console.log(email, emailHelperText)

        checkLoginStatus(tempHelperText, pwdHelperText);
    }

    function handlePwdChange(input){
        const tempHelperText = pwdHelperTextMaker(input);
        setPwdHelperTest(tempHelperText);
        setPassword(input);
        checkLoginStatus(emailHelperText, tempHelperText);
    }

    function checkLoginStatus(emailHT, pwdHT){
        if(emailHT.length === 0
            && pwdHT.length === 0
        ){
            setIsLoginEnabled(true);
        } else{
            setIsLoginEnabled(false);
        }
    }

    return (
        <div>
            <main className="login-page">
                <section className="login-container">
                    <h2>로그인</h2>
                    {<LoginForm 
                    onEmailChange={handleEmailChange} 
                    onPasswordChange={handlePwdChange} 
                    emailHelperText={emailHelperText} 
                    pwdHelperText={pwdHelperText}
                    isLoginEnabled={isLoginEnabled}/>}
                    <a className="signup-link" href={"/signup"}>회원가입</a>
                </section> 
            </main>
        </div>
    );
}