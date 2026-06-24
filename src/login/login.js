const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', async (event) => {
    /*
    try{
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "test@test.com",
                password: "test12345"
            })
        });

        if (!response.ok) {
            throw new Error('로그인 실패');
        }

        const data = await response.json();
        console.log('로그인 성공:', data);
        window.location.replace('../board/board.html');

    }catch(error){
        console.error('로그인 중 오류 발생:', error);
    }
*/
    window.location.replace('../board/board.html');
});