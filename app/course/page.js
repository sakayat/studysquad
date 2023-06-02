import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourse } from "@/prisma/course";

const CoursePage = async () => {
	const courses = await getAllCourse();
	return (
		<div className="py-10">
    <SectionHeader
			span="courses"
			h2="Browse all courses"
			p="it is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout"
		/>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
   {
      courses.map((course) => (
        <CourseItem key={course.id} course={course}/>
      ))
    }
   </div>
    </div>
	);
};

export default CoursePage;
