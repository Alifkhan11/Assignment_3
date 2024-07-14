export const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export type TUsers = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
  isDeleted?: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
