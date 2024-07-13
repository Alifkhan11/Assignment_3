import jwt from 'jsonwebtoken';


export const createToken=(
    jwtPayloads:{email:string,phone:string},
    secret:string,
    expiresIn:string
)=>{
    return jwt.sign(jwtPayloads,secret,{expiresIn})
}