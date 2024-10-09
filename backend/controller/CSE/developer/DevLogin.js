const UserModel = require("../../../models/CSE/LoginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const tokenData = {
            _id: user._id,
            email: user.email
        };

        const token = jwt.sign(
            { data: tokenData },
            process.env.TOKEN_SECRET_KEY,
            { expiresIn: '3h' }
        );

        const tokenOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        };

       
        res.cookie('token', token, tokenOptions).json({
            message: "Signin successful",
            data: token,
            error: false,
            success: true
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = LoginController;
