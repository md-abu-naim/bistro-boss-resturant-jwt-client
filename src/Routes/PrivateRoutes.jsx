import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return 'loading'
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace={true} />
};

export default PrivateRoutes;