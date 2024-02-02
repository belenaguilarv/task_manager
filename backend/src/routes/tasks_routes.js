import { Router } from "express"
import {authRequired} from "../middlewares/validateToken.js"
import {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/tasks_controllers.js"


const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task/:id", authRequired, getTaskById);
router.post("/task", authRequired, createTask );
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask );



export default router
