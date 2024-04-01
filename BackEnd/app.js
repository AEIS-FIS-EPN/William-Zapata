import {config} from "./config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const urlFront =config.get("frontEnd");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(
    cors({
        origin: `${urlFront}`,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

/* Routes */
import {router as HealthRoute} from "./routes/health.route.js";
import {router as TodosRoute} from "./routes/todo.route.js";

app.use("/", HealthRoute);
app.use("/api/v1/todos", TodosRoute);


export { app };
