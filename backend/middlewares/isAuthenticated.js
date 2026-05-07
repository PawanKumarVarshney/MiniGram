import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized: No token provided',
                success: false
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);

        if (!decode) {
            return res.status(401).json({
                message: 'Unauthorized: Invalid token',
                success: false
            });
        }

        req.id = decode.id;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Unauthorized: Token error',
            success: false
        });
    }
};

export default isAuthenticated;