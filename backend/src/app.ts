import cors from "cors";
import express, { Application } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/", router);
app.get("/ping", (req, res) => {
  res.send({
    message: "Help Center API..........",
  });
});

// global error handler
app.use(globalErrorHandler);

//not Found Route
app.use(notFound);

export default app;
