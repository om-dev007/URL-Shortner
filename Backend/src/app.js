import e from "express";
import urlRoutes from "./router/urlShorten.routes.js";
import cors from 'cors';

const app = e();

app.use(e.json());
app.use(cors({
    origin: "*",
    credentials: false,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use("/api", urlRoutes);
app.get("/api", (req, res) => {
    res.send("Welcome to Trimly URL Shortener API");
});

export default app