import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import logger from "morgan";
import { debug } from "./index";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  debug(err);

  return res.status(err.statusCode || 400).send({
    errors: [{ message: err.message }],
  });
});

export default app;
