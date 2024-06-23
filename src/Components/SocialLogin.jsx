import { FaGoogle } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const googleSignIn = () => {
        googleLogin()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    navigate('/')
                })
            })
    }

    return (
        <div>
            <div className="px-10">
                <button onClick={googleSignIn} className="btn">
                    <FaGoogle></FaGoogle>
                    Login With GOOGLE
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;