import {
    createTodoService,
    deleteTodoService,
    getTodoByIDService,
    getTodosService,
    updateTodoService
} from "../services/todo.service.js";

const getTodos = async (_, res) => {
    const response = await getTodosService();

    if ("error" in response) {
        return res.status(500).send(response.error);
    }

    return res.status(200).json(response);
}

const getTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await getTodoByIDService(id);

        if ("error" in response) {
            return res.status(404).json({
                message: "Not found"
            });
        }

        return res.status(200).json(response);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

const postTodo = async (req, res) => {
    try {
        const {description, urgency, creationDate} = req.body;
        const response = await createTodoService({description, urgency, creationDate});

        if ("error" in response) {
            return res.status(500).send(response.error);
        }

        return res.status(201).json({description, urgency, creationDate});
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

const putTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {description, urgency, creationDate} = req.body;
        const todo = {description, urgency, creationDate};
        const response = await updateTodoService(todo, id);

        if ("error" in response) {
            return res.status(500).send(response.error);
        }

        return res.status(200).json({id, description, urgency, creationDate});
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

const deleteById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await deleteTodoService(id);

        if ("error" in response) {
            return res.status(404).json({
                message: "Not found"
            });
        }

        return res.status(204).send();
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

export {getTodos, getTodoById, postTodo, putTodo, deleteById}
