export const getPostIdFromURL = () =>{
    const params = window.location.pathname;
    const match = params.match(/^\/posts\/(\d+)$/);
    return match[1];
}

export const getUserId = async () =>{
    try{
        const cookie = await cookieStore.get('userId');
        return cookie.value;
    }catch(error){
        window.alert('재로그인이 필요합니다.')
        window.location.replace('/login')
        return null;
    }

}

import { requestCsrfAPIJsonResponse } from "../api/csrf.js";
export const getUser = async(userId) =>{
const csrf = await requestCsrfAPIJsonResponse();

    try{
        const response = await fetch(`http://localhost:8080/users/${userId}`, {
            method: 'GET',
            credentials:"include", 
            headers:{
                [csrf.headerName] : csrf.token                
            }   
        });

        // if (!response.ok) {
        //     console.error('오류 발생 : 사용자 정보 조회 실패', response.status);
        //     return response;
        // }else{ 
            const data = await response.json();
            return data.data;
        //}
       
    }catch(error){
        console.error('오류 발생:', error);
    }
} 


export const formalizeDate = (datetime) =>{
    const [date, time] = datetime.split("T");
    const [hourMinSec, milliSec] = time.split(".");
    return `${date} ${hourMinSec}`;
}

const formalizeLikeViewComments = (value)=>{
    if(value < 1000){ 
        return value;
    }else{
        return `${Math.floor(value/1000)}k`
    }

}
