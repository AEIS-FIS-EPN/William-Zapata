import {readData, writeData} from "../utils/readWriteFiles.util.js";

const pathDBJSON = "./db/db-todos.json";

const getTodosService = async () => {
    try {
        const response = await readData(pathDBJSON);
        if ("error" in response) {
            return {error: response.error};
        }

        return response;
    } catch (error) {
        return {error: "Error parsing JSON data"};
    }
};

const getTodoByIDService = async (id) => {
    try {
        const response = await readData(pathDBJSON);

        if ("error" in response) {
            return {error: response.error};
        }

        const todo = response.find((todo) => todo.id === parseInt(id));

        if (!todo) {
            return {error: "Not found"};
        }

        return todo;
    } catch (error) {
        return {error: "Error parsing JSON data"};
    }
};


const createTodoService = async (todo) => {
    try {
        const data = await readData(pathDBJSON);

        if ("error" in data) {
            return {error: data.error};
        }

        const newTODO = {
            id: data.length + 1,
            ...todo
        }

        data.push(newTODO);
        writeData(pathDBJSON, data);

        return todo;
    } catch (error) {
        return {
            error: "Error saving the data"
        };
    }
};
const updateTodoService = async (todo, id) => {
    try {
        const data = await readData(pathDBJSON);

        const todoIndex = data.findIndex((todo) => todo.id === parseInt(id));

        data[todoIndex] = {
            ...data[todoIndex],
            ...todo
        }
        
        writeData(pathDBJSON, data);

        return todo;
    } catch (error) {
        return {
            error: "Error updating the data"
        };
    }
};

const deleteTodoService = async (id) => {
    try {
        const response = await readData(pathDBJSON);

        if ("error" in response) {
            return {error: response.error};
        }

        const todoIndex = response.findIndex((todo) => todo.id === parseInt(id));

        if (todoIndex === -1) {
            return {error: "Not found"};
        }

        response.splice(todoIndex, 1);

        writeData(pathDBJSON, response);

        return {id};
    } catch (error) {
        return {
            error: "Error updating the data"
        };
    }
};

// const deleteTodoService = async (id) => {
//     try {
//         const response = await readData(pathDBJSON);
//
//         if ("error" in response) {
//             return {error: response.error};
//         }
//
//         const todoIndex = response.findIndex((todo) => todo.id === parseInt(id, 10));
//
//         if (todoIndex === -1) {
//             return {error: "Todo not found"};
//         }
//
//         response.splice(todoIndex, 1);
//
//         const writeResult = writeData(pathDBJSON, response);
//
//         if (writeResult && writeResult.error) {
//             return {error: "Failed to write the updated data"};
//         }
//
//         return { success: true, id: id };
//     } catch (error) {
//         console.error("Error in deleteTodoService:", error);
//         return {
//             error: "Error updating the data"
//         };
//     }
// };

export {getTodosService, getTodoByIDService, createTodoService, updateTodoService, deleteTodoService};
