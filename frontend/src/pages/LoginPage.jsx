import {useForm} from "react-hook-form"
import { useAuth} from "../context/AuthContext"
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"


function LoginPage() {

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm(); // funciones que puedo reutilizar

    const onSubmit = handleSubmit(async(data) => {
        console.log(data);
    })

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
           <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                
                <h1 className="text-2xl font-bold">Login</h1>
                
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
           </div> 
        </div>
    )
}

export default LoginPage