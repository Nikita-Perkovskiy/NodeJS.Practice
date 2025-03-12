import express from "express";
const userRouter = express.Router();
userRouter.post("/login", (req, res) => {
    res.send("Login successful");
});
userRouter.post("/register", (req, res) => {
    res.send("Registration successful");
});
export { userRouter };
