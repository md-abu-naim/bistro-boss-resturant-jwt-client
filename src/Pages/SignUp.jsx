import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Components/SocialLogin";

const SignUp = () => {
    const { createUser, updateUser } = useAuth()
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const name = data.name
        const photo = data.photo
        const email = data.email
        const password = data.password

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, photo)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name,
                            email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('update hiche');
                                    reset()
                                    alert('data add hoiche')
                                }
                            })
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input {...register("photo")} name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 6 })} name="password" type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <SocialLogin />
                    <p className="py-6 "><small>New hare <Link to='/login'>Login an your account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;