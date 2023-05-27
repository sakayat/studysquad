import Button from "@/components/Button";
import { getCourse } from "@/prisma/course";
import { currencyFormatter } from "@/utils/currencyFormatter";

const CourseDetails = async ({ params }) => {
	const course = await getCourse(params.courseId);
	return (
		<div className="course-details py-10">
			<div
				style={{ backgroundImage: `url(${course.cover})` }}
				className="w-full lg:h-72 h-96 bg-no-repeat bg-cover"></div>
			<div className="w-full lg:flex lg:justify-between gap-5 py-5">
				<div className="lg:w-3/5 flex flex-col gap-2">
					<h2 className="text-4xl">{course.title}</h2>
					<span>Instructor: {course.instructor}</span>
					<span>
						Enrolled Students: <span className="font-bold">{course.student}</span>
					</span>
					<p>{course.description}</p>
				</div>
				<div className="lg:w-2/5 flex flex-col gap-2">
					<span>
						Duration: <span className="font-bold">{course.duration}</span> hours
					</span>
					<span>
						Rating: <span className="font-bold">{course.rating}</span>
					</span>
					<span>
						Price: <span className="font-bold"> {currencyFormatter(course.price)}</span>
					</span>
					<Button href="/" placeholder="Enroll Now" color="info" size="default" />
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
