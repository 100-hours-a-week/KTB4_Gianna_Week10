import { useNavigate } from "react-router-dom";

export const PostHeader = ({user, post, isAuthor}) =>{
    const navigate = useNavigate();

    async function handleDelete() {
        try{
            const response = await fetch(`http://localhost:8080/posts/${postId}`, {
                method: 'DELETE',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json',
                    [csrf.headerName] : csrf.token
                },
            });

            if (!response.ok) {
                throw new Error('게시물 상세 조회 실패');
            }
        }catch(error){
            console.error('boardView 오류 발생:', error);
        }
    }  
    return(
        <header id="postHeader">
                <p id="postCategory">
                    {"일상"} · {post.author || "익명"}
                </p>

                <h3 id="title">
                    {post.title}
                </h3>

                <div className="post-header-meta">
                    <img
                        id="postProfilePicture"
                        src={user?.profilePicture || null}
                        alt={`${post.author || "작성자"} 프로필`}
                    />

                    <h4 id="postAuthor">
                        {post.author || "익명"}
                    </h4>

                    <h4 id="postUploadDate">
                        {post.createdAt}
                    </h4>
                </div>

                {isAuthor && ( 
                    <div className="post-action-group"> 
                            <button id="postUploadBtn" type="button" onClick={()=>{navigate(`/posts/${post.id}/edit`)}} > 수정 </button> 
                        <button id="postDeleteBtn" type="button" onClick={handleDelete} > 삭제 </button> 
                    </div> )}
        </header>
    )
}