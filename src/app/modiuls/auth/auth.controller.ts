import { UserService } from "./auth.service";
import catchAcync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import httpStatus from "http-status";
import config from "../../config";

const signuptUser = catchAcync(async (req, res) => {
  const resualt = await UserService.signupUserFromDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: resualt,
  });
});
const loginUser = catchAcync(async (req, res) => {
  const resualt = await UserService.loginUserFromDb(req.body);
  const { accessTokenBearer, refressencToken } = resualt;

  res.cookie("RefereachToken", refressencToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
    token: accessTokenBearer.slice(7),
    data: resualt.user,
  });
});

export const UserController = {
  signuptUser,
  loginUser,
};
