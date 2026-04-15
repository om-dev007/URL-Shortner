import urlModel from "../models/dbModel.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
    const {originalUrl} = req.body;

    if(!originalUrl) {
        return res.status(400).json({
            message: "Please enter the input field"
        })
    }

    res.send("Welcome to Trimly URL Shortener API...");

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

export const getShortUrl = async (req, res) => {
    const shortId = await urlModel.find();
    if(shortId.length <= 0) {
        return res.status(404).json({
            message: "No url found"
        })
    }
    return res.status(200).json({
        message: "Fetched successfully",
        shortId
    })
}

export const redirectController = async (req, res) => {
    const {id} = req.params;
    const url = await urlModel.findOne({shortId: id});
    if(!url) {
        return res.status(404).json({
            message: "that code url not found in the db"
        })
    }
    res.redirect(url.originalUrl);
}