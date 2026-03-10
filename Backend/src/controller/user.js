import user from "../models/usermodel.js"

const handleUserSignUp = async (req, res) => {
    const {name, email, password} = req.body
    await user.create({
        name: name,
        email: email,
        password: password
    })

    res.status(200).json({
        message: "Data is stored in the db successfully"
    })
}

export default handleUserSignUp