import { useTasks } from "../context/TasksContext"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function TaskCard({ task }) {

    const {deleteTask} = useTasks()


    return (
        <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <div className="flex gap-x-2 items-center">
                <button className="text-gray-600 "><Link to={`/tasks/${task._id}`}>Edit</Link></button>
                <button className="text-red-700" onClick={() => {deleteTask(task._id)}}>Delete</button>
            </div>
        </header>
        <p className="font-light">{task.description}</p>
        <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p> 
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