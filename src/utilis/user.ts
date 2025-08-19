import { prisma } from "../lib/db";

export const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (err) {
    console.error("Database error:", err);
    return { error: err };
  }
};

export const findUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (err) {
    console.error("Database error:", err);
    return { error: err };
  }
};
