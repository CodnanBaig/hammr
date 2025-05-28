import jwt from "jsonwebtoken";

const verifyToken = async (req) => {
    const token = req.cookies.get("admin_token")?.value;

    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
            if (error) {
                console.log("error: ", error.message)
                return "Unauthorized access";
            }
            req.token_data = decoded
            // console.log("decode: ", decoded)
            return req;
        }); // Replace "token" with your secret key

    } catch (err) {
        return err.message
    }
}


export default verifyToken;