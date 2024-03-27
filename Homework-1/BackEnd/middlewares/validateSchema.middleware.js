import {todoByIDSchema, todoSchema} from "../schemas/todo.schema.js";

const validateTodoSchemaByIdMiddleware = async (req, res, next) => {
    const {id} = req.params;

    try {
        req.params = await todoByIDSchema.validateAsync({id}, {
            abortEarly: false,
        })
        next();
    } catch (e) {
        const validationErrors = e.details.map(detail => {
            return {
                field: detail.context.key,
                message: detail.message.replace(/['"]/g, '')
            };
        });

        res.status(400).json(validationErrors);
    }
}

const validateTodoSchemaMiddleware = async (req, res, next) => {
    const {description, urgency, creationDate} = req.body;

    try {
        req.body = await todoSchema.validateAsync({description, urgency, creationDate}, {
            abortEarly: false,
        })
        next();
    } catch (e) {
        const validationErrors = e.details.map(detail => {
            return {
                field: detail.context.key,
                message: detail.message.replace(/['"]/g, '')
            };
        });

        res.status(400).json(validationErrors);
    }
}

export {validateTodoSchemaByIdMiddleware, validateTodoSchemaMiddleware}
