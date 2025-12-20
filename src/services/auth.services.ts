import * as userRepos from "../repositories/user.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  role: "MEMBER" | "ADMIN";
}) => {
  const user = await userRepos.findByEmail(data.email);
  if (user) {
    throw new Error("User already exists");
  }
  return await userRepos.createUser({
    ...data,
    password: await bcrypt.hash(data.password, 10),
  });
};

export const login = async (data: { email: string; password: string }) => {
  const user = await userRepos.findByEmail(data.email);
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign({ id: user.id, role: user.role }, jwtSecret, {
    expiresIn: "7d",
  });
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};
