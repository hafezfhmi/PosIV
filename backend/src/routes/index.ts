import { NextFunction, Request, Response, Router } from "express";

const router = Router();

/* GET home page. */
router.get("/", function (_req: Request, res: Response, _next: NextFunction) {
  res.send("hello world");
});

export default router;
