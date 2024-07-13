import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./app/modiuls/auth/auth.router";
import globalErrorHendleing from "./app/middlewere/globalErrorHendleing";

const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

//router
app.use("/api/auth", UserRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHendleing);

export default app;
