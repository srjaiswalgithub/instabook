import Posts from "./posts";

function Feed(){
    return (
        <>
            <div className='flex-1 my-8 flex flex-col items-center pl-[20%] w-full'>
                <Posts/>
            </div>
        </>
    )
}
export default Feed;