import { Outlet, Navigate, useLocation } from 'react-router-dom'

const PrivateRoutesAdmin = () => {
    const location = useLocation();
    const token = window.localStorage.getItem("token") ;
    const role = window.localStorage.getItem("role") ;


    if(token && role == "ADMIN"){
        return (<Outlet/>);
    }else if(token && role == "CUSTOMER"){
        return (<Navigate to='/dashboard' state={{ from: location }} replace/>)
    }
    else {
        return (<Navigate to='/login' state={{ from: location }} replace/>)
    }
}

export default PrivateRoutesAdmin
