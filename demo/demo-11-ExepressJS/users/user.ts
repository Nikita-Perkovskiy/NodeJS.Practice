import express, { Request, Response } from "express";

const router = express.Router();

router.post("/login", (req: Request, res: Response) => {
  res.send("Login successful");
});

router.post("/register", (req: Request, res: Response) => {
  res.send("Registration successful");
});

export { router };
