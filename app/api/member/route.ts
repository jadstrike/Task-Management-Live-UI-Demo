import { request } from "http";
import db from "../../../utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const members = await db.member.findMany({});
  return NextResponse.json({ data: members });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const member = await db.member.create({
    data,
  });
  return NextResponse.json({ message: member });
};
