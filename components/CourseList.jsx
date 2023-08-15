import { getAllCourse } from "@/prisma/course";
import CourseItem from "./CourseItem";
import SectionTitle from "./SectionTitle";

const CourseList = async () => {
  const courses = await getAllCourse();
  return (
    <div className="pb-20">
      <SectionTitle
        span="COURSES"
        h2="Browse all courses
"
        p="Explore our wide range of courses and enhance your knowledge from the comfort of your home."
      />
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
