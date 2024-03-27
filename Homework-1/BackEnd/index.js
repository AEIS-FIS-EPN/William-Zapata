import {config} from "./config.js";
import {app} from './app.js';

const port = config.get("port")

app.listen(port, () => {
    console.log(`http://localhost:${port} \n`);
    console.log(`Server listening on port ${port}`);
});
