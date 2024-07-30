import { Request, Response, Router } from "express";

const router = Router();

/* GET home page. */
router.get("/", function (_req: Request, res: Response) {
  res.send("hello world");
});

export default router;
