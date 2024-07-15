import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./app/modiuls/auth/auth.router";
import globalErrorHendleing from "./app/middlewere/globalErrorHendleing";
import { ServiceRouter } from "./app/modiuls/Service/service.route";
import { SlotsRouter } from "./app/modiuls/slots/slots.router";
import { BookingServiceRouter } from "./app/modiuls/bookService/boolService.router";

const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

//router
app.use("/api/auth", UserRouter);
app.use("/api", ServiceRouter);
app.use("/api", SlotsRouter);
app.use("/api", BookingServiceRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHendleing);

export default app;
