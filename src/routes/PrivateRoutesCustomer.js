import { Outlet, Navigate, useLocation } from 'react-router-dom'

const PrivateRoutesCustomer = () => {
    const location = useLocation();
    const token = window.localStorage.getItem("token") ;
    const role = window.localStorage.getItem("role") ;

    if(token && role == "CUSTOMER"){
        return (<Outlet/>);
    }else if(token && role == "ADMIN"){
        return (<Navigate to='/admin' state={{ from: location }} replace />)
    }
    else {
        return (<Navigate to='/login' state={{ from: location }} replace/>)
    }
}

export default PrivateRoutesCustomer
