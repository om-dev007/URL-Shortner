import express from "express";
import cors from "cors";
import urlRoutes from "./router/urlShorten.routes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://trimly-in.vercel.app"
  ],
}));

app.use(express.json());

app.use("/api", urlRoutes);

export default app;