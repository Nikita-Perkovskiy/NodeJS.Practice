import express, { Request, Response } from "express";

const userRouter = express.Router();

userRouter.post("/login", (req: Request, res: Response) => {
  res.send("Login successful");
});

userRouter.post("/register", (req: Request, res: Response) => {
  res.send("Registration successful");
});

export { userRouter };
