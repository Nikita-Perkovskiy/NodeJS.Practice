import express from "express";
import { router } from "./users/users";
const port = 8000;
const app = express();
// Middleware to log time
app.use((req, res, next) => {
    console.log("Time:", new Date().toISOString());
    next();
});
// Middleware to parse JSON
app.use(express.json());
// Define routes
app.get("/hello", (req, res) => {
    res.send("Hello, world!");
});
app.use("/users", router);
// Start the server
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
