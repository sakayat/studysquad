import { getAllCourse } from "@/prisma/course";
import { NextResponse } from "next/server";


export async function GET(req) {
  try {
    const courses = await getAllCourse();
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.error({ message: error.message });
  }
}
