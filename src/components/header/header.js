export const loadHeader = async () =>{
    try{
        const response = await fetch('/src/components/header/header.html');

        if (!response.ok) {
            throw new Error('헤더를 불러오지 못했습니다.');
        }

        const headerHtml = await response.text();
        const headerContainer = document.getElementById('headerContainer');
        headerContainer.innerHTML = headerHtml;
    } catch(error){
        console.error('헤더 로딩 중 오류 발생:', error);
    } finally{
        const logoutItem = document.getElementById("logout-item");

        logoutItem.addEventListener('click', ()=>{
            if(window.confirm("로그아웃 하시겠습니까?")){
            window.location.href = "../../login/login.html"
            } 
        })
    }
}


