"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const newMember = async (formData) => {
  // console.log(formData);
  const member = await db.member.create({
    data: {
      name: formData.get("name"),
      role: formData.get("role"),
      email: formData.get("email"),
    },
  });
  revalidatePath("/members");
};

export const deleteMember = async (id) => {
  await db.member.delete({
    where: { id },
  });
  revalidatePath("/members");
};
