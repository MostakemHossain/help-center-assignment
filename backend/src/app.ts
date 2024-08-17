import cors from "cors";
import express, { Application } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send({
    message: "Help Center API..........",
  });
});

// global error handler
app.use(globalErrorHandler);

export default app;
