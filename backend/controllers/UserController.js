import UserModal from "../Modal/User.modal.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
    try {
        const { userData } = req.body;
        const { name, email, password, confirmPassword, role } = userData;

        if (!name || !email || !password || !confirmPassword || !role)
            return res.status(404).json({
                success: false,
                message: "All fields are mandatory",
            });

        if (password !== confirmPassword)
            return res.status(404).json({
                success: false,
                message: "password doesnot match",
            });

        const user = await UserModal.find({ email });

        if (user.length)
            return res.status(404).json({
                success: false,
                message: "user already exist please try login",
            });

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = new UserModal({
            name,
            email,
            password: hashpassword,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "Registered Successfully",
            user: newUser,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error from catch block",
        });
    }
};


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body.userData;
        if (!email || !password) return res.json({ success: false, message: "All fields are mandatory..." })


        const user = await UserModal.findOne({ email })
        if (!user) return res.json({ success: false, message: "User not found.." })

        if (user.isBlocked) {
            return res.status(404).json({ success: false, message: "You are Blocked, Contact us." })
        }

        const isPasswordRight = await bcrypt.compare(password, user.password)

        if (isPasswordRight) {
            const userObject = {
                name: user.name,
                email: user.email,
                _id: user._id
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
            // console.log(token, "token here")
            return res.json({ success: true, message: "Login Success", user: userObject, token: token })
        }

        return res.json({ success: false, message: "Password is wrong.." })

    } catch (error) {
        return res.json({ success: false, message: error })
    }
}