import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://urlShortnerDb:leY2yk50DDHCyIZ4@urlshortnercluster.kjdh9nm.mongodb.net/urlDB")
    .then((res) => console.log("DB is connected successfully"))
    .catch(err => console.log(err))
}

export default connectDb