"use server";
import db from "./db";

export const newMember = async (formData) => {
  const member = await db.member.create({
    data: {
      name: formData.get("name"),
      role: formData.get("role"),
      email: formData.get("email"),
    },
  });
};
