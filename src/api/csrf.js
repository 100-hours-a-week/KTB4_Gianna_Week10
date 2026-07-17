export const requestCsrfAPIJsonResponse = async() =>{

    const csrfResponse = await fetch("http://localhost:8080/csrf", {
        method: "GET",
        credentials: "include"
    });

    if (!csrfResponse.ok) {
        throw new Error(`CSRF 토큰 조회 실패: ${csrfResponse.status}`);
    }


    return await csrfResponse.json();
}
