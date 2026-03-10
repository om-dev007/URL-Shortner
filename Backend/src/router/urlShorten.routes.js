import { Router } from "express";
import { createShortUrl } from "../controller/urlShortner.controller.js";

const urlRoutes = Router();

urlRoutes.post("/", createShortUrl)

export default urlRoutes;