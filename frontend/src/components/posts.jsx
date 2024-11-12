import Post from "./post";
import { useSelector } from "react-redux";
function Posts(){
    const {posts} = useSelector((store)=>store.Post)
    return (
        <>
            <div>
                {
                   posts && posts.map((post)=><Post  post = {post} key = {post._id}/>)
                }
            </div>
        </>
    )
}
export default Posts;