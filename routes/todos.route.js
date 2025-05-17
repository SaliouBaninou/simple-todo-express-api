import { Router } from "express";
import { 
    createTodoController,
    deleteTodoController,
    getTodoController, 
    getTodosController, 
    putTodoController
} from "../controllers/todos.controller.js";
import { validateSchema } from "../middlewares/validation.middleWare.js";
import { 
    createValidation, 
    deleteVlidation, 
    getValidataion, 
    putValidation 
} from "../validations/todo.validation.js";

const router = Router()



router.get(
    '/api/todos',
    getTodosController
)

router.get(
    '/api/todos/:id',
    validateSchema(getValidataion),
    getTodoController
)


router.post(
    '/api/todos',
    validateSchema(createValidation),
    createTodoController
)


router.put(
    '/api/todos/:id',
    validateSchema(putValidation),
    putTodoController
)

router.delete(
    '/api/todos/:id',
    validateSchema(deleteVlidation),
    deleteTodoController
)


export default router