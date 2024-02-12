import {useForm} from "react-hook-form"
import { useAuth} from "../context/AuthContext"
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from "react";

function LoginPage() {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm(); 

    const {signin, errors: loginErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if(isAuthenticated) navigate("/tasks");
    },[isAuthenticated])

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
           <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

                <h1 className="text-2xl font-bold my-2">Login</h1>
                
                {Array.isArray(loginErrors) && loginErrors.map((error, i) => (
                    <div className="bg-red-500 p-1 text-white my-1" key={i}>
                        {error}
                    </div>
                ))
                }

                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        {...register('username', {required: true})}
                        className="w-full bg bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
                        placeholder="Username" 
                    />
                    {errors.username && (<p className="text-red-500">Username is required</p>)}

                    <input 
                        type="password" 
                        {...register('password', {required: true})}
                        className="w-full bg bg-zinc-500 text-white px-4 py-2 rounded-md my-2"  
                        placeholder="Password"
                    />
                    {errors.password && (<p className="text-red-500">Password is required</p>)}

                    <button 
                        type="submit"
                        className="w-full bg text-white px-4 py-2 rounded-md">Sign in
                    </button>
                </form>
                <p className="flex gap-x-2 justify-between mt-6">
                    Don't have an account? 
                    <Link to="/register" className="text-sky-500">
                        Sign up
                    </Link>
                </p>
           </div> 
        </div>
    )
}

export default LoginPage