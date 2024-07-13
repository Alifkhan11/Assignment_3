export type TUsers = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
  isDeleted?: boolean;
};
