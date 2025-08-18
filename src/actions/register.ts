"use server";

import { hash } from "bcrypt";
import { prisma } from "../lib/db";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { error } from "console";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExist) {
    console.log("user exist==>", userExist);
    return { error: "email already taken" };
  }

  const User = prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Send token verification email
  return { success: "Email sent!" };
};
