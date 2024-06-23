import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading) {
        return 'loading'
    }
    if(user || isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace={true} />
};

export default AdminRoutes;