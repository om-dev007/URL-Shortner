import e from "express";
import urlModel from "./models/dbModel.js";
import router from "./router/user.js";
import urlRoutes from "./router/urlShorten.routes.js";
import cors from 'cors';
const app = e();

app.use(e.json());
app.use(cors());
app.use("/user", router);
app.use("/short", urlRoutes);

app.get("/shorten", async (req, res) => {
    const shortId = await urlModel.find()
    res.status(200).json({
        message: "successfully fetched the shorten url",
        shortId: shortId
    })
})

app.get("/:id", async (req, res) => {
    const {id} = req.params
    const url = await urlModel.findOne({shortId: id})

    if(!url) return res.status(404).json({
        message: "Url not found"
    })
    res.redirect(url.originalUrl)
})

export default app