import { ErrorRequestHandler } from "express";
import config from "../config";

export type TErrorSources = {
  path: string | number;
  message: string;
}[];

const globalErrorHendleing: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  let message = "Something went wrong";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSource: errorSources,
    stack: config.NODE_ENV === "develpoment" ? err.stack : null,
    err,
  });
  next();
};

export default globalErrorHendleing;
