import {useForm} from "react-hook-form"
import { useAuth} from "../context/AuthContext"
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

function RegisterPage() {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm(); // funciones que puedo reutilizar
    const {signup, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate('/tasks');
    },[isAuthenticated])


    const onSubmit = handleSubmit(async(values) => {
        signup(values);
    })

    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    {...register('username', {required: true})}
                    className="w-full bg bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
                    placeholder="username" 
                />
                {
                    errors.username && (<p className="text-red-500">Username is required</p>)
                }
                <input 
                    type="email" 
                    {...register('email', {required: true})}
                    className="w-full bg bg-zinc-600 text-white px-4 py-2 rounded-md my-2" 
                    placeholder="email"
                />
                {
                    errors.email && (<p className="text-red-500">Email is required</p>)
                }
                <input 
                    type="password" 
                    {...register('password', {required: true})}
                    className="w-full bg bg-zinc-500 text-white px-4 py-2 rounded-md my-2"  
                    placeholder="password"
                />
                {
                    errors.password && (<p className="text-red-500">Password is required</p>)
                }
                <button 
                    type="submit"
                    className="w-full bg text-white px-4 py-2 rounded-md"  
                    >Register</button>
            </form>
        </div>
    )
}

export default RegisterPage