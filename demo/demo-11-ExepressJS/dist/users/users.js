import express from "express";
const router = express.Router();
router.post("/login", (req, res) => {
    res.send("Login successful");
});
router.post("/register", (req, res) => {
    res.send("Registration successful");
});
export { router };
