import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,IsAdminLoading] = UseAdmin(user?.email);
    const location = useLocation();
    if(loading || IsAdminLoading){
        return <div>Loading...</div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate> ;
};

export default AdminRoute;