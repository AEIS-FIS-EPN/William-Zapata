import Joi from "joi";

const todoSchema = Joi.object({
    id: Joi.number()
        .optional(),
    description: Joi.string()
        .required(),
    urgency: Joi.number()
        .required(),
    creationDate: Joi.string()
        .pattern(new RegExp(/^\d{2}-\d{2}-\d{4}$/))
        .required(),
    completed: Joi.boolean()
        .required()
});

const todoByIDSchema = Joi.object({
    id: Joi.number()
        .required(),
});

export {todoSchema, todoByIDSchema}


