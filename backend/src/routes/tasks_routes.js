import { Router } from "express"
import {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/tasks_controllers.js"
import {authRequired} from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validator_middleware.js";
import { createTaskSchema } from "../schemas/task_schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task/:id", authRequired, getTaskById);
router.post("/task", authRequired, validateSchema(createTaskSchema), createTask );
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask );



export default router
