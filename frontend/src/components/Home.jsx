import { Outlet } from "react-router-dom";
import Feed from "./feed";
import Rightsidebar from "./Rightsidebar";
import useGetAllPost from "@/hooks/getallpost";
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

const Home = ()=>{
    useGetAllPost();
    useGetSuggestedUsers();
    return (
        <>
            <div className = "flex">
                <div className = "flex-grow">
                    <Feed/>
                    <Outlet/>
                </div>
                <div>
                    <Rightsidebar/>
                </div>

            </div>
            
        </>
    )
}
export default Home;