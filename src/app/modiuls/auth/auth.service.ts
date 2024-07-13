import httpStatus from "http-status";
import AppError from "../../error/appError";
import { TUsers } from "./auth.interfach";
import { User } from "./auth.model";
import { createToken } from "./auth.utils";
import config from "../../config";
import bcrypt from 'bcrypt'

const signupUserFromDB = async (payloads: TUsers) => {
  const user = await User.find();

  const isUserEmailExisit = user.map((en) => en.phone === payloads.phone);
  if (isUserEmailExisit.includes(true)) {
    throw new AppError(httpStatus.CONFLICT, "This Email is Alrady exisit");
  }

  const isUserPhoneNumberExisit = user.map((en) => en.phone === payloads.phone);
  if (isUserPhoneNumberExisit.includes(true)) {
    throw new AppError(
      httpStatus.CONFLICT,
      "This phone Number is Alrady exisit",
    );
  }

  const resualt = await User.create(payloads);
  return resualt;
};

const loginUserFromDb=async(payloads:Record<string,unknown>)=>{

  const user=await User.findOne({email:payloads.email})

  if(!user){
    throw new AppError(httpStatus.BAD_REQUEST,'This Email is not exisit')
  }


  const isDeleted=user.isDeleted
  if(isDeleted){
    throw new AppError(httpStatus.BAD_REQUEST,'This User is deleted')
  }


  const hashPassword=user.password
  const playinTextPassword=payloads?.password as string

  const isPasswordMatch=await bcrypt.compare(playinTextPassword,hashPassword)

  if(!isPasswordMatch){
    throw new AppError(httpStatus.BAD_REQUEST,'This Password is not valid')
  }

  const JwtPayloads={
    email:user.email,
    phone:user.phone
  }

  const accessToken=createToken(
    JwtPayloads,
    config.JWT_SECRET_ACCESS_KE as string,
    config.JWT_SECRET_ACCESS_TIME as string
  )
  const refressencToken=createToken(
    JwtPayloads,
    config.JWT_SECRET_REFRESSRS_KE as string,
    config.JWT_SECRET_REFRESSRS_TIME as string
  )


  return {
    accessToken,refressencToken
  }
  
}

export const UserService = {
  signupUserFromDB,
  loginUserFromDb
};
