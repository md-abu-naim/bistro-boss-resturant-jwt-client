import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';

const Login = () => {
    const [disable, setDisable] = useState(true)
    const {LoginUser} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        LoginUser(email, password) 
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }
    
    const handleValidateCaptch = (e) => {
        const user_captcha_value = e.target.value
        console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptch} name="captha" type="text" placeholder="Type the text avobe" className="input input-bordered" required />
                            {/* <button onClick={handleValidateCaptch} className="btn btn-outline btn-error btn-xs mt-2">Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disable} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogin ></SocialLogin>
                    <p><small>New hare <Link to='/signUp'>Create an account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;