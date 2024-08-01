import httpStatus from "http-status";
import AppError from "../error/appError";
import catchAcync from "../utils/catchAsync";
import Jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modiuls/auth/auth.interfach";
import { User } from "../modiuls/auth/auth.model";

const auth = (...requireRole: TUserRole[]) => {
  return catchAcync(async (req, res, next) => {
    const token = req.headers.authorization;
    const orizinalToken=token?.slice(7)
    console.log(token,'................', orizinalToken);
    
    

    if (!orizinalToken) {
      throw new AppError(httpStatus.BAD_REQUEST, "You are not Authrazies");
    }

    const decoded = Jwt.verify(
      orizinalToken,
      config.JWT_SECRET_ACCESS_KE as string,
    ) as JwtPayload;

    const { email, role } = decoded;
    if (requireRole && !requireRole.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        `You are unauthorized Pleasr login and try again`,
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(httpStatus.CONFLICT, "This user is not founfd");
    }

    const isDeleted = user?.isDeleted;

    if (isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, "This user is not found !");
    }
    req.user = decoded;
    next();
  });
};

export default auth;
