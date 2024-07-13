import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
  JWT_SECRET_ACCESS_KE:process.env.JWT_SECRET_ACCESS_KE,
  JWT_SECRET_ACCESS_TIME:process.env.JWT_SECRET_ACCESS_TIME,
  JWT_SECRET_REFRESSRS_KE:process.env.JWT_SECRET_REFRESSRS_KE,
  JWT_SECRET_REFRESSRS_TIME:process.env.JWT_SECRET_REFRESSRS_TIME
};
// JWT_SECRET_ACCESS_KE= db666e964ed3234a8d1b798e654353334d144406a84bf830e1ab4cb1849b2eb8
// JWT_SECRET_REFRESSRS_KE= 61603f765c418c66a7cb26d7a8d16f3f61d094652b2a28e2e59c00505633868d52bbcd1b7dbb4656845b3457224575dc02ca32cbda50e30bcc7a801f602eca06
// JWT_SECRET_ACCESS_TIME= '3h'
// JWT_SECRET_REFRESSRS_TIME= '2d'