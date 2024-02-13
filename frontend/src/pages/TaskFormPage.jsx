import {useForm} from "react-hook-form"
import { useTasks } from "../context/TasksContext"
import {useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

function TaskFormPage() {
    const {register, handleSubmit, setValue} = useForm();
    const {createTask, getTask, updateTask} = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if(params.id){
                const task = await getTask(params.id);
                console.log(task)
                setValue("title", task.title)
                setValue("description", task.description)
            }
        }
        loadTask();
    },[])

    const onSubmit = handleSubmit((data) => {
        try {
            if (params.id) {
                updateTask(params.id, 
                {
                    ...data,
                    date: dayjs.utc(data.date).format()
                  })
            } else {
              createTask(data)
            }
            navigate("/tasks");
          } catch (error) {
            console.log(error);
          }
        });


    return(
        <div className="flex items-center justify-center py-3">
        <div className="w-full bg-zinc-800 max-w-md px-4 p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    placeholder="Title"
                    {...register('title')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <label htmlFor="description">Description</label>
                <textarea 
                    rows="10" 
                    placeholder="Description"
                    {...register('description')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>
                <button className=" text-blue-500 px-4 pt-2 underline">
                    Save
                </button>
            </form>
        </div>
        </div>
    )

}

export default TaskFormPage