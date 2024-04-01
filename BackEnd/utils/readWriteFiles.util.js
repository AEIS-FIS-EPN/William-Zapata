import fs from "fs";

/**
 *
 * @param {string} pathDBJSON
 * @returns {Object}
 */
const readData = (pathDBJSON) => {
    try {
        const data = fs.readFileSync(pathDBJSON, {encoding: 'utf8', flag: 'r'});

        if(data.length === 0) {
            return [];
        }

        return JSON.parse(data);
    } catch (error) {
        return {
            error: "Error reading the data"
        };
    }
};

/**
 *
 * @param {string} pathDBJSON
 * @param {Object} data
 * @returns {Object}
 */
const writeData = (pathDBJSON, data) => {
    try {
        fs.writeFileSync(pathDBJSON, JSON.stringify(data));
    } catch (error) {
        return {
            error: "Error writing the data"
        };
    }
};

export {readData, writeData};

