import bodyParser from "body-parser";
import express from "express";
import { json } from "body-parser";
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "*"
    })
)
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(express.json({ limit: '20mb' }))

app.get("/", (req, res) => {
    res.send("server Running");
});
export default app;