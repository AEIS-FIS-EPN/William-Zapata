import { Router } from "express";
import * as Todo from "../controllers/todo.controller.js";
import {
    validateTodoSchemaByIdMiddleware,
    validateTodoSchemaMiddleware
} from "../middlewares/validateSchema.middleware.js";

const router = Router();

router.get("/", Todo.getTodos);
router.get("/:id", validateTodoSchemaByIdMiddleware ,Todo.getTodoById);
router.post("/", validateTodoSchemaMiddleware ,Todo.postTodo);
router.put("/:id", validateTodoSchemaMiddleware ,Todo.putTodo);
router.delete("/:id", validateTodoSchemaByIdMiddleware ,Todo.deleteById);

export { router };
