import e from "express";
import urlRoutes from "./router/urlShorten.routes.js";
import cors from 'cors';

const app = e();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://trimly-in.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(e.json());
app.use("/api", urlRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Trimly URL Shortener API");
});

export default app