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
app.use("/", urlRoutes);

export default app