import { PostWriteForm } from "../PostWritePage/components/PostWriteForm"
import { PostWriteSubmit } from "../PostWritePage/components/PostWriteSubmit"

export const PostEditPage = ()=>{
    return(
        <>
            <main className="post-write-page">
                <h1 id="postWriteTitle">취향 기록</h1>
                {<PostWriteForm />}
                {<PostWriteSubmit />}
            </main>
        </>
    )
}