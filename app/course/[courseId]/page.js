import Button from "@/components/Button";
import Course from "@/components/Course";
import { getCourse } from "@/prisma/course";

const CourseDetailsPage = async ({ params }) => {
	const course = await getCourse(params.courseId);
	return (
		<div className="course-details py-10">
			<Course course={course} key={course.id}/>
		</div>
	);
};

export default CourseDetailsPage;
