"use server";

import { hash } from "bcryptjs";
import { prisma } from "../lib/db";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { findUserByEmail } from "@/utilis/user";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  const userExist = await findUserByEmail(email);

  if (userExist) {
    console.log("user exist==>", userExist);
    return { error: "email already taken" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Send token verification email
  return { success: "User Created" };
};
