import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 


function NavBar() {

    // me fijo si esta autenticado para que no aparezca el boton de login y register
    const {isAuthenticated, user, logout} = useAuth(); 

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 mt-0">
            <Link to="/">
                <h1 className="text-2xl font-bold">Tasks Manager</h1>
            </Link>
            <ul className="flex gap-x-6">
                {isAuthenticated ? (
                    // si estas autenticado
                    <>
                        <li className="text-blue-300 font-semibold">
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to="/add-task">Add Task</Link>
                        </li>
                        <li>
                        <Link to="/" onClick={() => logout()}>Logout</Link>
                        </li>
                    </>
                    ) : ( 
                    // si no estas autenticado
                    <> 
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;