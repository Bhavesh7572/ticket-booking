import { Navigate } from "react-router-dom";

const DefaultRoute = () =>{
    const authData = JSON.parse(localStorage.getItem("authData"));
    const role = authData?.role
    if(!authData){
        return <Navigate to='/login' replace/>
    }
    if(role === "ADMIN"){
        return <Navigate to='admin/AdminDashboard' replace />
    }
    if(role === "USER"){
        return <Navigate to='user/UserDashboard' replace />
    }
}

export default DefaultRoute;