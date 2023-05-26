import { getCourse } from "@/prisma/course";
import { NextRequest, NextResponse } from "next/server";

export async function GET(NextRequest, { params }) {
  try {
    const { id } = params;
    const course = await getCourse(id);
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.error({ message: error.message });
  }
}
