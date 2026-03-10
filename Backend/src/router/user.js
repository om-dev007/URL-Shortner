import e from "express";
import handleUserSignUp from "../controller/user.js";

const router = e.Router()

router.post("/", handleUserSignUp)

export default router