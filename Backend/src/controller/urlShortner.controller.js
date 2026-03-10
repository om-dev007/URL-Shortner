import urlModel from "../models/dbModel.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
    const {originalUrl} = req.body;

    if(!originalUrl) {
        return res.status(400).json({
            message: "Please enter the input field"
        })
    }

    const id = nanoid(8);
    const shortenUrl = await urlModel.create({
        originalUrl: originalUrl,
        shortId: id,
    })

    return res.status(201).json({
        message: "Url shorten successfully",
        shortenUrl: shortenUrl.shortId
    })
}