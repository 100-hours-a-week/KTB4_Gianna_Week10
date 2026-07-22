import './BoardPage.css'
import { useNavigate } from 'react-router-dom'
export const BoardPage = () =>{
    const navigate = useNavigate();
    
    async function getPostList(){
    }
    return(
        <>
            <div id="headerContainer"></div>
            <main class="board-page">
                <section class="board-intro">
                    <h1>온전한 '나의 취향'을 <br/>만들어가는 공간. <br/></h1>
                    <button class="write-post-link" type="button" onClick={()=>{navigate('/posts/write')}}>게시글 작성</button>
                </section>
                
                <section id="post-list-container" class="post-list-container">{}</section>
            </main> 
        </>
    )
}