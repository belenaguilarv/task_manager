import { useTasks } from "../context/TasksContext"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function TaskCard({ task }) {

    const {deleteTask} = useTasks()


    return (
        <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between ">
            <h1 className="text-xl font-semibold ">{task.title}</h1>

        </header>
        <p className="font-light p-2">{task.description}</p>
        <p className="font-light p-2 text-gray-400">
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p> 

        <div className="flex flex-col sm:flex-row gap-2 pt-6 font-light p-2 justify-between">
                <button className="text-gray-600 underline "><Link to={`/tasks/${task._id}`}>Edit</Link></button>
                <button className="text-red-700 underline mx-auto" onClick={() => {deleteTask(task._id)}}>Delete</button>
        </div>
    </div>
    )
}

// Validación de props utilizando PropTypes
TaskCard.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string 
    }).isRequired
};

export default TaskCard